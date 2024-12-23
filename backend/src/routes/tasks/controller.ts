import type { Request, Response } from 'express';

export const index = (request: Request, response: Response) => {
  response.json('Get all tasks');
};

export const store = (request: Request, response: Response) => {
  console.log('req', request.body);
  response.json(request.body);
};

export const update = (request: Request, response: Response) => {
  response.json('update new task');
};

export const show = (request: Request, response: Response) => {
  response.json('show task');
};

export const destroy = (request: Request, response: Response) => {
  response.json('delete task');
};
