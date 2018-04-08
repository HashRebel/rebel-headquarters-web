# Dev Ops Guide
This document is intended to detail all production related information.

## Hosting
Decided to go with [DigitalOcean](https://cloud.digitalocean.com)
Run call /scripts/rebel_headquarters_production.sh in order to connect to my VM

I used the following guide to initialize a fedora server.
[Setting up Fedora](https://www.digitalocean.com/community/tutorials/initial-setup-of-a-fedora-22-server?utm_source=Customerio&utm_medium=Email_Internal&utm_campaign=Email_FedoraDistroWelcome&mkt_tok=eyJpIjoiTkRrNE9XSXlNemRpT0RNMyIsInQiOiJiNVI0WTRVUEUxMUtJYlBJSXdMdUtjaGNldW1qWFFCa2hLWmt2dktaUnpwVUNYRkhVYXUydTJGeVY0Q3dlSmViNFwvNk9NNG5HZ29sMENmVnBqeHBjRzV2WGNMU3JcL1p6VDdVNElCb3Rad2YwZFh5ZWdaUytka1FoZEJKTHd4cDREIn0%3D)


## Setting up a hosts
### Setting up a Dokku host
Create a basic Dokku droplet.

Log in with root and follow:
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04?utm_source=Customerio&utm_medium=Email_Internal&utm_campaign=Email_UbuntuDistroNginxWelcome&mkt_tok=eyJpIjoiWldaaE9HVmlZemsyTmpVeSIsInQiOiJMb1l0UDBFRnR6NkNOXC9jdUM0cVZFZVA0eW5MZkVndGxCNkdGZWIwRHI2TkN0K1A1UE5YZjNMUlNzU2lFRFVmZWhRXC9MU3RcL0ZTOUJyYUtoZE1nV3NvXC9BMDlWZnI2a1hCVHBXK2JrekJpbEIxdkRkQVRcL0RkSEFRdWRpOVp3NEhtIn0%3D

Add a swap sace as suggested [here](https://medium.com/dirtyjs/how-to-deploy-vue-js-app-in-one-line-with-docker-digital-ocean-2338f03d406a) (You can run the create-swap-dokku.sh as root).
