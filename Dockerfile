
COPY docs/ /docs/docs/
WORKDIR /docs
RUN mkdocs build
