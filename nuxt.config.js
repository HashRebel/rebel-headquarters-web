const pkg = require('./package');

module.exports = {
    mode: 'universal',

    /*
    ******************************************************************************
     ** Headers of the page
     ** TODO: Prun unneeded fonts
     ******************************************************************************
     */
    head: {
        title: pkg.longName,
        link: [{
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Michroma|Montserrat:300|lato:100,300,400,700'
        }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#e7bb21'
    },

    /*
     ******************************************************************************
     ** Global CSS
     ******************************************************************************
     */
    css: [
        '@/assets/styles/main.scss'
    ],

    /*
     ******************************************************************************
     ** Plugins to load before mounting the App
     ******************************************************************************
     */
    plugins: [{
        src: '~/plugins/vue-mq.js',
        ssr: false
    }],

    /*
     ******************************************************************************
     ** Nuxt.js modules
     ******************************************************************************
     */
    modules: [
        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
        '@nuxtjs/markdownit',
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        // Doc: https://pwa.nuxtjs.org/setup.html
        '@nuxtjs/pwa',
        // This allows me to import the following files into my vue files.
        ['nuxt-sass-resources-loader', [
            '@/assets/styles/vars/_all.scss',
            '@/assets/styles/base/mixins.scss'
        ]]
    ],

    /*
     ******************************************************************************
     ** setting environment variables
     ******************************************************************************
     */
    env: {
        cmsApiKey:  process.env.COCKPIT_API_KEY || 'INVALID.KEY',
        cmsBaseUrl: process.env.COCKPIT_URL || 'http://localhost:4000'
    },

    /*
     ******************************************************************************
     ** Axios module configuration
     ******************************************************************************
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ******************************************************************************
     ** Build configuration
     ******************************************************************************
     */
    build: {
        postcss: {
            plugins: {
                // Customize `postcss-cssnext` default options
                'postcss-cssnext': {
                    browsers: ['>5%'],
                    features: {
                        customProperties: false
                    }
                },
                // 'autoprefixer' : {
                // },
                'postcss-responsive-type': {},
                'postcss-hexrgba': {}
            }
        },
        vender: ['vue-mq'],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if(ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    },

    /*
     ******************************************************************************
     ** Nuxt Markdown module. Markdownit options defined:
     ** https://github.com/markdown-it/markdown-it
     ******************************************************************************
     */
    markdownit: {
        injected: true,
        linkify: true,
        breaks: true
    },


    /*
     ******************************************************************************
     ** PWA Module configuration
     ******************************************************************************
     */

    /*
     ** Meta data https://pwa.nuxtjs.org/modules/meta.html. NOTE: most standard
     ** meta is automatically included. mobileApplOS is disabled by default.
     */
    meta: {},

    /*
     ** Manifest configuration (part of the pwa nuxt module)
     */
    manifest: {
        name: pkg.longName,
        short_name: pkg.name,
        display: 'standalone',
        background_color: '#000',
        theme_color: '#e7bb21',
        description: pkg.description,
        lang: 'en'
    },

    /*
     ** Workerbox options (part of the pwa nuxt module. https://developers.google.com/web/tools/workbox/)
     */
    workbox: {
        // Workbox options
    }
};
