import { initializeApp } from 'firebase/app'
import { getToken, initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getDownloadURL, getStorage, ref as storageRef } from 'firebase/storage'

const ALLOWED_LANG = ['en', 'de', 'hu']

const {
  VITE_FIREBASE_API_KEY: apiKey,
  VITE_FIREBASE_DOMAIN: authDomain,
  VITE_DB_URL: databaseURL,
  VITE_FIREBASE_PROJECT_ID: projectId,
  VITE_FIREBASE_BUCKET: storageBucket,
  VITE_FIREBASE_MESSAGING: messagingSenderId,
  VITE_FIREBASE_APP_ID: appId,
  VITE_FIREBASE_CAPTCHA_KEY: captchaKey
} = import.meta.env

const app = initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
})

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(captchaKey),
  isTokenAutoRefreshEnabled: true
})

const fetchDb = async (language: string) => {
  const lang = ALLOWED_LANG.includes(language) ? language : 'en'
  const { token } = await getToken(appCheck, true)

  const url = `https://cv-istvan-abraham-default-rtdb.europe-west1.firebasedatabase.app/${lang}.json`

  const res = await fetch(url, { headers: { 'X-Firebase-AppCheck': token } })
  return await res.json()
}

const fetchFile = async () => {
  const storage = getStorage()
  const resource = storageRef(storage, `downloads/CV_${getLang()}.pdf`)

  window.open(await getDownloadURL(resource))
}

const getLang = () => {
  const searchParams = new URLSearchParams(location.search)
  return searchParams.get('lang') ?? 'en'
}

export { fetchDb, fetchFile, getLang }
