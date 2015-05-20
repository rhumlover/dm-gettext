# dm-gettext

> *Gettext* syntax parser across `.js` files, parsing the **A**bstract **S**yntax **T**ree ([AST](https://github.com/estree/estree/blob/master/spec.md)) of your files. Instead of *grepping* your source code, it's gonna parse it using [Esprima](http://esprima.org/) and extract all calls at your i18n methods.

## Using with Grunt

### Options

#### `methods` *array*
List of functions you call for getting translations in your application. Ex: `__`, `i18n`, `gettext`, `ngettext`...

#### `header` *object*
A text header that will be output on top of the `.po` destination file

#### `src` *array*
List of paths pointing to your JavaScript sources (grunt wizards used: `**`, `*`, `!`)

#### `dest` *string*
Your `.po` destination file


### Real-world example

```
module.exports = (grunt) ->

  gettext:
    options:
      methods: ['$translate', '__', 'gettext', 'ngettext']
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
      'app/scripts/**/*.js'
      '!app/scripts/vendor/*'
    ]
    dest: 'i18n/en.po'
```

## Tests

I'm using [Mocha](http://mochajs.org/) via [grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test):

`$ grunt test` or `npm test`