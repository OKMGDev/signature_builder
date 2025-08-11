import React, { Component } from 'react';
import COMPANIES from './constants/companyData';

export default class Form extends Component {

  render() {
    const {
      name,
      job,
      company,
      mobile,
      email,
      onNameChange,
      onJobChange,
      onCompanyChange,
      onMobileChange,
      onEmailChange
    } = this.props;

    // Get company names from the constants
    const companyNames = Object.keys(COMPANIES).filter(name => name !== '--');

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
          <label>Company</label>
          <div className="company-radio-buttons">
            {companyNames.map((companyName) => (
              <div key={companyName} className={`radio-item ${company === companyName ? 'selected' : ''}`}>
                <input
                  type="radio"
                  id={companyName.toLowerCase().replace(/\s+/g, '-')}
                  name="company"
                  checked={company === companyName}
                  onChange={() => onCompanyChange(companyName)}
                />
                <label htmlFor={companyName.toLowerCase().replace(/\s+/g, '-')}>
                  {companyName}
                </label>
                {company === companyName && (
                  <div className="company-indicator" style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: COMPANIES[companyName].colors.primary,
                    marginLeft: 'auto',
                    marginRight: '8px'
                  }}></div>
                )}
              </div>
            ))}
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
