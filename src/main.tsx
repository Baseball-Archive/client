import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// // 개발 환경에서만 Mock 서비스 워커를 시작합니다.

// async function enableMocking() {
//   if (process.env.NODE_ENV !== 'development') {
//     return;
//   }
//   const { worker } = await import('./mocks/browser.ts');

//   return worker.start({
//     serviceWorker: {
//       url: '/mockServiceWorker.js',
//     },
//   });
// }

// enableMocking().then(() => {
//   createRoot(document.getElementById('root')!).render(
//     <StrictMode>
//       <App />
//     </StrictMode>,
//   );
// });
