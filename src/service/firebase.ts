import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDl48YcpOHWi2YT_0YBEE3mtBf96_kici0',
  authDomain: 'baseball-archive.firebaseapp.com',
  projectId: 'baseball-archive',
  storageBucket: 'baseball-archive.appspot.com',
  messagingSenderId: '885094855724',
  appId: '1:885094855724:web:9924608c5c92f8ca200d89',
  measurementId: 'G-0060MYGL4X',
  databaseURL:
    'https://baseball-archive-default-rtdb.asia-southeast1.firebasedatabase.app/',
};
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

export const auth = getAuth(firebaseApp);

// apiKey: import.meta.env.FIREBASE_API_KEY,
// authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
// projectId: import.meta.env.FIREBASE_PROJECT_ID,
// storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: import.meta.env.FIREBASE_APP_ID,
// measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
