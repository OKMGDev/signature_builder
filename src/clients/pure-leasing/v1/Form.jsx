import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    const {
      name,
      job,
      mobile,
      email,
      signatureType,
      onNameChange,
      onJobChange,
      onMobileChange,
      onEmailChange,
      onSignatureTypeChange
    } = this.props;

    return (
      <form>
        <fieldset>
          <label>Signature type</label>
          <div className="company-checkboxes">
            <div className="checkbox-item">
              <input
                type="radio"
                id="signature-personal"
                name="signatureType"
                value="personal"
                checked={signatureType === 'personal'}
                onChange={onSignatureTypeChange}
              />
              <label htmlFor="signature-personal">Personal</label>
            </div>
            <div className="checkbox-item">
              <input
                type="radio"
                id="signature-brand"
                name="signatureType"
                value="brand"
                checked={signatureType === 'brand'}
                onChange={onSignatureTypeChange}
              />
              <label htmlFor="signature-brand">Brand signature</label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onNameChange}
            placeholder="Enter your name"
          />
        </fieldset>
        <fieldset>
          <label>Job Title</label>
          <input
            type="text"
            id="job-title"
            value={job}
            onChange={onJobChange}
            placeholder="Enter your job title"
          />
        </fieldset>
        <fieldset>
          <label>Mobile</label>
          <input
            type="text"
            id="phone"
            value={mobile}
            onChange={onMobileChange}
            placeholder="Enter your mobile number"
          />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={onEmailChange}
            placeholder="Enter your email address"
          />
        </fieldset>
      </form>
    );
  }
}
