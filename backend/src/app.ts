import express, { json, urlencoded } from 'express';
import TaskRouter from './routes/tasks/routes';
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json('boook');
});

app.use('/tasks', TaskRouter);

app.listen(3000, () => {
  console.log('listens to port 300');
});
