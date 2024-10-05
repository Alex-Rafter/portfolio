import js from "@eslint/js";
import pluginVue from 'eslint-plugin-vue'
export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      // override/add rules settings here, such as:
      'vue/no-unused-vars': 'error'
    }
  }
]