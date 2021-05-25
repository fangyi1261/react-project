/* eslint-disable */
module.exports = {
  extends: [
    'eslint:recommended', // 所有在规则页面被标记为“✔️”的规则将会默认开启
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'babel',
  ],
  rules: {
    'func-names': 0,
    'arrow-parens': 0,
    'prefer-const': 2,
    'prefer-destructuring': [1, {
      "array": false,
      "object": true,
    }],
    'class-methods-use-this': 0,  // 不判断对象方法里是否使用了 this
    'consistent-return': 0,       // 允许函数根据代码分支具有不同的return行为
    'consistent-this': 2,       // this 的别名统一使用 that
    'curly': [2, 'all'],          // 语句块不允许省略花括号
    'func-style': ['error', 'declaration', { "allowArrowFunctions": true }], // 只允许使用 function 定义函数
    'no-await-in-loop': 0,        // 循环里的 await
    'no-bitwise': 0,              // 允许位运算
    'no-console': 0,              // 上线的代码里不允许有 console
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // 不允许空函数
    'no-nested-ternary': 0,       // 允许三元运算嵌套
    'no-param-reassign': ['error', { props: false }],              // 禁止对参数赋值
    'no-plusplus': 0,             // 允许 ++  -- 运算
    'no-script-url': 0,           //
    'no-throw-literal': 0,
    'no-unused-expressions': ['error', { "allowShortCircuit": true, "allowTernary": true }],
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'fixed'], location: 'anywhere' }],
    'no-multiple-empty-lines': 0, // 允许连续空行
    'no-mixed-operators': 0,
    'no-prototype-builtins': 0, // 禁止操作 Object.prototype
    'object-curly-newline': ['error', {consistent: true}],
    // 'object-curly-newline': ['error', {multiline: true}],
    'prefer-arrow-callback': 0, // callback里允许使用普通函数
    'react/no-danger': 0, // 允许使用 dangerouslySetInnerHTML
    'react/no-direct-mutation-state': 2, // 禁止直接修改 state
    'react/no-render-return-value': 2,      // render 必须有返回值
    'react/prop-types': 0
  },
};