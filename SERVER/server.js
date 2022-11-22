import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import {} from 'dotenv/config'
import * as router from "./data/thirdApi/InitFirebase.js";
import * as firebaseApi from "./data/thirdApi/InitFirebase.js";

const app = express();

const PORT = process.env.PORT || 5000;
const whitelist = [
  "http://127.0.0.1",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5000",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
  optionSuccessStatus: 200,
};

const firebaseConfig = firebaseApi.firebaseConfig;

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
app.use(require('prerender-node').set('prerenderToken', 'OUFC43YQ2hPkkavBfmwx'));

// // some stuff
// app.get('/',  (req, res) => {
// res.json('firebase is comming')
// })
// app.get('/users',  (req, res) => {
// res.json('jo')
// })

// //handlebars middleware
// app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
// app.set('view engine', 'handlebars')

// // body parser middleware

// app.use(express.urlencoded({extended:false}))

// // Set a static folder
// // app.use(express.static(path.join(__dirname, "public")));

// // member api routes
// app.use('/api/users', require('./routes/api/users') )

//
