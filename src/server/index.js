const express = require('express');
import os from 'os';

const app = express();

app.use(express.static('dist'));
app.get('/api/hello', (req, res) =>
    res.send({ hello: 'reload test' })
);
app.listen(8080, () => console.log('Listening on port 8080!'));