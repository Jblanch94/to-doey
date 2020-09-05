CREATE TABLE todos (
    todo_id SERIAL PRIMARY KEY,
    todo_description VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT 'false',
    fk_todo_list_id INT REFERENCES todo_list(todo_list_id)
);