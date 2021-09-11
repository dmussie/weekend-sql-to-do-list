CREATE TABLE "tasks" ("id" serial primary key, "my_task" varchar(100) not null, "task_complete" boolean default false);

INSERT INTO "tasks" ("my_task")
VALUES
('Make a grocery run'),
('Make and eat dinner'),
('Start weekend project'),
('Go for a run'),
('Hang out with friends');