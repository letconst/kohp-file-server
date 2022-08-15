FROM denoland/deno:centos-1.24.1

EXPOSE 8000

WORKDIR /app

USER deno

COPY . .

RUN deno cache serve.ts

CMD ["run", "--allow-net", "--allow-read=.", "serve.ts"]
