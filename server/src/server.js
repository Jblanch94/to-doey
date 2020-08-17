const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const todoListRoutes = require('./routes/todoListRoutes');
const todoRoutes = require('./routes/todoItems');

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/todo-lists', todoListRoutes);
app.use('/api/todo-items', todoRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
