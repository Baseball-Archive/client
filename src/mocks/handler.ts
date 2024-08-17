import { http, HttpResponse } from 'msw';

export const signup = [
  http.post('http://localhost:9999/api/users/signup', () => {
    return HttpResponse.json({
      message: '회원가입 성공!',
    });
  }),
];

export const user = http.get('http://localhost:9999/api/users/user', () => {
  return HttpResponse.json(signup, {
    status: 200,
  });
});
