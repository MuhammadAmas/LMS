import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;
const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
});
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
