import express from 'express';

const app = express();

app.use(express.static('dist/client'));
app.get('/api/hello', (req, res) => res.send({
  hello: 'world',
}));

// eslint-disable-next-line no-console
app.listen(8080, () => console.log('Listening on port 8080!'));
