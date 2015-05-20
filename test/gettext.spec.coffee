'use strict';

assert = require 'assert'
ParserPO = require '../lib/parser-po'

describe 'Gettext', ->

    before =>
        po = new ParserPO __dirname + '/dist/en.po'
        @keys = po.getKeys()
        @pluralKeys = po.getEmptyPlurals()

    describe 'Node Types', =>

        describe 'ArrayExpression', =>
            it 'should have found a method call inside a `ArrayExpression` node', =>
                assert.equal true, @keys.indexOf('ArrayExpression') isnt -1

        describe 'AssignmentExpression', =>
            it 'should have found a method call inside a `AssignmentExpression` node', =>
                assert.equal true, @keys.indexOf('AssignmentExpression') isnt -1

        describe 'BinaryExpression', =>
            it 'should have found a method call inside a `BinaryExpression` node', =>
                assert.equal true, @keys.indexOf('BinaryExpression') isnt -1

        describe 'CallExpression', =>
            it 'should have found a method call inside a `CallExpression` node', =>
                assert.equal true, @keys.indexOf('CallExpression') isnt -1

        describe 'TryStatement', =>
            it 'should have found a method call inside a `TryStatement` node', =>
                assert.equal true, @keys.indexOf('TryStatement') isnt -1

        describe 'CatchClause', =>
            it 'should have found a method call inside a `CatchClause` node', =>
                assert.equal true, @keys.indexOf('CatchClause') isnt -1

        describe 'ConditionalExpression', =>
            it 'should have found a method call inside a `ConditionalExpression` node', =>
                assert.equal true, @keys.indexOf('ConditionalExpression') isnt -1

        describe 'DoWhileStatement', =>
            it 'should have found a method call inside a `DoWhileStatement` node', =>
                assert.equal true, @keys.indexOf('DoWhileStatement') isnt -1

        describe 'ExpressionStatement', =>
            it 'should have found a method call inside a `ExpressionStatement` node', =>
                assert.equal true, @keys.indexOf('ExpressionStatement') isnt -1

        describe 'ForInStatement', =>
            it 'should have found a method call inside a `ForInStatement` node', =>
                assert.equal true, @keys.indexOf('ForInStatement') isnt -1

        describe 'ForStatement', =>
            it 'should have found a method call inside a `ForStatement` node', =>
                assert.equal true, @keys.indexOf('ForStatement') isnt -1

        describe 'FunctionExpression', =>
            it 'should have found a method call inside a `FunctionExpression` node', =>
                assert.equal true, @keys.indexOf('FunctionExpression') isnt -1

        describe 'IfStatement', =>
            it 'should have found a method call inside a `IfStatement` node', =>
                assert.equal true, @keys.indexOf('IfStatement') isnt -1

        describe 'LabeledStatement', =>
            it 'should have found a method call inside a `LabeledStatement` node', =>
                assert.equal true, @keys.indexOf('LabeledStatement') isnt -1

        describe 'LogicalExpression', =>
            it 'should have found a method call inside a `LogicalExpression` node', =>
                assert.equal true, @keys.indexOf('LogicalExpression') isnt -1

        describe 'MemberExpression', =>
            it 'should have found a method call inside a `MemberExpression` node', =>
                assert.equal true, @keys.indexOf('MemberExpression') isnt -1

        describe 'NewExpression', =>
            it 'should have found a method call inside a `NewExpression` node', =>
                assert.equal true, @keys.indexOf('NewExpression') isnt -1

        describe 'Property', =>
            it 'should have found a method call inside a `Property` node', =>
                assert.equal true, @keys.indexOf('Property') isnt -1

        describe 'ReturnStatement', =>
            it 'should have found a method call inside a `ReturnStatement` node', =>
                assert.equal true, @keys.indexOf('ReturnStatement') isnt -1

        describe 'SequenceExpression', =>
            it 'should have found a method call inside a `SequenceExpression` node', =>
                assert.equal true, @keys.indexOf('SequenceExpression') isnt -1

        describe 'SwitchCase', =>
            it 'should have found a method call inside a `SwitchCase` node', =>
                assert.equal true, @keys.indexOf('SwitchCase') isnt -1

        describe 'VariableDeclaration', =>
            it 'should have found a method call inside a `VariableDeclaration` node', =>
                assert.equal true, @keys.indexOf('VariableDeclaration') isnt -1

        describe 'VariableDeclarator', =>
            it 'should have found a method call inside a `VariableDeclarator` node', =>
                assert.equal true, @keys.indexOf('VariableDeclarator') isnt -1


    describe 'Methods', =>

        it 'should have found 1 call to `gettext` method', =>
            assert.equal 1, @keys.indexOf('callto_gettext') isnt -1

        it 'should have found 1 call to `ngettext` method', =>
            assert.equal 1, @keys.indexOf('callto_ngettext %d') isnt -1


    describe 'Plurals', =>

        it 'should have found 2 empty plural', =>
            assert.equal 2, @pluralKeys.length

