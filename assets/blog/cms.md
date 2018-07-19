# Content Management System

This blog should give examples setting up a blog using the following CMS solutions:

* [ButterCMS](https://vuejs.org/v2/cookbook/serverless-blog.html)
  * [example 1](https://vuejs.org/v2/cookbook/serverless-blog.html)
  * [example 2](https://css-tricks.com/building-serverless-cms-powered-vue-js/)
  * [example 3](https://medium.freecodecamp.org/how-to-build-a-serverless-cms-powered-vue-js-application-ee17f5957538)
https://vuejs.org/v2/cookbook/serverless-blog.html
* [Storybook](https://www.storyblok.com/)
  * [example 1](https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes)
  * [example 2](https://medium.com/@dominikangerer/add-a-headless-cms-to-vuejs-in-5-minutes-8a8537e18897)
* [Cosmic.js](https://cosmicjs.com/cms-api)
  * [Example 1](https://cosmicjs.com/knowledge-base/vuejs-cms)
* [PageKit](https://pagekit.com/)
  * [example 1](https://pagekit.com/docs/developer/vuejs-and-webpack)
* [Grav](https://getgrav.org/)
* [CockpitCMS](https://getcockpit.com)
  * [example 1](https://snipcart.com/blog/cockpit-cms-tutorial-nuxtjs)


[Use this as a sandbox to try out the cms'](https://hackernoon.com/how-to-build-a-simple-blog-using-vue-cosmic-js-and-deploy-to-netlify-2bd3e2b3a115)


## Summary
Seems like the hosted solutions all cost after a time period. The best one I found was free for single use but once you allow others to edit it starts to cost. Just for the sake of being open source I think I am going to go with one of the self hosting solutions. 


## CosmicJS
Started a trial but it looks like it requires me to pay after 2 months.

## ButterCMS
Free for the first two months but costs after that. Really nice interface though (so far my favorite but that is after knowing very little)

## PageKit
Cool self hosted solution. I am seeing if I can selfhost on my current Dokku instance. It would be cool to host my content alongside my site. Could also separate out but for now this should be plenty enough for what I want to do. 

Fork and clone the [pagekit repo](https://github.com/pagekit/pagekit) 

''' git clone git@github.com:HashRebel/pagekit.git '''

Doesn't work so well with dokku so I would need to come up with something else to deploy it. I could do an old school style deploy to get it working for now but it would be nice to have a nice dokku push.

## Cockpit CMS 
Self-hosted solution that seems to play nice with Dokku. I just had to push the cockpit git branch to dokku and it automatically set everything up for me.

### Dokku instructions
[Dokku install guide that I used](https://github.com/woutervddn/cockpit-dokku)

The following was left out of the guide and must be executed to install the mongoDB dokku plugin
'''sudo dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo'''

## Storyblok
Starting with Storyblok since I found a nice [nuxtjs guide](https://www.storyblok.com/tp/headless-cms-nuxtjs). 
