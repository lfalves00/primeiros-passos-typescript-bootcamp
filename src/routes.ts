import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'email@email.com',
    password: 'senha123',
    techs: [
      'Node',
      'ReactJS',
      { title: 'React Native', experience: 100 }
    ],
    favoriteLangs: ['JS', 'TS', 'PHP']
  });

  return response.json({message: 'salve'})
}