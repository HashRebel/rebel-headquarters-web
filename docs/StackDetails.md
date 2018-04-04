# Stack
The following section details the stack choices for the overall site and any subsequent pages.

## Hosting Solution
The following sections describe my hosting related decisions:

### Hosting provider
* **_Digital Ocean_** - Fairly cheap solution to AWS and they offer many one click solutions and allow you to fully control your server. They also have a one click Dokku setup so I do not need to spend a bunch of time configuring the VM after.
* AWS - Staying away because I am not a fan of Amazon. I am sure this is a great service and is probably the best one out there but I refuse to give Amazon anymore money then I need too (I know I am a hypocrite because I have prime and order from them all the time but mainly because I do not have an alternative. At least in the hosting space I have many arguably better solutions)
* Git Pages - Pretty slick simple solution that would be great for quick prototyping. I might try to use this along side my Digital Ocean solution so I have experience quickly spinning up future MVPs (although it seems like I will be able to be just as fast at DO once I get the hang of it.

*Bonus:* Would be sweet to use the following to create a VM generating script: http://cloudinit.readthedocs.io/en/latest/

### Web Server
* Apache - Strong contender for the mantel of web server. You can hot load in and out any modules while the server is running.
* **_Nginx_** - Asynchronous, non-blocking, event-driven connection handling to allow for better scaling. This solution is less configurable and requires special handling for dynamic content but overall I like the features and think it is perfect for my solution. If this product ever achieves enterprise level I might consider Apache but for now Nginx is perfect for what I need. (also, note the trade-off; Apache provides more administrative configuration but comes at the cost of security of performance). Modules must to be loaded at compilation so this is much less flexible than Apache. I would actually have to compile from source myself if I need a module (even for dynamic support?).

Woot woot! Nginx comes bundled with dokku. Dokku seems to be a really nice SasS solution. Uses git to distribute apps, can manage multiple apps, uses nginx to rout requests, uses docker to manage containers and handles setting up domains. Great solution to get me up and running while I learn everything a bit deeper.

**Over the top bonus:** Interesting idea for down the road: set up a two tiered infrastructure using both Nginx and Apache. Nginx would be a reverse proxy which can handle any static calls itself and then for dynamic contend Ngnx can proxy the Apache server setup. This setup is extreme overkill for me but would be an interesting experiment non the less.

## Continuous integration
* **_Travis_** - Simple GUI and GitHub integration. Can control build behaviors via script (.travis.yml) and is free for open sourced projects.
* Jenkins - One of the oldest and best CI tools. The only problem is you either have to self host (which has a steep learning curve) or use their pay cloud service. It would be really fun to try to self-host a Jenkins server to do all my building but will punt this to the future since Travis will work for now.

## Continuous deployment
* **_Dokku_** -
** [Heroku Buildbacks](https://devcenter.heroku.com/articles/buildpacks) - This is the build system that dokku defaults to. Not sure if it is widely used otherwise.
** Docker - Dokku can also use a Dockerfile to deploy and app. Apparently this method will exclude some dokku features but seems just as flexable of an options. I can even do multistage build (for multiple environments).

## Package management
* **_NPM_** - for obvious reasons
* **_Yarn_** - this seems to give the benefit of ensuring packages are the right versions and seems to improve the npm flow.

## Styling
* **_Sass_** - CSS framework

## Frameworks
* **_Vue.js_** - Framework?

## Routing
* **_Vue Router_** - Router

## Workflow
* **_Babel_** - manages pushing front end code to the client? (at least that is what it seems to be doing). I think this sort of acts like a mini web server.
* **_Gulp_** - right now I am just using to manage Sass compilation but I imagine I will use for more.

## Linters
* eslint
* vue
* html
* sass-linter

## Page Specific
The following section details any page specific stack choices

### Home
