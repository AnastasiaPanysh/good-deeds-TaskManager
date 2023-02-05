import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: String,
    Email: String,
    Pwd: String,
});
const taskSchema = new Schema({
    Number: Number,
    Task: String
});

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);



export {User, Task};