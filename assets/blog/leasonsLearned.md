# Lessons Learned

This will contain all the lessons I have learned along the way to becoming a front end developer.

## CSS/Scss

CSS and sass has been a major pain in the ass to get working with Nuxtjs. First of all I was attracted to sass for the reason that I can structure it better and that I have access to variables. I was excited for the variables in order to keep global style sheets and have all my changeable code living in a few well organized files. One major problem, nuxt does not have an easy way to access global variables. In came nuxt-sass-resources-loader. This made everything relatively easy and with a bit of configuration, viola! I had access to variables.

What I didn't realize is the cost that would have. This will bundle all the CSS you ask it to with each of your js bundles. This is fine if it is just simple variables, but in my case I sucked in the whole scss structure tree. My current working theory is that I am sucking all my CSS in every bundle over and over whether I need it or not (and I am betting it gets sucked in multiple times). Going to try only sucking in the var files I need.

Yay! That worked and I was definitely right that all the CSS is getting written to each bundle (my resume bundle went from 1.3MB to 23kB so I am guessin the css classes were getting recursively added) 

Okay, after some fucking around I finally got things back to working. This was a pain in the ass because the vue-loader does not store mixins or variables. Using *nuxt-sass-resources-loader* in order to load variables. This will globally inject any scss into each bundle. Since I only want to inject variables and mixins to each file I am using the nuxt.config to set 
'''
['nuxt-sass-resources-loader', [
        '@/assets/styles/vars/_all.scss'
    ]
]
''' 

I leave it up to the _all.scss to load any variables/mixins I might need.

Okay, it is super important to make you load scss in the right order. If you want to override bulma default variables you need to make sure to pull in 
'''
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";
'''

Then you can update the variables. Later when you can import: 
'''
@import '~bulma/sass/utilities/derived-variables.sass';
@import '~bulma/sass/utilities/mixins.sass';
'''


TODO: a better idea would be to come up with a better global theme strategy) 
