const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle text and JSON bodies
app.use(express.text());
app.use(express.json());

// Echo logic: respond with the same body received
app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});