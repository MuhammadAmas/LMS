import mysql from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
}).promise();

export async function getNotes() {
    const [result] = await pool.query("SELECT * FROM notes");
    return result;
}

export async function getNote(id) {
    const [result] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);
    return result[0];
}

export async function createNote(title, contents) {
    const [result] = await pool.query("INSERT INTO notes (title, contents) VALUES (?, ?)", [title, contents]);
    const id = result.insertID;
    return getNote(id);
}
