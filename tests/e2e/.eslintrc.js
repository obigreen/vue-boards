module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended"],
  plugins: ["vue"],
  rules: {
    strict: "off",
  },
};
