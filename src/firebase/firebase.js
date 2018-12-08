import * as firebase from "firebase";

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

//child removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_modified
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//database.ref().remove();

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Water bill 2",
//   note: "water bill for 2nd month",
//   amount: 200,
//   createdAt: 1000
// });

// database.ref("expenses").push({
//   description: "Electric bill",
//   note: "electric bill for 1 month",
//   amount: 1200,
//   createdAt: 1000
// });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "Rent for 1 month",
//   amount: 12000,
//   createdAt: 1000
// });

// database
//   .ref()
//   .set({
//     name: "Rishi",
//     age: 26,
//     stressLevel: 6,
//     isSingle: true,
//     location: {
//       city: "Chennai",
//       country: "India"
//     },
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database.ref("age").set(27);
// database.ref("location/city").set("Bangalore");
// database
//   .ref("attributes")
//   .set({
//     height: 5.6,
//     weight: 60
//   })
//   .then(() => {
//     console.log("Added Data saved");
//   })
//   .catch(e => {
//     console.log("It failed", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
//   "location/country": "USA"
// });

// database
//   .ref("isSingle")
//   .remove() //we can call set(null) in this place to remove the data too
//   .then(() => {
//     console.log("data is removed");
//   })
//   .catch(e => console.log("This failed.", e));

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     const person = snapshot.val();
//     console.log(
//       person.name + " is a " + person.job.title + " at " + person.job.company
//     );
//   },
//   e => {
//     console.log("Error in data fetching ", e);
//   }
// );

// setTimeout(() => {
//   database.ref().update({
//     name: "Mike"
//   });
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value");
// }, 7000);

// setTimeout(() => {
//   database.ref().update({
//     name: "Rishi"
//   });
// }, 10500);
