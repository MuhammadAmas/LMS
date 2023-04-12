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

export async function getCourses() {
    const [result] = await pool.query("SELECT * FROM courses");
    return result;
}

export async function createCourse(course_id, course_name, instructor_name, ratings, created_date, image, description) {
    const [result] = await pool.query("INSERT INTO courses (course_id, course_name, instructor_name, ratings, created_date, image, description) VALUES (?, ?, ?, ?, ?, ?, ?)", [course_id, course_name, instructor_name, ratings, created_date, image, description]);
    const id = result.insertID;
    return getCourses(id);
}

export async function deleteCourse(id) {
    const [result] = await pool.query("DELETE FROM courses WHERE course_id = ?", [id]);
    return result;
}
