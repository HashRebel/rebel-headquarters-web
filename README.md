
[twitter_banner]: https://drive.google.com/uc?export=download&id=19fLfd86Spxlt-kEM27vgTeG5Hu6plmI3 "Hash Rebel Banner"


# Rebel Headquarters - A Sandbox For Decentralizing the World
![alt text][twitter_banner]
This site aims to be the headquarters of the decentralized future by providing a sandbox for experimentation. This site is also intended to be a living portfolio for the work of @bhenze, a Hash Rebel OG.




## Developer Notes:
Branches should start with the ISSUE number so I can quick tab.


> The Rebel Headquarters is a sandbox for all Hash Rebel related content

### Build Setup

#### NPM Build and Run Commands
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# Linter - Sass
gulp lint
```

#### Docker Builds
I created a docker image for containing the rebel headquarters website. This cane be found at [hashrebel/rebel-headquarters](https://hub.docker.com/r/hashrebel/rebel-headquarters/)

To run the site through docker use the following:
``` bash
docker-compose up
```


#### SACC
To create CSS run the following:
gulp sass
