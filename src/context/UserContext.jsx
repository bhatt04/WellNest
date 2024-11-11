// // context/UserContext.js
// import React, { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userId, setUserId] = useState(null); // Initially no user is logged in
//   const [selectedGenres, setSelectedGenres] = useState([]); // State to store user-selected genres

//   return (
//     <UserContext.Provider
//       value={{ userId, setUserId, selectedGenres, setSelectedGenres }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);


import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
const [userId, setUserId] = useState(null); // Initially no user is logged in
const [selectedGenres, setSelectedGenres] = useState([]); // State to store user-selected genres
return (
<UserContext.Provider
value={{ userId, setUserId, selectedGenres, setSelectedGenres }}
>
{children}
</UserContext.Provider>
);
};
export const useUser = () => useContext(UserContext);