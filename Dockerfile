FROM alpine:3.7

RUN  apk add --no-cache openssl ca-certificates wget unzip nginx nginx-mod-rtmp ffmpeg

VOLUME [ "/stream" ]

CMD nginx -g 'daemon off;'
