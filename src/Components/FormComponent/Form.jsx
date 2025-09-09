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
                id="north-vic-electricity"
                name="company"
                value="North Vic Electricity"
                checked={company.includes('North Vic Electricity')}
                onChange={(e) => onCompanyChange(e.target.value, e.target.checked)}
              />
              <label htmlFor="north-vic-electricity">North Vic Electricity</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="spot-on-civil"
                name="company"
                value="Spot on Civil"
                checked={company.includes('Spot on Civil')}
                onChange={(e) => onCompanyChange(e.target.value, e.target.checked)}
              />
              <label htmlFor="spot-on-civil">Spot on Civil</label>
            </div>
            {/* <div className="checkbox-item">
              <input
                type="checkbox"
                id="spot-on-power"
                name="company"
                value="Spot on Power"
                checked={company.includes('Spot on Power')}
                onChange={(e) => onCompanyChange(e.target.value, e.target.checked)}
              />
              <label htmlFor="spot-on-power">Spot on Power</label>
            </div> */}
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
