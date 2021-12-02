import React,{useState} from "react"
import {validateEmail} from "../../utils/Helpers"


export default function Contacts (){
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);}
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
  
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    
    setEmail('');
  };

  return (
    <div>
<form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
         <input
          name="Name"
          type="text"
          placeholder="Your Name"
        />
        <textarea placeholder="Your Message Here"></textarea>

        </form>
    </div>
  )

  
}