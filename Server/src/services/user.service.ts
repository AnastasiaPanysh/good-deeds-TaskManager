import bcrypt from 'bcrypt';
import { getUserByEmailDB, getUserByUsernameDB, createUserDB } from '../repository/user.repository';



async function createUser(username: string, email: string, pwd: string): Promise<void> {
  const foundSameUserEmail = await getUserByEmailDB(email);
  console.log(foundSameUserEmail.length);
  if (foundSameUserEmail.length) throw new Error('error with email');

  const foundSameUsername = await getUserByUsernameDB(username);
  if (foundSameUsername.length) throw new Error('error with username');
  
  const salt = await bcrypt.genSaltSync(10);
  const hashPwd = await bcrypt.hashSync(pwd, salt)
  await createUserDB(username, email, hashPwd);
}


async function doAuthorization( email: string, pwd: string): Promise<void> {
  const foundSameUserEmail = await getUserByEmailDB(email);
  if (!foundSameUserEmail.length) throw new Error('error with same username');
console.log(foundSameUserEmail);

  // if (!(await bcrypt.compare(pwd, foundSameUserEmail.pwd))) throw new Error(ExceptionType.AUTH_USER_WITH_PWD.message);
}

export { createUser,doAuthorization };
