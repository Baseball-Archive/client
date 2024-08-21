// import { httpClient } from "./http";

// export const join = async (userData: UserProps) => {
//   try {
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${userData.uid}`,
//     };
//     const body = {
//       nickname: userData.nickname,
//       image: userData.image,
//       team: userData.team,
//     };
//     const response = await httpClient.post(`/users/join`, body, {
//       headers,
//     });
//     console.log('Signup successful: ', response);

//     return response.data;
//   } catch (err) {
//     console.error('Signup failed: ' + err);
//   }
// };
