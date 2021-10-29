import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyARhtjELRZCgOEBIR_ShS31IgncAbEg0zk",
  authDomain: "project-71-a3080.firebaseapp.com",
  projectId: "project-71-a3080",
  storageBucket: "project-71-a3080.appspot.com",
  messagingSenderId: "165725658471",
  appId: "1:165725658471:web:53d6f2ce7ca6a72b98e3c2"
};
 
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()

