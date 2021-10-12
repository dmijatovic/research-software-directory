export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fe-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  router: {
    middleware: ['auth']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    optionsPath: './vuetify.options.js'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      github: {
        // get it from env file
        clientId: process.env.AUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
        // no any scope - just public info
        scope: undefined
      },
      // gitlab: {
      //   scheme: 'oauth2',
      //   // get it from env file
      //   clientId: process.env.AUTH_GITLAB_CLIENT_ID,
      //   clientSecret: process.env.AUTH_GITLAB_CLIENT_SECRET,
      //   // no any scope - just public info
      //   scope: ['email', 'profile'],
      //   endpoints: {
      //     authorization: 'https://accounts.google.com/o/oauth2/auth',
      //     token: undefined,
      //     userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
      //     logout
      //   }
      // },
      google: {
        scheme: 'oauth2',
        clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
