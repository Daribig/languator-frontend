# comes with node and npm installed - this image is sourced from the docker registry, and is 
# then cached on our local machine to save the network overhead for when other (local) docker images 
# want to build-on from this base-image
FROM node:13.12.0-alpine
# set the directroy within the container's file system that all other commands in this docker 
# file should, by default, run relative to
WORKDIR /app
# copy everything in current directory to the "/app/" directory.
COPY . .
# install node modules into this image's filesystem at the "/app/" directory
RUN npm install
# lets a host port map to the docker container's port 3000
EXPOSE 8080
# bundle the files with no sourcemaps and don't setup a development file server (that has 
# hot-reload) (the 'dev-build' npm command will bundle the files with source maps and 
# setup a development file-server)
RUN npm run prod-build
# 'CMD' == the sign-off command that'll be called on when we instantiate docker containers from 
# the docker image created by 'this' Dockerfile - everythin before this command is run when 
# creating the image, 'this' command is the only thing called on when creating a container from 
# the image - eg, we don't copy directory - eg, we don't run 'npm install' again when creating a 
# container from an image, we run that when creating an image from a Dockerfile - do the OS 
# project on (file system) images to better understand this.
# NOTE: this command takes between 15-25 seconds to run, as it's performing bundling and then
# setting up a file-server to serve the bundled files
CMD ["npm", "run", "serve-prod"]
