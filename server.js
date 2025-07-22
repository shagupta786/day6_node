const express = require('express');
const app = express();
const port = 3000;

// Body parser middleware
app.use(express.json());

// GET route: /students
app.get('/students', (req, res) => {
    const students = [
        { name: 'shagupta', age: 18, course: 'Node.js' },
        { name: 'shifa', age: 20, course: 'React' },
    ];
    res.json(students);
});

// POST route: /add-student
app.post('/add-student', (req, res) => {
    const student = req.body;  // Get data from Postman
    console.log('New Student:', req.body);
    res.send('Student data received');
});

// Server listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});