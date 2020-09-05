const { Pool } = require('pg');
require('dotenv').config({ path: 'server/config/config.env' });

const devConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const prodConfig = {
  connectionString: process.env.DB_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig
);

console.log(pool);

module.exports = pool;
