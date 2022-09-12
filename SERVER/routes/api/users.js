// const { json } = require("express");
// const express = require("express");
// const router = express.Router();
// const uuid = require("uuid");
// const menbers = require("../../data/usersData");

// // get all users
// router.get("/", (req, res) => res.json(users));

// // get single user
// router.get("/:id", (req, res) => {
//   const found = users.some((users) => users.id === parseInt(req.params.id));
//   if (found) {
//     res.json(users.filter((users) => users.id === parseInt(req.params.id)));
//   } else {
//     res
//       .status(400)
//       .json({ msg: `kein User mit der id ${req.params.id} gefunden` });
//   }
// });

// // create users

// router.post("/", (req, res) => {
//   const newUser = {
//     id: uuid.v4(),
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.mail,
//     phone: req.body.phone,
//   };
//   if (
//     !newUser.email ||
//     !newUser.firstName ||
//     !newUser.lastName ||
//     !newUser.phone
//   ) {
//     return res.status(400).json({ msg: "Felder sind unvollständig" });
//   }
//   users.push(newUser);
//   res.json(users);
// });

// // update users
// router.put("/:id", (req, res) => {
//     const found = users.some((users) => users.id === parseInt(req.params.id));
//     if (found) {
//      const updatedUser = req.body;
//      users.forEach(users => {
//         if(users.id === parseInt(req.params.id)){
//             users.firstName =   updatedUser.firstName ? updatedUser.firstName : users.firstName;
//             users.lastName =    updatedUser.lastName ? updatedUser.lastName : users.lastName;
//             users.email =       updatedUser.email ? updatedUser.email : users.email;
//             users.phone =       updatedUser.phone ? updatedUser.phone : users.phone;

//             res.json({msg: "Daten aktualisiert"})
//         }    
//     })
//     } else {
//       res
//         .status(400)
//         .json({ msg: `kein User mit der id ${req.params.id} gefunden` });
//     }
//   });


//  // delete users
 
//  router.delete("/:id", (req, res) => {
//     const found = users.some((users) => users.id === parseInt(req.params.id));
//     if (found) {
//       res.json({msg: "Daten gelöscht", users: users.filter((users) => users.id !== parseInt(req.params.id))});
//     } else {
//       res
//         .status(400)
//         .json({ msg: `kein User mit der id ${req.params.id} gefunden` });
//     }
//   });

// module.exports = router;
