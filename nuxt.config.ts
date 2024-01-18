// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    auth: {
      // eslint-disable-next-line node/prefer-global/process
      secret: process.env.AUTH_SECRET,
      // eslint-disable-next-line node/prefer-global/process
      origin: process.env.AUTH_ORIGIN
    }
  },

  modules: ['@nuxt/ui', 'nuxt-server-utils', '@sidebase/nuxt-auth'],

  ui: {},
  nuxtServerUtils: {
    // eslint-disable-next-line node/prefer-global/process
    mongodbUri: process.env.MONGODB_URI
  },

  auth: {
    // eslint-disable-next-line node/prefer-global/process
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  }
})
