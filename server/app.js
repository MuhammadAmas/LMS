import express from 'express';
import cors from 'cors';
import { getCourses, createCourse, deleteCourse } from './database.js'
const app = express();
app.use(cors())
app.use(express.json());

app.get('/courses', async (req, res) => {
    const notes = await getCourses();
    res.send(notes)
})

app.post('/courses', async (req, res) => {
    const { course_id, course_name, instructor_name, ratings, created_date, image, description } = req.body;
    try {
        const course = await createCourse(course_id, course_name, instructor_name, ratings, created_date, image, description);
        console.log("object");
        res.status(201).send(course);
    } catch (error) {
        console.error(error);
        res.status(400).send('Bad Request');
    }
});

app.delete('/courses/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const course = await deleteCourse(id);
        res.status(200).send(course);
    } catch (error) {
        console.error(error);
        res.status(400).send('Bad Request');
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

