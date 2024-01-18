// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', 'nuxt-server-utils'],

  ui: {},
  nuxtServerUtils: {
    // eslint-disable-next-line node/prefer-global/process
    mongodbUri: process.env.MONGODB_URI
  }
})
