import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

/**
 * Homepage Component
 * Displays a welcome message with login and signup buttons
 * Routed at /
 * 
 * Routes ==> Home
 * 
 */

const Home = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="Home">
            <h1>Jobly</h1>
            <p>Find yourself a job</p>
            {currentUser ?
                <h2>Welcome, {currentUser.username}!</h2> :
                (
                    <p>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link> 
                    </p>
                )
            }
        </div>
    )
}

export default Home;