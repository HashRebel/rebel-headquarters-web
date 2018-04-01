# Get the LTS version of node
FROM node:carbon

MAINTAINER Brian henze <brian.henze@hashrebel.com>

# Creating new user and use to run the container.
# According to the following article the container is run as root. This will help
# secure the container.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
RUN usermod -d /home/hash_rebel -l hash_rebel node && \
  usermod -aG sudo hash_rebel

# Create app directory
WORKDIR /home/hash_rebel/rebelheadquarters

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# TODO: create a port selector
EXPOSE 8080

# FIXME: installing some tools to help me diagnose issues. These are only for hacking
# purposes and should be removed in prodduction versions
CMD [ "apt-get", "update" ]
CMD [ "apt-get", "install curl netstat" ]

CMD [ "npm", "start" ]

# Swtich to the user we created ealier
# QUESTION: When should I set the user? Can I set it above or at the end?
USER hash_rebel
