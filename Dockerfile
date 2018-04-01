FROM ubuntu:16.04
MAINTAINER Sam "yim0331@gmail.com"
COPY . /Dreamize-ReactApp
WORKDIR /Dreamize-ReactApp
RUN sh /Dreamize-ReactApp/install.sh
ENTRYPOINT ["webpack-dev-server", "--hot", "--host", "0.0.0.0"]

