const express = require('express');
const bodyParser = require("express");
const app = express();

app.use(bodyParser.json());

const courses = [
    {id: 1, name: 'computer science'},
    {id: 2, name: 'information technology'},
    {id: 3, name: 'business intelligence'},
];


app.get('/', (req, res) => {
    res.send('Simple REST Api');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));