import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    const {
      name,
      job,
      selectedCompanies,
      mobile,
      email,
      onNameChange,
      onJobChange,
      onCompanyChange,
      onMobileChange,
      onEmailChange
    } = this.props;

    return (
      <form>

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
          <label>Companies</label>
          <div className="company-checkboxes">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="new-me"
                checked={selectedCompanies.includes('New Me')}
                onChange={(e) => onCompanyChange('New Me', e.target.checked)}
              />
              <label htmlFor="new-me">New Me</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="allieve"
                checked={selectedCompanies.includes('Allieve')}
                onChange={(e) => onCompanyChange('Allieve', e.target.checked)}
              />
              <label htmlFor="allieve">Allieve</label>
            </div>
          </div>
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
