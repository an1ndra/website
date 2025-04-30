// Implement drizzle DB schema
// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
import {
  pgTable,
  integer,
  PgUUID,
  varchar,
  PgInteger,
} from "drizzle-orm/pg-core";
import { Inter } from "next/font/google";

const db = drizzle(process.env.PG_DATABASE_URL!);

export const users = pgTable("users", {
  id: integer().primaryKey(),
  first_name: varchar(),
  last_name: varchar(),
  email: varchar(),
});

export const checkout = pgTable("checkout", {
  id: integer().primaryKey(),
  country: varchar(),
  state: varchar(),
  street: varchar(),
  zipcode: varchar(),
});
