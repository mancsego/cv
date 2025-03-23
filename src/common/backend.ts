let cache: null | {
  initializeApp: CallableFunction
  getStorage: CallableFunction
  getDownloadURL: CallableFunction
  ref: CallableFunction
} = null

const ALLOWED_LANG = ['en', 'de', 'hu']

const {
  VITE_FIREBASE_API_KEY: apiKey,
  VITE_FIREBASE_DOMAIN: authDomain,
  VITE_DB_URL: databaseURL,
  VITE_FIREBASE_PROJECT_ID: projectId,
  VITE_FIREBASE_BUCKET: storageBucket,
  VITE_FIREBASE_MESSAGING: messagingSenderId,
  VITE_FIREBASE_APP_ID: appId
} = import.meta.env

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
}

const fetchDb = async (language: string) => {
  const lang = ALLOWED_LANG.includes(language) ? language : 'en'
  const url = `https://cv-istvan-abraham-default-rtdb.europe-west1.firebasedatabase.app/${lang}.json`

  const res = await fetch(url)
  return await res.json()
}

const fetchFile = async () => {
  const { getStorage, getDownloadURL, ref, initializeApp } = await _getDependencies()
  initializeApp(config)
  const storage = getStorage()
  const resource = ref(storage, `downloads/CV_${getLang()}.pdf`)

  window.open(await getDownloadURL(resource))
}

const getLang = () => {
  const searchParams = new URLSearchParams(location.search)
  return searchParams.get('lang') ?? 'en'
}

const _getDependencies = async () => {
  if (cache === null) {
    const { getStorage, getDownloadURL, ref } = await import('firebase/storage')
    const { initializeApp } = await import('firebase/app')
    cache = { getStorage, getDownloadURL, ref, initializeApp }
  }
  return cache
}

export { fetchDb, fetchFile, getLang }
