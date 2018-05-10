# Dev Ops Guide

This document is intended to detail all production related information.

## Hosting

Decided to go with [DigitalOcean](https://cloud.digitalocean.com)
Run call /scripts/rebel_headquarters_production.sh in order to connect to my VM

I used the following guide to initialize a fedora server.
[Setting up Fedora](https://www.digitalocean.com/community/tutorials/initial-setup-of-a-fedora-22-server?utm_source=Customerio&utm_medium=Email_Internal&utm_campaign=Email_FedoraDistroWelcome&mkt_tok=eyJpIjoiTkRrNE9XSXlNemRpT0RNMyIsInQiOiJiNVI0WTRVUEUxMUtJYlBJSXdMdUtjaGNldW1qWFFCa2hLWmt2dktaUnpwVUNYRkhVYXUydTJGeVY0Q3dlSmViNFwvNk9NNG5HZ29sMENmVnBqeHBjRzV2WGNMU3JcL1p6VDdVNElCb3Rad2YwZFh5ZWdaUytka1FoZEJKTHd4cDREIn0%3D)


## Setting up a host

### Setting up a Dokku host

Create a [Digital Ocean](https://cloud.digitalocean.com/droplets) droplet for hosting the site.

* Create a basic Dokku droplet with an SSH key
* Login with root user
* Follow [this](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04?utm_source=Customerio&utm_medium=Email_Internal&utm_campaign=Email_UbuntuDistroNginxWelcome&mkt_tok=eyJpIjoiWldaaE9HVmlZemsyTmpVeSIsInQiOiJMb1l0UDBFRnR6NkNOXC9jdUM0cVZFZVA0eW5MZkVndGxCNkdGZWIwRHI2TkN0K1A1UE5YZjNMUlNzU2lFRFVmZWhRXC9MU3RcL0ZTOUJyYUtoZE1nV3NvXC9BMDlWZnI2a1hCVHBXK2JrekJpbEIxdkRkQVRcL0RkSEFRdWRpOVp3NEhtIn0%3D) to create a new user
* Delete root and disable login with password (only allow ssh login)

Setup your development machine to push to new server

* Setup git

``` linux
# git remote add dokku dokku@hashrebel.net:rebel-headquarters
```

* Deploying the code is as simple as doing a git push! Yay!

#### Notes

Log in with root and follow [this](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04?utm_source=Customerio&utm_medium=Email_Internal&utm_campaign=Email_UbuntuDistroNginxWelcome&mkt_tok=eyJpIjoiWldaaE9HVmlZemsyTmpVeSIsInQiOiJMb1l0UDBFRnR6NkNOXC9jdUM0cVZFZVA0eW5MZkVndGxCNkdGZWIwRHI2TkN0K1A1UE5YZjNMUlNzU2lFRFVmZWhRXC9MU3RcL0ZTOUJyYUtoZE1nV3NvXC9BMDlWZnI2a1hCVHBXK2JrekJpbEIxdkRkQVRcL0RkSEFRdWRpOVp3NEhtIn0%3D)

Add a swap space as suggested [here](https://medium.com/dirtyjs/how-to-deploy-vue-js-app-in-one-line-with-docker-digital-ocean-2338f03d406a) (You can run the create-swap-dokku.sh as root).

*gotchas:*

Somebich! I accidentally gave dokku the wrong domain name when I first created the site (at the step where you need to go to the IP address and set up the last few things needed for dokku). If you do this fuck! There doesn't seem to be much help out there on this one so I think this would be a great one to write an article on. Dokku stores the hostname and all your app info in ```/home/dokku```. There is also a hostfile in there that needs to be updated if you fucked up the initial setup.

For the life of me I couldn't figure out how to build a production version of my site. After many frustrating hours I realized it was documented in the README all along. I just need to use the ```npm run build```. This takes care of minification and any post script shit. I will want to make some custom scripts for the build once I get a better grasp on nodejs.
