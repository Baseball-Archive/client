// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { CLIENT_ID, REDIRECT_URI } from '../../service/kakao.ts';

// interface ResInfo {
//   data: {
//     access_token: string;
//     kakao_account: {
//       profile: {
//         nickname: string;
//         profile_image_url: string;
//       };
//     };
//   };
// }

// const KakaoCallback = () => {
//   const code = new URL(window.location.href).searchParams.get('code');
//   const grantType = 'authorization_code';

//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (code) {
//       axios
//         .post(
//           `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
//           {},
//           {
//             headers: {
//               'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//             },
//           },
//         )
//         .then((res: ResInfo) => {
//           const { access_token } = res.data;
//           axios
//             .post(
//               `https://kapi.kakao.com/v2/user/me`,
//               {},
//               {
//                 headers: {
//                   Authorization: `Bearer ${access_token}`,
//                 },
//               },
//             )
//             .then((res: ResInfo) => {
//               console.log('User profile:', res.data.kakao_account.profile);
//             })
//             .catch((error) => {
//               console.error('Failed to fetch user profile:', error);
//               setError('Failed to fetch user profile');
//             });
//         })
//         .catch((error) => {
//           console.error('Failed to obtain access token:', error);
//           setError('Failed to obtain access token');
//         });
//     }
//   }, [code]);

//   if (error) {
//     return <div>{error}</div>; // 에러 메시지 표시
//   }

//   return <div>로그인 처리 중...</div>; // 처리 중 표시
// };

// export default KakaoCallback;
