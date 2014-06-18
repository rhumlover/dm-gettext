#
# * grunt-gettext
# * https://github.com/rhumlover/grunt-gettext
# *
# * Copyright (c) 2014 Thomas Le Jeune
# * Licensed under the MIT license.
#
"use strict"

module.exports = (grunt) ->

    grunt.initConfig {
        coffeelint:
            options:
                'configFile': 'coffeelint.json'
            app: [
                "Gruntfile.coffee"
                "tasks/*.coffee"
            ]

        clean:
            tests: ["tmp"]

        gettext:
            test:
                options:
                    header:
                        'Project-Id-Version':           'grunt-gettext'
                        'Report-Msgid-Bugs-To':         'Thomas LE JEUNE'
                        'Last-Translator':              'Thomas LE JEUNE <thomas.lejeune@dailymotion.com'
                        'Language-Team':                'thomas.lejeune'
                        'Language':                     'English (USA)'
                        'Pack-Name':                    'English'
                        'Lang-Code':                    'en'
                        'Country-Code':                 'US'
                        'Plural-Forms':                 'nplurals=2; plural=(n != 1);'
                        'MIME-Version':                 '1.0'
                        'Content-Type':                 'text/plain; charset=UTF-8'
                        'Content-Transfer-Encoding':    '8bit'
                        'X-Poedit-SourceCharset':       'UTF-8'
                files: [
                    'test/templates.js'
                ]
                dest: 'tmp/messages.po'
    }

    grunt.loadTasks "tasks"

    # These plugins provide necessary tasks.
    grunt.loadNpmTasks "grunt-contrib-clean"
    grunt.loadNpmTasks "grunt-coffeelint"

    # Whenever the "test" task is run, first clean the "tmp" dir, then run this
    # plugin's task(s), then test the result.
    grunt.registerTask "test", [
        "clean"
    ]

    # By default, lint and run all tests.
    grunt.registerTask "default", [
        "jshint"
        "test"
    ]
    return
