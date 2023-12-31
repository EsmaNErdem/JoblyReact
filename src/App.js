import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import './App.css';
import Routes from "./routes/Routes";
import NavBar from "./routes/NavBar";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api";
import Loading from "./utilities/Loading";
// import jwt from "jsonwebtoken";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "jobly-token";


/**
 * Jobly Application
 * 
 * - Displays loader while pulling user data
 * 
 * - currenUser is user obj pulled from the backend
 *  if user loggedin, it share user date through out app wiht useContext
 *  saves user data into localStorage so when page refereshes, user stay consistent
 * 
 * - Manages signup and login API function and their return values token to provide user date flow with context
 * - Makes API call to user job application
 * 
 */

const App = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null)
  const [applications, setApplications] = useState(new Set([]))
  /**
   * Load user data from API, runs when user signup or login and get a token
   * only rerun when a user logs out, so the user state is a dependency for this effect
   */
  useEffect(() => {
    const getCurrentUser = async () => {
      if (user) {
        try{
          // put the token on the Api class so it can use it to call the API.
          JoblyApi.token = user.token
          // get datat on the curretn user
          const currentUser = await JoblyApi.getUser(user.username)
          setCurrentUser(currentUser)
          setApplications(new Set(currentUser.applications))
        } catch (e) {
          console.error(e)
          setCurrentUser(null)
        }
      }
      setLoading(false)
    }
    // set loading to true while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to true to control the spinner.
    setLoading(true)
    getCurrentUser()
  }, [user])

  /** Makes an API call to register user and set user state with user token and username and returns success to the signupform to be redirected to "/" */
  const signup = async (userSignupData) => {
    try {
      const token = await JoblyApi.registerUser(userSignupData);
      setUser({ token, username: userSignupData.username })
      return { success: true }
    } catch (e) {
      console.error(e)
      return {success: false, error: e}
    }
  }
  
  /** Makes an API call to login user and set user state with user token and username and returns success to the loginform to be redirected to "/" */
  const login = async userLoginData => {
    try {
      const token = await JoblyApi.loginUser(userLoginData)
      setUser({ token, username: userLoginData.username })
      return { success: true }
    } catch (e) {
      console.error(e)
      return { success: false, error: e }
    }
  }

  /** Logs user out by clearing current user state and user token and username state */
  const logOut = () => {
    setCurrentUser(null)
    setUser(null)
  }

  /**searching through applications set to find if job has been applied before, Set.has() returns false or true is O(1) */
  const hasApplied = (id) => {
    return applications.has(id)
  }

/** Send user job application, check if it is already applied, update applications state */
  const applyJob = async (id) => {
    if(hasApplied(id)) return
    try{
      const jobId = await JoblyApi.sendUserAplication(currentUser.username, id)
      setApplications(a => new Set([...a, jobId]))
    } catch (e) {
      console.error(e)
    }
  }

  if(loading) return <Loading />;

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, hasApplied, applyJob }}>
          <NavBar logOut={logOut} />
          <Routes login={login} signup={signup}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
