module.exports = {
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    // typescript
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    // vue.js
    'vue/component-name-in-template-casing': 'off',

    // import
    'import/order': 'error',
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'require-jsdoc': 'off',
    'require-await': 'off',
    'valid-jsdoc': 'off',
    'sort-imports': 'off',
    'prefer-const': 'error', // 再代入がない限り const を強制
    strict: 'off', // strict 強制を緩和
    // 'max-len': ['error', {
    //   code: 80,
    //   tabWidth: 2,
    //   ignoreTrailingComments: true,
    //   ignoreUrls: true,
    //   ignoreStrings: true,
    //   ignoreTemplateLiterals: true,
    //   ignoreRegExpLiterals: true
    // }
    // ],
    // prettierの設定
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        useTabs: false,
      },
    ],
  },
};
