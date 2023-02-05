import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError';
import { getTasks, createTask, updateTask, deleteTask } from '../services/task.service';

const route = express.Router();

route.get('/', async function (req: Request, res: Response) {
  try {
    const dataTasks = await getTasks();
    buildResponse(res, 200, dataTasks);
  } catch (error) {
    handleError(res, 404, 'error');
  }
});


route.post('/', async function (req: Request, res: Response) {
  try {
    const { number, task } = req.body;
    const dataTask = await createTask(task);
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, 'error');
  }
});

route.put('/:id', async function (req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const dataTask = await updateTask(id, task );
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, 'error');
  }
});

route.delete('/:id', async function (req: Request, res: Response) {
  try {
    const { id } = req.params;
    const dataTask = await deleteTask(id);
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, 'error');
  }
});



export default route;