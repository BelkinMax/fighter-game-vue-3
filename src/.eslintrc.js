module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    indent: ['error', 2],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    "space-in-brackets": ["error", "always"]
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}