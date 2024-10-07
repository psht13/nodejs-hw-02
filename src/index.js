import express from 'express';
import * as path from 'path';

const app = express();

const PORT = 8080;

app.get('/', (_req, res) => {
  res.sendFile('/static/index.html', { root: path.resolve('src') });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
