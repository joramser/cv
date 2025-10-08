FROM oven/bun:1.2.23-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy root package.json and lockfile
COPY package.json bun.lock turbo.json ./

# Copy workspace packages
COPY packages/data/package.json ./packages/data/package.json
COPY packages/config/tsconfig/package.json ./packages/config/tsconfig/package.json
COPY apps/tui/package.json ./apps/tui/package.json

# Install dependencies
RUN bun install

# Build stage
FROM base AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY packages/data ./packages/data
COPY packages/config ./packages/config
COPY apps/tui ./apps/tui
COPY turbo.json package.json bun.lock ./

# Build standalone binary
RUN cd apps/tui && bun build --compile --minify --target=bun-linux-x64 --external react-devtools-core ./src/main.tsx --outfile cv

# Production stage - use minimal alpine image
FROM alpine:latest AS runner
WORKDIR /app

# Copy only the compiled binary
COPY --from=builder /app/apps/tui/cv /usr/local/bin/cv

CMD ["cv"]
