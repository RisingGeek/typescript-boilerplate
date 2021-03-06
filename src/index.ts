import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, welcome to Typescript Boilerplate.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));