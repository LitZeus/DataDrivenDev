import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  connectionString: process.env.POSTGRES_URL_NO_SSL,
  ssl: {
    rejectUnauthorized: false, 
  },
  
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
