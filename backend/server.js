const express = require('express');
const { join } = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(join(__dirname, '..', 'frontend', 'dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'okay!' });
});

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
