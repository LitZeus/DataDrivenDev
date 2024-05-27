import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }
  try {
    const { name, email, subject, message } = req.body;

    // Insert document into PostgreSQL
    const query = 'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4)';
    const values = [name, email, subject, message];

    await pool.query(query, values);

    // Respond with success message
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ msg: 'Failed to process form submission' });
  }
};
