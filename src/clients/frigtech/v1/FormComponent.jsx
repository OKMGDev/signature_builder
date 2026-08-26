import React from 'react';
import './FormComponent.scss';
import SignaturePreview from './SignaturePreview';
import COMPANY from './constants/companyData';
import { formatAustralianMobile, formatOfficePhone } from './utils/signatureUtils';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    job: '',
    phone: '',
    mobile: '',
    email: '',
    tooltip: '',
    toolinfo: 'click to copy signature!'
  };

  updateField = (field) => (event) => {
    let value = event.target.value;
    if (field === 'mobile') value = formatAustralianMobile(value);
    if (field === 'phone') value = formatOfficePhone(value);
    this.setState({ [field]: value });
  };

  renderField = (label, field, placeholder, type = 'text', extra = {}) => (
    <fieldset>
      <label htmlFor={`frigtech-${field}`}>{label}</label>
      <input
        id={`frigtech-${field}`}
        type={type}
        value={this.state[field]}
        onChange={this.updateField(field)}
        placeholder={placeholder}
        {...extra}
      />
    </fieldset>
  );

  render() {
    const { name, job, phone, mobile, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper frigtech-wrapper">
        <h1 className="frigtech-heading">
          <img src={COMPANY.logo.src} alt={COMPANY.logo.alt} />
          <span>Email signature generator</span>
        </h1>

        <div className="welcome-text">
          <p>Build a FRIGTECH / FRIDGAIR email signature that matches the company template.</p>
          <p>Fill in your details below. FRIGTECH and FRIDGAIR logos, office locations, and legal footer are added automatically.</p>
        </div>

        <div className="signature-section-wrapper">
          <form>
            {this.renderField('Name', 'name', 'Enter your name')}
            {this.renderField('Job Title', 'job', 'Enter your job title')}
            {this.renderField('Email (E)', 'email', 'Enter your email', 'email')}
            {this.renderField('Office phone (P)', 'phone', '(08) 9932 6436', 'text', {
              inputMode: 'tel',
              autoComplete: 'tel'
            })}
            {this.renderField('Mobile (M)', 'mobile', '0234 567 896', 'text', {
              inputMode: 'tel',
              autoComplete: 'tel'
            })}
          </form>

          <SignaturePreview
            name={name}
            job={job}
            phone={phone}
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
