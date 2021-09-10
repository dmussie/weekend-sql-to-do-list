CREATE TABLE "tasks" ("id" serial primary key, "my_task" varchar(100) not null, "task_complete" boolean);

INSERT INTO "tasks" ("my_task", "task_complete")
VALUES
('Make a grocery run', false),
('Make and eat dinner', false),
('Start weekend project', true),
('Go for a run', false),
('Hang out with friends', false);