CREATE TABLE "my_tasks" ("id" SERIAL PRIMARY KEY, 
"task" VARCHAR(100) NOT NULL, 
"task_complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "my_tasks" ("task")
VALUES
('Make a grocery run'),
('Make and eat dinner'),
('Start weekend project'),
('Go for a run'),
('Hang out with friends');
