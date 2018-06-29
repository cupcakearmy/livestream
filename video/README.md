# Livestream

Dockerized livestream server based on nginx that serves HLS and DASH.

## Quickstart 💥

```
docker-compose up -d
```

## Setup 🏗

Tweak `nginx.conf` to your likings if necessary.

## Usage 👾

Stream to it with [OBS](https://obsproject.com/)

Settings -> Stream:
 - Stream Type = custom
 - Url = rtmp://localhost/mychannel
 - Stream Key = some *non empty* string

Settings -> Output:
 - Output Mode = Simple
 - Streaming
   - Bitrate = depends on resolution and quality. check [here](https://support.video.ibm.com/hc/en-us/articles/207852117-Internet-connection-and-recommended-encoding-settings)