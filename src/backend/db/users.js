// // src/backend/db/users.js
// import { v4 as uuid } from "uuid";
// import bcrypt from "bcryptjs";

// // Sample users data
// export const users = [
//   {
//     _id: uuid(),
//     firstName: "Drishya",
//     lastName: "T",
//     email: "drishya@gmail.com",
//     password: bcrypt.hashSync("drishya123", 5), // hashed password
//   },
//   {
//     _id: uuid(),
//     firstName: "Megha",
//     lastName: "Bhatt",
//     email: "megha@gmail.com",
//     password: bcrypt.hashSync("megha123", 5), // hashed password
//   },
// ];
// src/backend/db/users.js
export const users = [
    {
      id: 1,
      email: "drishya@gmail.com",
      password: "drishya123", // In a real app, this would be hashed
      firstName: "Drishya",
    },
    {
      id: 2,
      email: "megha@gmail.com",
      password: "megha456", // In a real app, this would be hashed
      firstName: "Megha",
    },
  ];
  