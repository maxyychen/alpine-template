FROM alpine-oracle-instantclient

RUN apk update && \
    apk add musl-dev libffi-dev python3 python3-dev gcc make && \
    pip3 install --upgrade pip && \
    pip3 install cx_Oracle 
