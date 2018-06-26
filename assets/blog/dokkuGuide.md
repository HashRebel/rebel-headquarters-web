# Setting up hosting:

## Dokku

Setting up the dokku server:

Create a Ubuntu 16.04 server (at least 1 gig ram)

login ass root (ssh root@{your_server_ip}) 

Create new user (adduser hash_rebel)

give the new user sudo: (usermod -aG sudo hash_rebel)

login as new user and give ssh access with ssh public key:
``` 
su - hash_rebel
mkdir ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys 
(copy your ssh public key in this file)
chmod 600 ~/.ssh/authorized_keys
```

Diable root login (in /etc/ssh/sshd_config set PermitRootLogin to no ==> ```sudo systemctl reload sshd```)

Enable a firewal: sudo ufw allow OpenSSH && sudo ufw enable (open up appropriate ports)

Install Dokku and update Ubuntu and needed apps
http://dokku.viewdocs.io/dokku/getting-started/installation/


** THIS STEP IS IMPORTANT. Can leave you vulnerable if you do not complete this step. The process is left running.
Login to the IP address (if you have your domain pointed to your ip you can just use that instead) and complete the
dokku setup 

Create the application
``` dokku apps:create sandbox```

Optional (if you are deploying a website and want the site to show at your_domain.com then use the following step)
add the domain to the app (you can also add multipule domains here. i.g. your_domain.net your_domain.info...)

Setup for deploying on dokku: https://nuxtjs.org/faq/dokku-deployment/
dokku config:set my-nuxt-app NPM_CONFIG_PRODUCTION=false


Sweet guide to using let's encrypt with dokku. It is awesome and dokku manages setting everything up for you and a plugin is used to manage cert renewal (important since they are only 90 day certs).
https://medium.com/@pimterry/effortlessly-add-https-to-dokku-with-lets-encrypt-900696366890

TODO: Need to see about implementing http/2 like specified below.
https://words.mxbry.com/http-2-let-s-encrypt-dokku-how-to-do-all-three-7de94a0028fb

I read in a git hub [issue](https://github.com/dokku/dokku/issues/2844) that all I need to do is have the latest version of nignx to get http/2. Trying to update per: https://www.digitalocean.com/community/questions/nginx-update-upgrade
