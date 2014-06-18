#
# * grunt-gettext
# * https://github.com/rhumlover/grunt-gettext
# *
# * Copyright (c) 2014 Thomas Le Jeune
# * Licensed under the MIT license.
#
"use strict"

_ = require 'lodash'
fs = require 'fs'
path = require 'path'
ParserJS = require '../lib/parser-js'
ParserPO = require '../lib/parser-po'
PO = require '../lib/po'

# --------------------------------
# DIST
# --------------------------------
generate = (data, grunt) ->
    options = @options {}
    methods = options.methods ? '__'

    parseFilter = (node) ->
        if node.type is 'CallExpression' then return do ->
            callee = node.callee
            if cname = callee.name then return ~methods.indexOf cname
            if pname = callee.property?.name then return ~methods.indexOf pname
            return false
        return false

    ArrayProto = Array.prototype

    @files.forEach (f) ->
        return unless f.src?

        finalKeys = []
        f.src
            .filter(fs.existsSync)
            .map((filepath) -> new ParserJS filepath, parseFilter)
            .forEach((key) -> ArrayProto.push.apply finalKeys, key)

        return unless finalKeys.length

        if f.dest?
            if not fs.existsSync(f.dest) then fs.writeFileSync f.dest, ''

            existingKeys = new ParserPO(f.dest).getKeys()

            grunt.log.writeln "Filtering existing keys..."
            newKeys = finalKeys.filter (ob) -> !~existingKeys.indexOf(ob.name)

            grunt.log.writeln "Removing doublons..."
            newKeys = _.unique newKeys, (ob) -> ob.name

            grunt.log.writeln "#{newKeys.length} new keys found:", newKeys.map (ob) -> ob.name

            if newKeys.length
                PO.write f.dest, newKeys, options
                grunt.log.ok "File #{f.dest} written"

            emptyPlurals = new ParserPO(f.dest).getEmptyPlurals()
            if emptyPlurals.length
                grunt.log.warn "There is #{emptyPlurals.length} plural keys empty. Be sure to write them before submitting the file"
                console.log emptyPlurals
            else
                grunt.log.ok "Plural forms are up to date"


# --------------------------------
# CLEAN
# --------------------------------
clean = (data, grunt) ->
    options = @options {}
    methods = options.methods ? '__'

    parseFilter = (node) ->
        if node.type is 'CallExpression' then return do ->
            callee = node.callee
            if cname = callee.name then return ~methods.indexOf cname
            if pname = callee.property?.name then return ~methods.indexOf pname
            return false
        return false

    ArrayProto = Array.prototype

    cleanPO = (file, keys) ->
        content = grunt.file.read(file).split(/\n/)
        output = []
        removed = []

        for line, index in content
            nextLine = content[index+1]

            if lock is true
                if line is ''
                    removed.push line
                    lock = false
                else
                    removed.push line
                continue

            if nextLine? and key = nextLine.match /msgid "(.+)"/
                _key = key[1].replace /\\"/g, '"'
                if !!~keys.indexOf _key
                    lock = true
                    removed.push line
                    continue

            output.push line

        grunt.file.write file, output.join('\n')

    @files.forEach (f) ->
        return if not f.src? or not f.dest?

        finalKeys = []
        f.src
            .filter(fs.existsSync)
            .map((filepath) -> new ParserJS filepath, parseFilter)
            .forEach((key) -> ArrayProto.push.apply finalKeys, key)

        return unless finalKeys.length

        if fs.existsSync f.dest
            existingKeys = new ParserPO(f.dest).getKeys()
            foundKeys = _.pluck finalKeys, 'name'

            unused = []
            existingKeys.forEach (eKey) ->
                unused.push eKey if !~foundKeys.indexOf eKey

            if unused.length
                console.log "#{unused.length} unused keys have been found", unused
                cleanPO f.dest, unused
                grunt.log.ok "#{unused.length} unused keys have been cleaned in #{f.dest}"
            else
                grunt.log.ok "No unused keys have been found"

# --------------------------------
# EXPORT
# --------------------------------
module.exports = (grunt) ->

    grunt.registerMultiTask "gettext", "Gettext syntax parser across .js files. Does not use a classic grep, but a real parsing function using Esprima", (target) ->

        if @target is 'clean'
            clean.call @, @data, grunt
        else
            generate.call @, @data, grunt
