CREATE TABLE IF NOT EXISTS "todo" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "todo_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255),
	"description" text,
	"isDone" boolean DEFAULT false,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
