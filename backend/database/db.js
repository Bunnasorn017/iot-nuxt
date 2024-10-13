const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'iot',
  password: '418017',
  port: 5432,
});

async function queryDatabase() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM Users');
    console.log(result.rows);
    client.release();
  } catch (err) {
    console.error('เกิดข้อผิดพลาดในการเชื่อมต่อ:', err);
  }
}

queryDatabase();