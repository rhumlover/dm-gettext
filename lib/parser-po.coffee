fs = require 'fs'
path = require 'path'

module.exports = class ParserPO

    constructor: (@file) ->
        @content = String(fs.readFileSync file)
        @lines = @content.split /\n+/g

    getKeys: ->
        results = []
        for l in @lines
            if matches = l.match /msgid "(.+)"/
                results.push matches[1].replace /\\"/g, '"'
        results

    getEmptyPlurals: ->
        results = []
        for l, index in @lines
            if l is 'msgid_plural ""'
                msgid = @lines[index-1].replace(/msgid "(.+)"/, '$1')
                results.push msgid
        results
