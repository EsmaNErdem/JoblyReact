import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from "./routes/Routes";
import Navbar from "./routes/Navbar";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api/api";
// import jwt from "jsonwebtoken";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getCurrentUser = async () => {
      try{
        JoblyApi.token = token
        // const { username } = jwt.decode(token)
        // const currentUser = await JoblyApi.getUser(username)
        // setCurrentUser(currentUser)
      } catch (e) {
        console.error(e)
        setCurrentUser(null)
      }
    }
    getCurrentUser()
  }, [token])

  const signup = async (userSignupData) => {
    try {
      const token = await JoblyApi.registerUser(userSignupData);
      setToken(token)
      return { success: true }
    } catch (e) {
      console.error(e)
      return {success: false, error: e}
    }
  }

  const login = async userLoginData => {
    try {
      const token = await JoblyApi.loginUser(userLoginData)
      setToken(token)
      return { success: true }
    } catch (e) {
      console.error(e)
      return { success: false, error: e }
    }
  }

  const logOut = () => {
    setToken(null)
  }



  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{  }}>
          <Navbar logOut={logOut} />
          <Routes login={login} signup={signup}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
