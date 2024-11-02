const express = require('express');
const app = express();
const PORT = 3030;

app.get('/', (req, res) => {
    res.send('to My Node.js App!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
