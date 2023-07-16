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

export async function deleteCourse(id) {
    const query = {
        text: 'DELETE FROM courses WHERE course_id = $1',
        values: [id]
    };
    const { rowCount } = await pool.query(query.text, query.values);
    return rowCount;
}
export async function getAllCourses() {
    const { rows } = await pool.query('SELECT * FROM courses');
    return rows;
}

export async function getUserCourses(user_id) {
    const { rows } = await pool.query('SELECT * FROM courses WHERE user_id = $1', [user_id]);
    return rows;
}

export async function createCourse(course_id, course_name, instructor_name, image, description, ratings, user_id) {
    const { rows } = await pool.query('INSERT INTO courses (course_id, course_name, instructor_name, image, description,ratings,user_id) VALUES ($1, $2, $3, $4, $5,$6,$7) RETURNING *', [course_id, course_name, instructor_name, image, description, ratings, user_id]);
    return rows[0];
}

export async function createUser(username, password, type, email) {
    const { rows } = await pool.query('INSERT INTO users (username, password, type,email ) VALUES ($1, $2, $3, $4) RETURNING *', [username, password, type, email]);
    return rows[0];
}

export async function getUser(email, password) {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    // const user = rows[0];
    return rows[0];
}

// export async function deleteAccount(email){
//     const {rows} = await pool.query('DELETE FROM users WHERE email = $1', [email]);
//     return rows[0];
// }

export async function deleteAccount(email) {
    await pool.query('DELETE FROM users WHERE email = $1', [email]);
    return { success: true };
}