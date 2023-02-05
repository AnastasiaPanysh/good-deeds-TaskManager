import express, { Request, Response } from 'express';
import { createUser, doAuthorization } from '../services/user.service';
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError';
import { isValidUser, isValidEmail } from '../helper/validation';

const route = express.Router();

route.post('/register', isValidEmail, isValidUser, async function (req: Request, res: Response) {
  try {
    const { username, email, pwd } = req.body;
    await createUser(username, email, pwd);
    buildResponse(res, 200, 'success');
  } catch (error) {
    handleError(res, 404, 'error');
  }
});

route.post('/login', isValidEmail, async function (req: Request, res: Response) {
  try {
    const { email, pwd } = req.body;
    await doAuthorization(email, pwd)
    buildResponse(res, 200, 'success')
  } catch (error) {
    handleError(res, 404, 'error');
  }
})

export default route;
