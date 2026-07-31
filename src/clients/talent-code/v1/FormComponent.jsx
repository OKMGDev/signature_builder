import React from 'react';
import './FormComponent.scss';
import SignaturePreview from './SignaturePreview';
import COMPANY from './constants/companyData';
import { formatAustralianMobile } from './utils/signatureUtils';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    job: 'Next Step Tennis Academy Coach',
    job2: 'TA Junior Development Coach',
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
      <label htmlFor={`talent-code-${field}`}>{label}</label>
      <input
        id={`talent-code-${field}`}
        type={type}
        value={this.state[field]}
        onChange={this.updateField(field)}
        placeholder={placeholder}
      />
    </fieldset>
  );

  render() {
    const { name, job, job2, mobile, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper talent-code-wrapper">
        <h1 className="talent-code-heading">
          <img src={COMPANY.logo.src} alt={COMPANY.logo.alt} />
          <span>The Talent Code Signature Generator</span>
        </h1>

        <div className="signature-section-wrapper">
          <form>
            {this.renderField('Name', 'name', 'Enter your name')}
            {this.renderField('Job Title / Credentials', 'job', 'Next Step Tennis Academy Coach')}
            {this.renderField('Job Title / Credentials (line 2)', 'job2', 'TA Junior Development Coach')}
            {this.renderField('Mobile', 'mobile', '0000 000 000', 'tel')}
            {this.renderField('Email', 'email', 'name@thetalentcode.com.au', 'email')}
          </form>

          <SignaturePreview
            name={name}
            job={job}
            job2={job2}
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
