import { auth } from '../service/firebase';
import ROUTES from '../constants/router';

const UPLOAD_IMAGE_URL = `http://localhost:5000${ROUTES.UPLOAD_IMAGE_URL}`;

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
