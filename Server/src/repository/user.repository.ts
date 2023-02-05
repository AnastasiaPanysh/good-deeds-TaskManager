import { iUser } from '../interfaces/interfaces';
import mongoose, { mongo, Mongoose, Query } from 'mongoose';
import { User } from '../../mugger'

const dbAddress = '127.0.0.1';
const dbPort = '27017';

const uri = `mongodb://${dbAddress}:${dbPort}/good-deeds-manager`
mongoose.set('strictQuery', false);


async function getUserByEmailDB(email: string): Promise<String> {
  mongoose.connect(uri);
  let data = await User.findOne({ Email: email });
  return data.Email
}

async function getUserByUsernameDB(username: string): Promise<String> {
  mongoose.connect(uri);
  let data = await User.findOne({ Username: username })
  return data.Username

}


async function createUserDB(username: string, email: string, pwd: string): Promise<void> {
  mongoose.connect(uri);
  try {
    const userdb = new User({ Username: username, Email: email, Pwd: pwd })
    userdb.save();
  } catch (error) {
    console.log(error);
  }
}

export { getUserByEmailDB, getUserByUsernameDB, createUserDB };


