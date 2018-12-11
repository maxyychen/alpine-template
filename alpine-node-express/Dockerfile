FROM alpine:latest
MAINTAINER Max Chen <maxyychen@gmail.com>

# application folder
ENV APP_DIR /app
ENV HOST 0.0.0.0
ENV PORT 8130

# install require package 
RUN apk add --no-cache bash nodejs nodejs-npm \  
  && npm install yarn express -g \
  && mkdir ${APP_DIR} 

# VOLUME [${APP_DIR}]
WORKDIR ${APP_DIR}

# expose web server port
# only http, for ssl use reverse proxy
EXPOSE ${PORT}

# copy config files into filesystem
COPY app /app
COPY entrypoint.sh /entrypoint.sh

# exectute start up script
ENTRYPOINT ["/entrypoint.sh"]
