import express from 'express';

const app = express();

app.use(express.static('dist/client'));
app.get('/api', (req, res) => res.send({
  appName: 'Template App',
}));

// eslint-disable-next-line no-console
app.listen(8080, () => console.log('Listening on port 8080!'));
