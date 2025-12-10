import React, { useState } from "react";

const Form = ({ currentStep, formData, setFormData }) => {
  return (
    <div>
      {currentStep == 0 && (
        <form className="user-form">
          <h3>Personal Information</h3>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </div>
        </form>
      )}
      {currentStep == 1 && (
        <form className="user-form">
          <h3>Professional Details</h3>
          <div>
            <label htmlFor="Company">Company</label>
            <input
              type="text"
              name="Company"
              id="Company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="yoe">Years of Experience</label>
            <select
              name="yoe"
              id="yoe"
              value={formData.yoe}
              onChange={(e) =>
                setFormData({ ...formData, yoe: e.target.value })
              }
            >
              <option value="graduate">College Graduate</option>
              <option value="OneToTwo">1 to 2 years</option>
              <option value="ThreeToFive">3 to 5 years</option>
              <option value="FivePlus">5 years +</option>
            </select>
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
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData({ ...formData, cardNumber: e.target.value })
              }
            />
            <label htmlFor="cardName">CardHolder Name</label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              value={formData.cardHolderName}
              onChange={(e) =>
                setFormData({ ...formData, cardHolderName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              value={formData.expiry}
              onChange={(e) =>
                setFormData({ ...formData, expiry: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="password"
              name="cvv"
              id="cvv"
              value={formData.cvv}
              onChange={(e) =>
                setFormData({ ...formData, cvv: e.target.value })
              }
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
