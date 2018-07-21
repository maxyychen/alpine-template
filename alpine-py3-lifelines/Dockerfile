FROM alpine:3.8

RUN apk add --no-cache g++ && \
    apk add --no-cache gcc gfortran python3 python3-dev py-pip build-base wget  && \
    apk add --no-cache freetype-dev libpng-dev openblas-dev && \
    ln -s /usr/include/locale.h /usr/include/xlocale.h && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
    if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi && \
    rm -r /root/.cache && \
    pip install --no-cache-dir numpy && \
    pip install --no-cache-dir lifelines && \
    rm -rf /var/cache/apk/*



