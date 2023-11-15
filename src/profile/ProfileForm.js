import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import JoblyApi from "../api";
import Alert from "../utilities/Alert";

/**
 * ProfileForm Component
 * Displaya a form with nad rendered controlled component functionality
 * 
 * * A form component for user profile update. Handles user input for, first name, last name, and email while username constant.
 * Displays form errors if registration fails.
 * On submission:
 * - calls API to user info
 * - update currentUser state
 * - shows conformation message when update is successful
 *
 * Routes ==> ProfileForm ==> Alert
 * Routed as /profile
 */

const ProfileForm = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const [formData, setFormData] = useState(
        {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email
        }
    )
    const [formErrors, setFormErrors] = useState([]);
    const [message, setMessage] = useState(false)

    console.debug(
        "ProfileForm",
        "currentUser=", currentUser,
        "formData=", formData,
        "formErrors=", formErrors,
    );

    /**
     * Handles form submission. Call updateUser API to update user data
     * Updates currentUser state with API call return updatedUser
     */
    const handleSubmit = async e => {
        e.preventDefault();
        let updatedUser;
        
        try {
            updatedUser =  await JoblyApi.updateUser(currentUser.username, formData)
        } catch (e) {
            setFormErrors(e)
        }

        setFormErrors([])
        setMessage(true)
        setCurrentUser(u => ({...u, updatedUser}))
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
        <div>
            <h3>Profile Update</h3>
            <form onSubmit={handleSubmit}  className="SignUpForm">
                <label htmlFor="username">Username</label>
                <p>{currentUser.username}</p>
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

                {message
                    ? <Alert type="success" messages={"Updated profile!"} />
                    : null
                }
                <button>Save Changes</button>
            </form>
        </div>
    )
}

export default ProfileForm;