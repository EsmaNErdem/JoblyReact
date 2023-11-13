import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../utilities/Alert";
import "./SignUpForm.css"

const SignUpForm = ({ signup }) => {
    const history = useHistory();
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );
  
    const handleSubmit = async e => {
        e.preventDefault();
        const result =  await signup(formData)
        if(result.success){
            history.push("/")
        } else {
            setFormErrors(result.error)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}  className="SignUpForm">
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
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email"
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

export default SignUpForm