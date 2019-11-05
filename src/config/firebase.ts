import Firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDLMFk1loeoc-3Ccxvc6mD3rncbu-Fw8Xo',
  authDomain: 'acme-dashboard-poc.firebaseapp.com',
  databaseURL: 'https://acme-dashboard-poc.firebaseio.com',
  storageBucket: 'acme-dashboard-poc.appspot.com'
};
let app = Firebase.initializeApp(config);

export const auth = app.auth();
export const db = app.database();
