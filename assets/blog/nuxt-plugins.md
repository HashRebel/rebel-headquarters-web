# Creating a Nuxt plugins

## Creating a Vue MediaQuery plugin to deal with responsive design
[Vue MQ git](https://github.com/AlexandreBonaventure/vue-mq)
[Good guide](https://alligator.io/vuejs/vue-media-queries/)
[How to create Nuxt plugin](https://nuxtjs.org/examples/plugins)

Need to create you own JS file in a plugin folder and then register it in the nuxt.config. This file just needs to set up the breakpoints and then register the plugin with vue.

I will use the following breakpoints in order to aline with bulma (note: they also define tablet to be 769 but I don't see a need for that here):
{
    mobilesmall: 360,
    mobile: 768,
    desktop: 1024,
    widescreen: 1216,
    fullhd: 1408
}

Once the plugin file is created we then need to set up the nuxt.config to run it. It is also important that we set up ```build.vender``` in the nuxt config in order to only load vue-mq only once (if we don't it will be loaded per page bundle). 

e.g.
``` javascript
module.exports = {
  build: {
    vendor: ['vue-mq']
  },
  plugins: ['~/plugins/vue-mq.js']
}
```

Also note that we can set ssr to false in order to only load this plugin on the client-side. In our case we want to be able to do server side rendering (mainly for SEO since it can send pages already rendered to the browser on first visit. This means that everything is pre-rendered into html on the server and then as the client interacts with the site it will then render on the client side. [first visit--rendered on server. any subsequent interaction is rendered on the client side.])
