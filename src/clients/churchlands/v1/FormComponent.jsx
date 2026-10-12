import React from 'react';
import './FormComponent.scss';

import SignaturePreview from './SignaturePreview';
import COMPANY from './constants/companyData';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    job: '',
    phone: COMPANY.phone,
    email: COMPANY.email,
    tooltip: '',
    toolinfo: 'click to copy signature!'
  };

  updateField = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  renderField = (label, field, placeholder, type = 'text') => (
    <fieldset>
      <label htmlFor={`churchlands-${field}`}>{label}</label>
      <input
        id={`churchlands-${field}`}
        type={type}
        value={this.state[field]}
        onChange={this.updateField(field)}
        placeholder={placeholder}
      />
    </fieldset>
  );

  render() {
    const { name, job, phone, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper churchlands-wrapper">
        <h1 className="churchlands-heading">
          <img src={COMPANY.logo.src} alt={COMPANY.logo.alt} />
          <span>Email signature generator</span>
        </h1>

        <div className="welcome-text">
          <p>Build a Churchlands Plumbing and Gas email signature that matches the company template.</p>
          <p>
            Enter a name, job title, phone, and email. The logo, website, and license
            numbers are added automatically.
          </p>
        </div>

        <div className="signature-section-wrapper">
          <form>
            {this.renderField('Name', 'name', 'Your name')}
            {this.renderField('Job Title', 'job', 'Licensed Plumber')}
            {this.renderField('Phone', 'phone', COMPANY.phone, 'tel')}
            {this.renderField('Email', 'email', COMPANY.email, 'email')}
          </form>

          <SignaturePreview
            name={name}
            job={job}
            phone={phone}
            email={email}
            tooltip={tooltip}
            toolinfo={toolinfo}
            onCopy={() => this.setState({ tooltip: 'copied', toolinfo: 'copied!' })}
          />
        </div>
      </div>
    );
  }
}
