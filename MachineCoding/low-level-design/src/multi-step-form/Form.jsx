import React from "react";

const Form = ({ currentStep }) => {
  return (
    <div>
      {currentStep == 0 && (
        <form className="user-form">
          <h3>Personal Information</h3>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="phone" />
          </div>
        </form>
      )}
      {currentStep == 1 && (
        <form className="user-form">
          <h3>Professional Details</h3>
          <div>
            <label htmlFor="Company">Company</label>
            <input type="text" name="Company" id="Company" />
            <label htmlFor="position">Position</label>
            <input type="text" name="position" id="position" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="industry">Industry</label>
            <input type="text" name="industry" id="industry" />
          </div>
        </form>
      )}
      {currentStep == 2 && (
        <form className="user-form">
          <h3>Billing Information</h3>
          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" name="cardNumber" id="cardNumber" />
            <label htmlFor="cardName">CardHolder Name</label>
            <input type="text" name="cardName" id="cardName" />
          </div>
          <div>
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" name="expiry" id="expiry" />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input type="text" name="cvv" id="cvv" />
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
