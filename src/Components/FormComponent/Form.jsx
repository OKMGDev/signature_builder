import React, { Component } from 'react';

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
          <div className="company-checkboxes">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="spot-on-civil"
                checked={company.includes('Spot on Civil')}
                onChange={(e) => onCompanyChange('Spot on Civil', e.target.checked)}
              />
              <label htmlFor="spot-on-civil">Spot on Civil</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="spot-on-power-projects"
                checked={company.includes('Spot on Power Projects')}
                onChange={(e) => onCompanyChange('Spot on Power Projects', e.target.checked)}
              />
              <label htmlFor="spot-on-power-projects">Spot on Power Projects</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="north-vic-electricity"
                checked={company.includes('North Vic Electricity Services')}
                onChange={(e) => onCompanyChange('North Vic Electricity Services', e.target.checked)}
              />
              <label htmlFor="north-vic-electricity">North Vic Electricity Services</label>
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
