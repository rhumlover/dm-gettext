fs = require 'fs'
path = require 'path'
esprima = require 'esprima'

module.exports = class ParserJS

    constructor: (@file, @filter) ->
        try
            process.stdout.write "Processing #{file}"
            content = fs.readFileSync file
            ast = esprima.parse content, {loc:true}
            @results = []
            @main ast
            process.stdout.write ": #{@results.length} keys found\n"
            return @results
        catch e
            throw e
            return null

    main: (node) ->
        return unless node?
        if @filter?(node) then @addResult node
        if @[node.type]? then @[node.type](node)
        else
            console.log node
            console.log '-------------------------------------------'

    addResult: (node) ->
        [key,params...] = node.arguments
        if key.type is 'Literal'
            type = if params.length and /%d/.test(key.value) then 'plural' else 'singular'
            @results.push {type, name:key.value, loc:node.loc, file:@file, params}

    # PARSING
    walk: (children) ->
        @main c for c in children

    # CASES
    'Program':                  (node) -> @walk node.body

    'ArrayExpression':          (node) -> @walk node.elements
    'AssignmentExpression':     (node) -> @walk [node.left, node.right]
    'BinaryExpression':         (node) -> @walk [node.left, node.right]
    'BlockStatement':           (node) -> @walk node.body
    'BreakStatement':           (node) -> return
    'CallExpression':           (node) -> @walk [node.callee].concat(node.arguments)
    'CatchClause':              (node) -> @walk [node.body]
    'ConditionalExpression':    (node) -> @walk [node.test, node.consequent, node.alternate]
    'ContinueStatement':        (node) -> return
    'DoWhileStatement':         (node) -> @walk [node.body]
    'EmptyStatement':           (node) -> return
    'ExpressionStatement':      (node) -> @walk [node.expression]
    'ForInStatement':           (node) -> @walk [node.body]
    'ForStatement':             (node) -> @walk [node.body]
    'FunctionDeclaration':      (node) -> @walk node.body
    'FunctionExpression':       (node) -> @walk [node.body]
    'Identifier':               (node) -> return
    'IfStatement':              (node) -> @walk [node.consequent, node.alternate]
    'LabeledStatement':         (node) -> @walk [node.body]
    'Literal':                  (node) -> return
    'LogicalExpression':        (node) -> @walk [node.left, node.right]
    'MemberExpression':         (node) -> @walk [node.object]
    'NewExpression':            (node) -> @walk [node.callee].concat(node.arguments)
    'ObjectExpression':         (node) -> @walk node.properties
    'Property':                 (node) -> @walk [node.value]
    'ReturnStatement':          (node) -> @walk [node.argument]
    'SequenceExpression':       (node) -> @walk node.expressions
    'SwitchCase':               (node) -> @walk [node.test].concat(node.consequent)
    'SwitchStatement':          (node) -> @walk node.cases
    'ThisExpression':           (node) -> return
    'ThrowStatement':           (node) -> return
    'TryStatement':             (node) -> @walk [node.block].concat(node.handlers)
    'UnaryExpression':          (node) -> return
    'UpdateExpression':         (node) -> @walk [node.argument]
    'VariableDeclaration':      (node) -> @walk node.declarations
    'VariableDeclarator':       (node) -> @walk [node.init]
    'WhileStatement':           (node) -> @walk node.body
