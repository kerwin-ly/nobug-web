// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console": 0, // 禁止console
    'import/prefer-default-export': 0, // 是否默认只有一个export时，必须export default
    'no-lonely-if': 0, // 是否防止无意义的if else嵌套
    'import/no-unresolved': 0, // 关闭局部引入报错
    'comma-dangle': ["error", "never"], // 对象末尾不能有逗号
    'arrow-body-style': 0, // 关闭不必要的return
    'array-callback-return': 0, // 关闭数据map，reduce等必须return。
    'consistent-return': 0, // 关闭箭头函数必须返回return
    'prefer-const': 0, // 尽量使用const
    'max-len': 0, // 每行最多100字符
    'no-new': 0, // 强迫new
    'class-methods-use-this': 0, // class内尽量用this
    'no-use-before-define': 0 // 定义之后再使用
  }
}
