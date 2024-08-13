import { HttpResponse, http } from 'msw';
import { User } from '../models/user.model';

const userData: User[] = [
  {
    email: 'test@gmail.com',
    password: '1234',
  },
  {
    email: 'test1@gmail.com',
    password: '1111',
  },
];

export const users = http.get('http://localhost:9999/api/users/login', () => {
  return HttpResponse.json(userData, {
    status: 200,
  });
});
