#https://wkrzywiec.medium.com/build-and-run-angular-application-in-a-docker-container-b65dbbc50be8
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/llp /usr/share/nginx/html


### STAGE 2:RUN ###
# Defining nginx image to be used
#FROM nginx:latest AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
#COPY --from=build /dist/src/app/dist/my-docker-angular-app /usr/share/nginx/html
#COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
#EXPOSE 80

