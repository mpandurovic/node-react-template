import express from 'express';

const app = express();

app.use(express.static('dist'));
app.get('/api/hello', (req, res) => res.send({
  hello: 'reload test',
}));

// eslint-disable-next-line no-console
app.listen(8080, () => console.log('Listening on port 8080!'));
