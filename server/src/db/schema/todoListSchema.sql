CREATE TABLE todo_lists (
    todo_list_id SERIAL PRIMARY KEY,
    todo_list_name VARCHAR(255) NOT NULL,
    fk_user_id INT REFERENCES users(user_id) FOREIGN KEY
);