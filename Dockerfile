FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

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
CMD [ "npm", "start" ]

# Creating new user and use to run the container.
# According to the following article the container is run as root. This will help
# secure the container.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
RUN usermod -d /home/hash_rebel -l hash_rebel node
USER hash_rebel
