# Get the LTS version of node
FROM node:carbon

MAINTAINER Brian henze <brian.henze@hashrebel.com>

# TODO: add this back in:
# Creating new user and use to run the container.
# According to the following article the container is run as root. This will help
# secure the container.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
RUN usermod -d /home/hash_rebel -l hash_rebel node && \
  usermod -aG sudo hash_rebel

WORKDIR /home/hash_rebel/rebelheadquarters

# Copy the app to the working directory
COPY . .

# TODO: Clean this up a bit by creating a cleanup script.
RUN yarn install --only=production

EXPOSE 80

# Start it up when the container is constructed.
CMD [ "npm", "start" ]

# Swtich to the user we created ealier
# QUESTION: When should I set the user? Can I set it above or at the end?
USER hash_rebel
