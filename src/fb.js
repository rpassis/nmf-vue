import Firebase from 'firebase'

let config = {

  apiKey: 'AIzaSyAt2wBButl4893X9gp_2_MZfBJeBRuc1tA',
  authDomain: 'fir-vue-test-f8277.firebaseapp.com',
  databaseURL: 'https://fir-vue-test-f8277.firebaseio.com',
  projectId: 'fir-vue-test-f8277',
  storageBucket: '',
  messagingSenderId: '969844116804'
}

export const FirebaseApp = Firebase.initializeApp(config)
