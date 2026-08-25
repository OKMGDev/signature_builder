import React from 'react';
import './FormComponent.scss';
import SignaturePreview from './SignaturePreview';
import COMPANY from './constants/companyData';
import { formatAustralianMobile } from './utils/signatureUtils';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    job: '',
    mobile: '',
    email: '',
    tooltip: '',
    toolinfo: 'click to copy signature!'
  };

  updateField = (field) => (event) => {
    const value = field === 'mobile'
      ? formatAustralianMobile(event.target.value)
      : event.target.value;
    this.setState({ [field]: value });
  };

  renderField = (label, field, placeholder, type = 'text') => (
    <fieldset>
      <label htmlFor={`ndsa-${field}`}>{label}</label>
      <input
        id={`ndsa-${field}`}
        type={type}
        value={this.state[field]}
        onChange={this.updateField(field)}
        placeholder={placeholder}
      />
    </fieldset>
  );

  render() {
    const { name, job, mobile, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper ndsa-wrapper">
        <h1 className="ndsa-heading">
          <img src={COMPANY.logo.src} alt={COMPANY.logo.alt} />
          <span>NDSA Signature Generator</span>
        </h1>

        <div className="signature-section-wrapper">
          <form>
            {this.renderField('Name', 'name', 'Enter your name')}
            {this.renderField('Job Title', 'job', 'President')}
            {this.renderField('Mobile', 'mobile', '0000 000 000', 'tel')}
            {this.renderField('Email', 'email', COMPANY.emailPlaceholder, 'email')}
          </form>

          <SignaturePreview
            name={name}
            job={job}
            mobile={mobile}
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
