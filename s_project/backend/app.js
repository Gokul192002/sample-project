const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: 'postgres',
  password: 'postgres',
  database: 'devops'
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ status: "Backend updated now  working", time: result.rows[0] });
});

app.listen(5000, () => console.log("Backend running on 5000"));
