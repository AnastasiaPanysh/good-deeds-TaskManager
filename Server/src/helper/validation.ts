import { Request, Response, NextFunction } from 'express';

function isValidUserId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (!id) throw new Error('USER_ID_INVALID');
  next();
}

function isValidUser(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  if (!username) throw new Error('USER_USERNAME_INVALID');
  next();
}

function isValidEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  if (!/^[0-9a-z\._-]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error('USER_EMAIL_INVALID');
  next();
}

export { isValidUserId, isValidUser, isValidEmail };
