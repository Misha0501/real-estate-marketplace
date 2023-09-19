import Redis from "ioredis";

const getRedisUrl = () => {
    if (process.env.KV_URL) {
        return process.env.KV_URL;
    }
    throw new Error("Provide Redis url")
}

let redisClient;

// Using below construction to avoid creating multiple instances of PrismaClient in development mode
if (process.env.NODE_ENV === "production") {
    redisClient = new Redis(getRedisUrl())
} else {
    redisClient = new Redis();
}

export const redis = redisClient;
