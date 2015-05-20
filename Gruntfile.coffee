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

        mochaTest:
            test:
                options:
                    reporter: 'spec'
                    require: 'coffee-script/register'
                    captureFile: 'tmp/test/results.txt'
                src: ['test/*.coffee']

        gettext:
            test:
                options:
                    methods: ['__', 'gettext', 'ngettext']
                    header:
                        'Project-Id-Version':           'hey-alfred@4.0'
                        'Report-Msgid-Bugs-To':         'Batman <batman@nananananananana.com>'
                        'Last-Translator':              'Batman <batman@nananananananana.com>'
                        'Language-Team':                'Gotham Inc. <gotham@nananananananana.com>'
                        'Language':                     'en'
                        'Plural-Forms':                 'nplurals=2; plural=(n != 1);'
                        'MIME-Version':                 '1.0'
                        'Content-Type':                 'text/plain; charset=UTF-8'
                        'Content-Transfer-Encoding':    '8bit'
                src: [
                    'test/prepare/*.js'
                ]
                dest: 'test/dist/en.po'

    }

    grunt.loadTasks "tasks"

    # These plugins provide necessary tasks.
    grunt.loadNpmTasks "grunt-contrib-clean"
    grunt.loadNpmTasks "grunt-coffeelint"
    grunt.loadNpmTasks "grunt-mocha-test"

    # Whenever the "test" task is run, first clean the "tmp" dir, then run this
    # plugin's task(s), then test the result.
    grunt.registerTask "test", [
        "clean"
        "gettext"
        "mochaTest"
    ]

    # By default, lint and run all tests.
    grunt.registerTask "default", [
        "jshint"
        "test"
    ]
    return
