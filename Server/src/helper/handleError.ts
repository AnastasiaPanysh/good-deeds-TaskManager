import { Response } from 'express';

function handleError(res: Response, status: number, message: string) {
  res.status(status);
  res.send(message);
}

export { handleError };
