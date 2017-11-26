-- Create the 'tasks' table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    created TIMESTAMP,
    name TEXT,
    description TEXT,
    completed BOOLEAN,
    due_date TIMESTAMP
);

-- Test data for tasks

INSERT INTO tasks (created, name, description, completed, due_date) VALUES (CURRENT_TIMESTAMP, 'Create API', 'Create API for Tom Stuff', FALSE, CURRENT_TIMESTAMP + '7 days');
INSERT INTO tasks (created, name, description, completed, due_date) VALUES (CURRENT_TIMESTAMP, 'Create React Front End', 'Create presentation tier for Tom Stuff', FALSE, CURRENT_TIMESTAMP + '7 days');