import { Router } from "express";

const TaskRouter = Router();

// index
TaskRouter.get('/', (req, res) => {
   res.json('Get all tasks')
})

//store
TaskRouter.post('/', (req, res) => {
   res.json('create new task')
})

//store
TaskRouter.post('/', (req, res) => {
   res.json('create new task')
})

// update
TaskRouter.put('/:id', (req, res) => {
   res.json('update new task')
})

// show
TaskRouter.put('/:id', (req, res) => {
   res.json('show task')
})

// delete
TaskRouter.delete('/:id', (req, res) => {
   res.json('delete task')
});
export default TaskRouter;