import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, child } from 'firebase/database'

const {
  VITE_FIREBASE_API_KEY: apiKey,
  VITE_FIREBASE_DOMAIN: authDomain,
  VITE_DB_URL: databaseURL,
  VITE_FIREBASE_APP_ID: projectId,
  VITE_FIREBASE_MESSAGING: storageBucket,
  VITE_FIREBASE_PROJECT: messagingSenderId,
  VITE_FIREBASE_BUCKET: appId,
} = import.meta.env

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
}

const app = initializeApp(config)
const db = ref(getDatabase(app))

export const fetchDb = async (language: string = 'en') => {
  const snapshot = await get(child(db, language))
  return snapshot.exists() ? snapshot.val() : {}
}
