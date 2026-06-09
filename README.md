# Backend test project

## Running locally

To run locally with npm: `npm run start`

One endpoint exposed: `/`

To test, run `curl localhost:3000` to get the "Hello world!" response

## Docker

Build in Docker: `docker build -t backend .`

Run in Docker with Port 3000 exposed: `docker run --rm -p 3000:3000 backend`
