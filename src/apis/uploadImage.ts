import ROUTES from '../constants/router';
import { auth } from '../service/firebase';

const UPLOAD_IMAGE_URL = `http://localhost:5000/ROUTES.`;

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('profileImage', file);

  const response = await fetch(UPLOAD_IMAGE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
    },
    body: formData,
  });
  return response.json();
};
