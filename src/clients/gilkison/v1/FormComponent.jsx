import React from 'react';
import './FormComponent.scss';

import SignaturePreview from './SignaturePreview';
import COMPANY from './constants/companyData';
import { formatLandline } from './utils/signatureUtils';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    phone: COMPANY.phone,
    tooltip: '',
    toolinfo: 'click to copy signature!'
  };

  updateField = (field) => (event) => {
    let value = event.target.value;
    if (field === 'phone') value = formatLandline(value);
    this.setState({ [field]: value });
  };

  renderField = (label, field, placeholder, type = 'text', extra = {}) => (
    <fieldset>
      <label htmlFor={`gilkison-${field}`}>{label}</label>
      <input
        id={`gilkison-${field}`}
        type={type}
        value={this.state[field]}
        onChange={this.updateField(field)}
        placeholder={placeholder}
        {...extra}
      />
    </fieldset>
  );

  render() {
    const { name, phone, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper gilkison-wrapper">
        <h1 className="gilkison-heading">
          <img src={COMPANY.logo.src} alt={COMPANY.logo.alt} />
          <span>Email signature generator</span>
        </h1>

        <div className="welcome-text">
          <p>Build a Gilkison Group email signature that matches the company template.</p>
          <p>
            Enter your name and phone number. The logo, tagline, and website are added automatically.
          </p>
        </div>

        <div className="signature-section-wrapper">
          <form>
            {this.renderField('Name', 'name', 'Alex Gilkison')}
            {this.renderField('Phone', 'phone', COMPANY.phone, 'text', {
              inputMode: 'tel',
              autoComplete: 'tel'
            })}
          </form>

          <SignaturePreview
            name={name}
            phone={phone}
            tooltip={tooltip}
            toolinfo={toolinfo}
            onCopy={() => this.setState({ tooltip: 'copied', toolinfo: 'copied!' })}
          />
        </div>
      </div>
    );
  }
}
