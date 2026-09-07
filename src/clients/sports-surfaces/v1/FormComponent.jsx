import React from 'react';
import './FormComponent.scss';

import SignaturePreview from './SignaturePreview';
import COMPANY from './constants/companyData';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    job: '',
    tooltip: '',
    toolinfo: 'click to copy signature!'
  };

  updateField = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  renderField = (label, field, placeholder) => (
    <fieldset>
      <label htmlFor={`sports-surfaces-${field}`}>{label}</label>
      <input
        id={`sports-surfaces-${field}`}
        type="text"
        value={this.state[field]}
        onChange={this.updateField(field)}
        placeholder={placeholder}
      />
    </fieldset>
  );

  render() {
    const { name, job, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper sports-surfaces-wrapper">
        <h1 className="sports-surfaces-heading">
          <img src={COMPANY.logo.src} alt={COMPANY.logo.alt} />
          <span>Email signature generator</span>
        </h1>

        <div className="welcome-text">
          <p>Build a Sports Surfaces email signature that matches the company template.</p>
          <p>
            Enter your name and job title below. The logo, office contact details, ABN, website
            button, and social links are added automatically.
          </p>
        </div>

        <div className="signature-section-wrapper">
          <form>
            {this.renderField('Name', 'name', 'Luke Dawson')}
            {this.renderField('Job Title', 'job', 'Managing Director')}
          </form>

          <SignaturePreview
            name={name}
            job={job}
            tooltip={tooltip}
            toolinfo={toolinfo}
            onCopy={() => this.setState({ tooltip: 'copied', toolinfo: 'copied!' })}
          />
        </div>
      </div>
    );
  }
}
