import { iTask } from '../interfaces/interfaces';
import mongoose, { Query } from 'mongoose';
import {Task} from '../../mugger'

const dbAddress = '127.0.0.1';
const dbPort = '27017';

const uri = `mongodb://${dbAddress}:${dbPort}/good-deeds-manager`
mongoose.set('strictQuery', false);


async function getTasksDB(): Promise<iTask[]> {
  mongoose.connect(uri);
  const data = Task.find(Number,Task)

  return data

}


async function createTaskDB(task: string): Promise<iTask[]> {
return
}

async function updateTaskDB(id: number, task: string): Promise<iTask[]> {
return
}

async function deleteTaskDB(id: number): Promise<iTask[]> {
return
}



export { getTasksDB, createTaskDB, updateTaskDB, deleteTaskDB };