import { Router } from 'express';
import { destroy, index, show, store, update } from './controller';

const TaskRouter = Router();

TaskRouter.get('/', index);
TaskRouter.post('/', store);
TaskRouter.put('/:id', update);
TaskRouter.get('/:id', show);
TaskRouter.delete('/:id', destroy);

export default TaskRouter;
