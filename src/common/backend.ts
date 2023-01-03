import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, child } from 'firebase/database'

let cache: null | {
  getStorage: Function
  getDownloadURL: Function
  ref: Function
} = null

const ALLOWED_LANG = ['en', 'de', 'hu']

const {
  VITE_FIREBASE_API_KEY: apiKey,
  VITE_FIREBASE_DOMAIN: authDomain,
  VITE_DB_URL: databaseURL,
  VITE_FIREBASE_APP_ID: projectId,
  VITE_FIREBASE_BUCKET: storageBucket,
  VITE_FIREBASE_MESSAGING: messagingSenderId,
  VITE_FIREBASE_APP_ID: appId,
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

export const fetchDb = async (language: string) => {
  const lang = ALLOWED_LANG.includes(language) ? language : 'en'

  const snapshot = await get(child(db, lang))
  return snapshot.exists() ? snapshot.val() : {}
}

export const fetchFile = async (resourceName: string) => {
  const { getStorage, getDownloadURL, ref } = await _getDependencies()
  const storage = getStorage()
  const resource = ref(storage, `downloads/${resourceName}`)
  window.open(await getDownloadURL(resource))
}

const _getDependencies = async () => {
  if (cache === null) {
    const { getStorage, getDownloadURL, ref } = await import('firebase/storage')
    cache = { getStorage, getDownloadURL, ref }
  }
  return cache
}
