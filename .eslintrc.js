module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    node: true // 此项指定环境的全局变量，下面的配置指定为node环境
  },
  'extends': [ // 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  rules: { //规则配置写在这里
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [1, 4],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
          beforeColon: true,
          afterColon: true,
          mode: 'strict',
      }
    ],
    // @fixable 对象的最后一个属性末尾必须有逗号
    // @off 没必要限制
    'comma-dangle': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint' // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  }
}
