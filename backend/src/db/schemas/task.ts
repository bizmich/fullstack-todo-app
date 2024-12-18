import {
  integer,
  pgTable,
  varchar,
  text,
  boolean,
  timestamp,
} from 'drizzle-orm/pg-core';
export const taskTable = pgTable('tasks', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }),
  description: text(),
  isDone: boolean().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  priority: integer(),
});
