import { Elysia } from "elysia";
import { db } from "./db";

const app = new Elysia()
  .decorate('db', db)
  .get("/", () => "Hello Elysia with Drizzle ORM!")
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
