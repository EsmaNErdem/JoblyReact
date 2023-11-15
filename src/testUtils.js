import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null,
};

const UserProvider =
    ({ children, currentUser = demoUser, hasApplied = () => false, setCurrentUser = u => u }) => (
    <UserContext.Provider value={{ currentUser, hasApplied, setCurrentUser }}>
      {children}
    </UserContext.Provider>
);

const NonUserProvider =
    ({ children, currentUser = null, hasApplied = () => false }) => (
    <UserContext.Provider value={{ currentUser, hasApplied }}>
      {children}
    </UserContext.Provider>
);


export { UserProvider, NonUserProvider };
