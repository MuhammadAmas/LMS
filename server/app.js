import express from 'express';
import cors from 'cors';
import { getCourses, createCourse, deleteCourse, createUser, getUser } from './database.js'
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

app.post('/signup', async (req, res) => {
    const { username, password, type, email, } = req.body;
    try {
        const user = await createUser(username, password, type, email,);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(400).send('Bad Request');
    }
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUser(email, password);
        if (user.password == password) {
            res.status(201).send(user);
        }
        else {
            res.status(404).send('Unauthorized User');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Bad Request');
    }
});

app.delete('/courses/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const course = await deleteCourse(id);
        res.sendStatus(201).send(course);
    } catch (error) {
        console.error(error);
        res.sendStatus(400).send('Bad Request');
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

