/*
 FORM COMPONENT
*/

import React from 'react';
import './FormComponent.scss';
import Form from './Form';
import SignaturePreview from './SignaturePreview';
import { FORM_LOGO } from './constants/assets';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    // State.
    this.state = {
      company: 'Hair Supplies', // Set default company to first option
      name: '',
      job: '',
      mobile: '',
      landline: '',
      email: '',
      tooltip: '',
      toolinfo: 'click to copy signature!'
    };
  }

  nameChange = (e) => {
    let value = e.target.value;
    this.setState({
      name: value
    });
  }

  companyChange = (companyName) => {
    this.setState({
      company: companyName
    });
  }



  mobileChange = (e) => {
    let value = e.target.value;
    this.setState({
      mobile: value
    });
  }

  landlineChange = (e) => {
    let value = e.target.value;
    this.setState({
      landline: value
    });
  }

  emailChange = (e) => {
    let value = e.target.value;
    this.setState({
      email: value
    });
  }

  copyContent = () => {
    this.setState({
      tooltip: 'copied',
      toolinfo: 'copied!'
    })
  }

  jobChange = (e) => {
    let value = e.target.value;
    this.setState({
      job: value
    });
  }

  render() {
    const { name, job, company, mobile, landline, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper">
        <h1 style={{ paddingBottom: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>
            <img
              src={FORM_LOGO}
              width={250}
              style={{ "marginBottom": "5px" }}
              alt="Hair Supplies Logo"
            />
          </span>
          <span>Signature Generator</span>
        </h1>

        <div className="welcome-text" >
          <p>
            Welcome to your custom signature generator, designed and hosted by OKMG.
          </p>
          <p>Complete the fields below to prepare your email signature. Select a company from the dropdown to display the relevant logo in your signature.
          </p>
          <p>For any support enquiries, please contact web@okmg.com - Thank you!
          </p>
        </div>

        <div className="signature-section-wrapper">


          <Form
            name={name}
            job={job}
            company={company}
            mobile={mobile}
            landline={landline}
            email={email}
            onNameChange={this.nameChange}
            onJobChange={this.jobChange}
            onCompanyChange={this.companyChange}
            onMobileChange={this.mobileChange}
            onLandlineChange={this.landlineChange}
            onEmailChange={this.emailChange}
          />

          <SignaturePreview
            name={name}
            job={job}
            company={company}
            mobile={mobile}
            landline={landline}
            email={email}
            tooltip={tooltip}
            toolinfo={toolinfo}
            onTooltipShow={this.toolTipShow}
            onTooltipHide={this.toolTipHide}
            onCopy={this.copyContent}
          />
        </div>


      </div>
    );
  }
}