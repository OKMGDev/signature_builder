import React from 'react';
import '../../heirloom/v1/FormComponent.scss';
import './FormComponent.scss';
import SignaturePreview from './SignaturePreview';
import COMPANY from './constants/companyData';
import { formatPhone } from './utils/signatureUtils';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    job: '',
    mobile: '',
    phone: '',
    email: '',
    tooltip: '',
    toolinfo: 'click to copy signature!'
  };

  updateField = (field) => (event) => {
    const value = field === 'mobile' || field === 'phone'
      ? formatPhone(event.target.value)
      : event.target.value;
    this.setState({ [field]: value });
  };

  renderField = (label, field, placeholder, type = 'text') => (
    <fieldset>
      <label htmlFor={`harvest-road-${field}`}>{label}</label>
      <input
        id={`harvest-road-${field}`}
        type={type}
        value={this.state[field]}
        onChange={this.updateField(field)}
        placeholder={placeholder}
      />
    </fieldset>
  );

  render() {
    const {
      name,
      job,
      mobile,
      phone,
      email,
      tooltip,
      toolinfo
    } = this.state;

    return (
      <div className="wrapper harvest-road-wrapper">
        <h1 className="harvest-road-heading">
          <img src={COMPANY.logos.harvestRoad.src} alt={COMPANY.logos.harvestRoad.alt} />
          <span>Harvest Road Group Signature Generator</span>
        </h1>

        <div className="signature-section-wrapper">
          <form>
            {this.renderField('Name', 'name', 'Enter your name')}
            {this.renderField('Job Title', 'job', 'Enter your job title')}
            {this.renderField('Mobile', 'mobile', '+61 4 0000 0000', 'tel')}
            {this.renderField('Phone', 'phone', '+61 8 0000 0000', 'tel')}
            {this.renderField('Email', 'email', 'name@harvestroad.com', 'email')}
          </form>

          <SignaturePreview
            name={name}
            job={job}
            mobile={mobile}
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
