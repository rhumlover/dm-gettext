fs = require 'fs'
path = require 'path'
pluralForms = require './plural-forms.json'

class PO

    @write: (fileDest, keys, options) ->
        filepath = path.resolve fileDest

        if fs.statSync(filepath).size is 0
            ((header) ->
                return unless header?

                header['POT-Creation-Date'] = (new Date().toUTCString())
                headerStr = Object.keys(header).map((key) -> "\"#{key}: #{header[key]}\\n\"").join('\n')
                headerStr = 'msgid ""\nmsgstr ""\n' + headerStr + '\n'

                fs.writeFileSync filepath, headerStr
            )(options.header)

        ((keys) ->
            output = []

            keys.forEach (key) ->
                name = key.name.replace /"/g, '\\"'
                output.push "\n#: #{key.file} #{key.loc.start.line}:#{key.loc.start.column}"
                output.push "msgid \"#{name}\""

                if key.type is 'singular'
                    output.push 'msgstr ""'
                else
                    output.push 'msgid_plural ""'
                    for i in [0...key.params.length*2]
                        output.push "msgstr[#{i}] \"\""
                return

            fs.appendFileSync filepath, output.join('\n') + "\n"
        )(keys)

        return

module.exports = PO