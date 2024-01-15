// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  },
  vue: {
    overrides: {
      'vue/comma-dangle': ['error', 'never']
    }
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true
  }
})
