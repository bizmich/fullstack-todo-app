import { integer, pgTable, varchar, text, boolean } from 'drizzle-orm/pg-core';
export const taskTable = pgTable('tasks', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text(),
  description: varchar({ length: 255 }),
  isDone: boolean().default(false),
});
