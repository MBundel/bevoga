import express from "express";
import axios from "axios"

const router = express.Router();



router.get("/", (req, res) => {
  res.json("firebase über thirdApi");
});

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: "fimdeu-bevoga.firebaseapp.com",
  databaseURL:"https://fimdeu-bevoga-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fimdeu-bevoga",
  storageBucket: "fimdeu-bevoga.appspot.com",
  messagingSenderId: "247102877260",
  appId: "1:247102877260:web:4d0f30bbab25ae1b974ee9",
  measurementId: "G-F5DBPS3J24",
};


export default axios.create({
  baseURL: 'http://localhost:5000'
})