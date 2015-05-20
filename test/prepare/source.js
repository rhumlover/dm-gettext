// @see http://www.graspjs.com/docs/syntax-js/
// @see http://esprima.org/doc/

// Helpers
function MyObject(){};
var __ = console.log.bind(console),
    exec = function(){};


// arr (ArrayExpression)
//  node array attributes:
//      elements (els)
//  syntax:
//      [element_0, element_1, ..., element_n]
var ArrayExpression = [ __('ArrayExpression') ];


// assign (AssignmentExpression)
//  node attributes:
//      left (l),  right (r)
//  primitive attributes:
//      operator (op)
//  syntax:
//      left operator right
var AssignmentExpression = __('AssignmentExpression');


// bi (BinaryExpression)
//  node attributes:
//      left (l),  right (r)
//  primitive attributes:
//      operator (op)
//  syntax:
//      left operator right
true === __('BinaryExpression');


// call (CallExpression)
//  node attributes:
//      callee
//  node array attributes:
//      arguments (args)
//  syntax:
//      callee(argument_1, argument_2, ..., argument_n)
exec(__('CallExpression'));


// try (TryStatement)
//  node attributes:
//      block,  handler,  finalizer
//  syntax:
//      try
//        block
//      [handler]
//      [finally
//         finalizer]
// ------
// catch (CatchClause)
//  node attributes:
//      param,  body
//  syntax:
//      catch (param)
//        body
try {
   __('TryStatement');
   throw 'CatchClause';
}
catch (e) {
   __('CatchClause');
}


// cond (ConditionalExpression)
//  node attributes:
//      test,  consequent (then),  alternate (alt, else)
//  syntax:
//      test ? consequent : alternate
true ? __('ConditionalExpression') : "alternate";


// do-while (DoWhileStatement)
//  node attributes:
//      test,  body
//  syntax:
//      do
//        body
//      while (test);
var dowhile = 1;
do {
    __('DoWhileStatement');
} while (dowhile--);


// exp-statement (ExpressionStatement)
//  node attributes:
//      expression (exp)
//  syntax:
//      expression;
__('ExpressionStatement');


// for-in (ForInStatement)
//  node attributes:
//      left (l),  right (r),  body
//  syntax:
//      for (left in right)
//        body
var forin_object = {a: 'a'};
for (forin_var in forin_object) {
    __('ForInStatement');
}


// for (ForStatement)
//  node attributes:
//      init,  test,  update,  body
//  syntax:
//      for ([init]; [test]; [update])
//        body
for (x = 0; x < 1; x++) {
    __('ForStatement');
}


// func-dec (FunctionDeclaration)
//  node attributes:
//      id,  body
//  node array attributes:
//      params
//  syntax:
//      function id([param_1], [param_2], [..., param_3])
//        body
function FunctionDeclaration() {
    __('FunctionDeclaration');
}


// func-exp (FunctionExpression)
//  node attributes:
//      id,  body
//  node array attributes:
//      params
//  syntax:
//      function [id]([param_1], [param_2], [..., param_3])
//        body
FunctionExpression = function() {
    __('FunctionExpression');
}


// if (IfStatement)
//  node attributes:
//      test,  consequent (then),  alternate (alt, else)
//  syntax:
//      if (test)
//        consequent
//      [else
//        alternate]
if (true) {
    __('IfStatement');
}


// label (LabeledStatement)
//  node attributes:
//      label,  body
//  syntax:
//      label: body;
outer:
    for (var j=0; j<10; j++) {
        if (j === 2) {
            __('LabeledStatement');
            break outer;
        }
    }


// logic (LogicalExpression)
//  node attributes:
//      left (l),  right (r)
//  primitive attributes:
//      operator (op)
//  syntax:
//      left operator right
true && __('LogicalExpression');


// member (MemberExpression)
//  node attributes:
//      object (obj),  property (prop)
//  primitive attributes:
//      computed
//  syntax:
//      object.property
MyObject.MemberExpression = __('MemberExpression');


// new (NewExpression)
//  node attributes:
//      callee
//  node array attributes:
//      arguments (args)
//  syntax:
//      new callee(argument_1, argument_2, ..., argument_n)
var NewExpression = new MyObject(__('NewExpression'));


// prop (Property)
//  node attributes:
//      key,  value (val)
//  primitive attributes:
//      kind
//  syntax:
//      key: value
var Property = {
    prop: __('Property')
};


// return (ReturnStatement)
//  node attributes:
//      argument (arg)
//  syntax:
//      return argument;
(function() {
    return __('ReturnStatement');
})();


// seq (SequenceExpression)
//  node array attributes:
//      expressions (exps)
//  syntax:
//      expression_1, expression_2, ..., expression_n
__('SequenceExpression'), true;


// switch (SwitchStatement)
//  node attributes:
//      discriminant
//  node array attributes:
//      cases
//  syntax:
//      switch (discriminant) {
//        case_1
//        case_2
//        ...
//        case_n
//      }
// -----
// switch-case (SwitchCase)
//  node attributes:
//      test
//  node array attributes:
//      consequent (then)
//  syntax:
//      case test | default :
//       consequent
switch (true) {
    case true:
        __('SwitchCase');
}


// var-decs (VariableDeclaration)
//  node array attributes:
//      declarations (decs)
//  primitive attributes:
//      kind
//  syntax:
//      var declaration_1[, declaration_2, ..., declaration_n]
var a = true,
    b = __('VariableDeclaration');


// var-dec (VariableDeclarator)
//  node attributes:
//      id,  init
//  syntax:
//      id = init
var VariableDeclarator = __('VariableDeclarator');


// while (WhileStatement)
//  node attributes:
//      test,  body
//  syntax:
//      while (test)
//        body
var whilest = 1;
while (whilest--) {
    __('WhileStatement');
}


// Plural
__('%d test', 1);

// Other method names
gettext('callto_gettext');
ngettext('callto_ngettext %d', 1);
