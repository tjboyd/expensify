import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };





// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//
//       console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref('notes/-Kxw7BOW49_YVI99CqhS').update({
//   body: 'Buy food'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'react native'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(20);
// }, 3500);
// setTimeout(() => {
//   database.ref().off('value',onValueChange);
// }, 3500);
// setTimeout(() => {
//   database.ref('age').set(21);
// }, 3500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data',e);
//   });

// database.ref().set({
//   name: 'Tom Boyd',
//   age: 37,
//   streeLevel: 5,
//   job: {
//     company: 'Google',
//     title: 'Software Engineer'
//   },
//   location: {
//     city: 'Cary',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
//
// // database.ref().set('This is my data');
// // database.ref('age').set(38);
// // database.ref('location/city').set('Milwaukee');
//
// database.ref('attributes').set({
//     height: 100,
//     weight: 100
// });

// Remove Data using remove, can also use .set() to delete data by passing
//   null into set.  Remove is prefered.
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((e) => {
//     console.log('Error removing data', e);
//   });

// // Update
// database.ref().update({
//   name: 'Nolan',
//   age: 1,
//   favoriteFood: 'Peanut Butter',
//   isSingle: null, //removes the attribute by setting to null
//   'location/city': 'Milwaukee' //updates the location object but does not impact other attributes on that object.
// });
