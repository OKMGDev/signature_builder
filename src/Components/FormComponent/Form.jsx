import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    const {
      name,
      job,
      mobile,
      email,
      hideNameTitle,
      onNameChange,
      onJobChange,
      onMobileChange,
      onEmailChange,
      onHideNameTitleChange
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
        <fieldset>
          <div className="company-checkboxes">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="hide-name-title"
                checked={hideNameTitle}
                onChange={onHideNameTitleChange}
              />
              <label htmlFor="hide-name-title">Hide name and job title from signature</label>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
