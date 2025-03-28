import { FirebaseApp, initializeApp } from 'firebase/app'
import { AppCheck, getToken, initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getDownloadURL, getStorage, ref as storageRef } from 'firebase/storage'

const ALLOWED_LANG = ['en', 'de', 'hu']

const getNetworkHandler = (url: string) => {
  return async () => {
    const { appCheck } = initApp()
    const { token } = await getToken(appCheck, true)

    const res = await fetch(url, { headers: { 'X-Firebase-AppCheck': token } })
    return res.json()
  }
}

const getCacheHandler = (url: string) => {
  return async () => {
    if (!caches) return

    const cmsCache = await caches.open('cms-cache')
    const cacheKeys = await cmsCache.keys()
    const request = cacheKeys.find(({ url: cacheUrl }) => (cacheUrl as string) === url)
    if (!request) return null

    const response = (await cmsCache.match(request)) as Response

    return response.json()
  }
}

const initApp = (() => {
  let cache: undefined | { app: FirebaseApp; appCheck: AppCheck }

  return () => {
    if (cache) return cache

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

    cache = { app, appCheck }

    return cache
  }
})()

const fetchDb = async (language: string) => {
  const lang = ALLOWED_LANG.includes(language) ? language : 'en'
  const url = `https://cv-istvan-abraham-default-rtdb.europe-west1.firebasedatabase.app/${lang}.json`

  const networkHandler = getNetworkHandler(url)
  const cacheHandler = getCacheHandler(url)

  const cache = await cacheHandler()

  if (!cache || cache.error) return await networkHandler()

  setTimeout(networkHandler, 0)
  return cache
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
