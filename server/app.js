import express from 'express';
import {getNote, getNotes, createNote} from './database.js'
const app = express();
app.use(express.json());

app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    res.send(notes)
})

app.get('/notes/:id', async (req, res) => {
    const id = req.params.id
    const note = await getNote(id);
    res.send(note)
})

app.post('/notes', async (req, res) => {
    const {title, contents} = req.body;
    const note = await createNote(title, contents);
    res.status(201).send(note)
})

// app.use((err,req,res,next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// })

app.listen(3000, () => {
    console.log('Server started on port 3000');
})