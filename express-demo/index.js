const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.listen(3000, () => console.log("Listening to 3000"));

app.get('/', (req, res) => res.send("Hello World!!!"));

app.get('/api/course', (req, res) => res.send([1, 2, 3, 4]));

// app.get('/api/posts/:year/:month', (req, res) => {res.send(req.params)});

app.get('/api/posts/:year/:month', (req, res) => res.send(req.query));

app.post('/api/courses', (req, res) => {

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    // courses.push(course);
    res.send(course);

});