import { initializeApp } from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { IImage } from '@interfaces/blog';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadFile = async (file: Blob): Promise<IImage> => {
  const id = uuidv4();

  const storageRef = ref(storage, id);

  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return {
    url,
    id,
  };
};

export const deleteImage = async (id: string) => {
  const storageRef = ref(storage, id);
  await deleteObject(storageRef);
};