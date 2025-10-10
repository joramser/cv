# Install depedencencies
FROM oven/bun:1.2.23-alpine AS base

FROM base AS deps
WORKDIR /app

COPY package.json bun.lock turbo.json ./

COPY packages/data/package.json ./packages/data/package.json
COPY packages/config/tsconfig/package.json ./packages/config/tsconfig/package.json
COPY apps/tui/package.json ./apps/tui/package.json

RUN bun install

# We need this depedency to compile but it is not used in code, so installing during build
RUN cd ./apps/tui && bun add react-devtools-core -D

# Build Bun binary
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY packages/data ./packages/data
COPY packages/config ./packages/config
COPY apps/tui ./apps/tui
COPY turbo.json package.json bun.lock ./

RUN cd apps/tui && bun build --compile --minify --target=bun-linux-x64 ./src/main.tsx --outfile cv

# Expose binary
FROM alpine:latest AS runner
WORKDIR /app

COPY --from=builder /app/apps/tui/cv /usr/local/bin/cv

CMD ["cv"]
