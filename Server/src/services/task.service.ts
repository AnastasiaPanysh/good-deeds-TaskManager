import { getTasksDB, createTaskDB, updateTaskDB, deleteTaskDB } from '../repository/task.repository';
import { iTask } from '../interfaces/interfaces';

async function getTasks(): Promise<iTask[]> {
  const dataTasks = await getTasksDB();
//   if (!dataTasks.length) throw new Error(ExceptionType.GET_TASKS_NOT_FOUND.message);
  return dataTasks;
}


async function createTask(task: string): Promise<iTask[]> {
  const dataTask = await createTaskDB( task);
//   if (!dataTask.length) throw new Error(ExceptionType.POST_TASK_NOT_FOUND.message);
  return dataTask;
}

async function updateTask(id: number, task: string): Promise<iTask[]> {
  const dataTask = await updateTaskDB(id, task);
//   if (!dataTask.length) throw new Error(ExceptionType.PUT_TASK_FOUND.message);
  return dataTask;
}

async function deleteTask(id: number): Promise<iTask[]> {
  const dataTask = await deleteTaskDB(id);
//   if (!dataTask.length) throw new Error(ExceptionType.DELETE_TASK_NOT_FOUND.message);
  return dataTask;
}



export { getTasks, createTask, updateTask, deleteTask };