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

    const companyNames = Object.keys(COMPANIES);

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
            {companyNames.map((companyName) => {
              const accent = COMPANIES[companyName].accent;
              const isSelected = company === companyName;

              return (
                <div
                  key={companyName}
                  className={`radio-item ${isSelected ? 'selected' : ''}`}
                  style={isSelected ? { borderColor: accent, background: `${accent}1a` } : undefined}
                >
                  <input
                    type="radio"
                    id={companyName.toLowerCase().replace(/\s+/g, '-')}
                    name="company"
                    value={companyName}
                    checked={isSelected}
                    onChange={(e) => onCompanyChange(e.target.value)}
                    style={isSelected ? { accentColor: accent } : undefined}
                  />
                  <label
                    htmlFor={companyName.toLowerCase().replace(/\s+/g, '-')}
                    style={isSelected ? { color: accent } : undefined}
                  >
                    {companyName}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <label>Mobile</label>
          <input
            type="text"
            id="phone"
            value={mobile}
            onChange={onMobileChange}
            placeholder="+61 466 XXX XXX"
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
