const dotenv = require("dotenv");
dotenv.config();

const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: false // Ensure SSL is disabled if not needed
});

module.exports = pool;
