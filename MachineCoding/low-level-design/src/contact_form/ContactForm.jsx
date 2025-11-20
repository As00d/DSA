import React, { useState } from "react";
import "./styles.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState("");
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const handleFormSubmission = (e, name, email, message) => {
    e.preventDefault();
    let isValid = true;
    setNameError("");
    setEmailError("");
    setMessageError("");
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }
    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    }
    if (isValid) {
      setSuccess(true);
    }
  };
  return (
    <div className="container">
      {!success ? (
        <form
          className="form"
          onSubmit={(e) => handleFormSubmission(e, name, email, message)}
        >
          <label htmlFor="name" className="names">
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="inputField"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>{nameError}</p>
          <label htmlFor="email" className="names">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="inputField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailError}</p>
          <label htmlFor="message" className="names">
            Message :
          </label>
          <input
            type="message"
            id="message"
            className="inputField"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p>{messageError}</p>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      ) : (
        <h2>{`Thank you, ${name}`}</h2>
      )}
    </div>
  );
}

export default ContactForm;
