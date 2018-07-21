FROM alpine:3.8

RUN apk update && \
    apk add --no-cache musl-dev postgresql-dev && \
    apk add --no-cache gcc python3 python3-dev  && \
    pip3 install --upgrade pip setuptools && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
    if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi && \
    rm -r /root/.cache && \
    pip3 install --no-cache-dir psycopg2 



