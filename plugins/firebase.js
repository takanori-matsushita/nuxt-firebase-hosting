import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default function ({ $config }, inject) {
  if (!firebase.apps.length) {
    const config = {
      apiKey: $config.apiKey,
      authDomain: $config.authDomain,
      databaseURL: $config.databaseURL,
      projectId: $config.projectId,
      storageBucket: $config.storageBucket,
      messagingSenderId: $config.messagingSenderId,
      appId: $config.appId,
    }
    firebase.initializeApp(config)
  }

  const $firebase = {
    app: firebase.app,
    auth: firebase.auth,
    database: firebase.database,
  }
  inject('firebase', $firebase)
}
