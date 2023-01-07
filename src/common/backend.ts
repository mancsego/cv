let cache: null | {
  initializeApp: Function
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

export const fetchDb = async (language: string) => {
  const lang = ALLOWED_LANG.includes(language) ? language : 'en'
  const url = `https://cv-istvan-abraham-default-rtdb.europe-west1.firebasedatabase.app/${lang}.json`

  const res = await fetch(url)
  return await res.json()
}

export const fetchFile = async (resourceName: string) => {
  const { getStorage, getDownloadURL, ref, initializeApp } =
    await _getDependencies()
  initializeApp(config)
  const storage = getStorage()
  const resource = ref(storage, `downloads/${resourceName}`)
  window.open(await getDownloadURL(resource))
}

const _getDependencies = async () => {
  if (cache === null) {
    const { getStorage, getDownloadURL, ref } = await import('firebase/storage')
    const { initializeApp } = await import('firebase/app')
    cache = { getStorage, getDownloadURL, ref, initializeApp }
  }
  return cache
}
