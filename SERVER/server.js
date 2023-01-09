import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import * as firebaseApi from "./data/thirdApi/InitFirebase.js";

const app = express();

const firebaseConfig = firebaseApi.firebaseConfig;
const PORT = 5000;

// init env api
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("firebase is comming");
});
app.get("/firebase", (req, res) => {
  res.json(firebaseConfig);
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

// // body parser middleware

// app.use(express.urlencoded({extended:false}))

// // member api routes
// app.use('/api/users', require('./routes/api/users') )
