import Redis from "ioredis";
const redis = new Redis({
  host: "localhost", // or your Redis server host
  port: 6379, // default Redis port
  password: process.env.REDIS_PASSWORD, // if authentication is required
});
