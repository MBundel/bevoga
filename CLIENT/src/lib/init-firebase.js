
// import axios from "axios";
// import { initializeApp } from "firebase/app";

// import { getFirestore } from "@firebase/firestore";


// // // class Firebase extends React.Component {
// // // componentDidMount(){
// // //   fetch('/Data/thirdApi/initFirebase')
// // //   .then(res => res.json())
// // //   .then(firebaseConfig => this.setState({firebaseConfig}, () => console.log('firebase key fetched')))
// // // }}

// const fetchFirebaseData = async () => {
//   const getFirebaseData = await axios
//     .get("http://localhost:5000/firebase")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => console.error(err));

//   return;
//   // getFirebaseData
// };

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: "fimdeu-bevoga.firebaseapp.com",
//   databaseURL:
//     "https://fimdeu-bevoga-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "fimdeu-bevoga",
//   storageBucket: "fimdeu-bevoga.appspot.com",
//   messagingSenderId: "247102877260",
//   appId: "1:247102877260:web:4d0f30bbab25ae1b974ee9",
//   measurementId: "G-F5DBPS3J24",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// export const db = getFirestore(app);
