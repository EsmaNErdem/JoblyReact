import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Alert from "../utilities/Alert";

/**
 * LoginForm Component
 * Displays form and renders controlled components functionality
 * 
 * A form component for user login. Handles user input for username, password.
 * Displays form errors if registration fails.
 * On submission:
 * - calls login function prop
 * - redirects to / route
 *
 * Routes ==> LoginForm ==> Alert
 * Routed as /login6
 * 
 */

const LoginForm = ({ login }) => {
    const history = useHistory();
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors=", formErrors,
    );
  
    /**
     * Handles form submission. Calls the login function with the form data.
     * Redirects to the home page upon successful registration, or displays form errors.
     */
    const handleSubmit = async e => {
        e.preventDefault();
        const result = await login(formData)
        if(result.success) {
            history.push("/")
        } else {
            setFormErrors(result.error)
        }
    }
    
    /** Update form data field */
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    return (
        <div className="SignUpForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                
                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;