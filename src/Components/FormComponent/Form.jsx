import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

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
          <select id="company" name="company" value={company} onChange={onCompanyChange}>
            <option value="--">--</option>
            <option value="Spot on Civil">Spot on Civil</option>
            <option value="Spot on Power Projects">Spot on Power Projects</option>
            <option value="North Vic Electricity Services">North Vic Electricity Services</option>
            <option value="Spot on Civil + North Vic Electricity Services">Spot on Civil & North Vic Electricity</option>
          </select>
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
