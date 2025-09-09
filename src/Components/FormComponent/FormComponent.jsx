/*
 FORM COMPONENT
*/

import React, { Component } from 'react';
import './FormComponent.scss';
import Form from './Form';
import SignaturePreview from './SignaturePreview';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    // State.
    this.state = {
      company: ['North Vic Electricity'], // Set default company as array so logo is always visible
      name: '',
      job: '',
      mobile: '',
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

  companyChange = (companyName, isChecked) => {
    this.setState(prevState => {
      if (isChecked) {
        // Add company if checked
        return {
          company: [...prevState.company, companyName]
        };
      } else {
        // Remove company if unchecked
        return {
          company: prevState.company.filter(c => c !== companyName)
        };
      }
    });
  }



  mobileChange = (e) => {
    let value = e.target.value;
    this.setState({
      mobile: value
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
    const { name, job, company, mobile, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper">
        <h1 style={{ paddingBottom: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>
            <img
              src="https://spotongroup.com.au/wp-content/uploads/2025/07/logo-spoton-civil-1.svg"
              width={130}
              style={{ "marginBottom": "5px" }}
              alt="Spot On Civil Logo"
            />
          </span>
          <span>Signature Generator</span>
        </h1>

        <div className="welcome-text" >
          <p>
            Welcome to your custom signature generator, designed and hosted by OKMG.
          </p>
          <p>Complete the fields below to prepare your email signature. For the relevant logos to appear, you can select one or both of the businesses. Please note that if you require both logos for a combined signature, it is preferred that North Vic Electricity is ticked first so that the arrangement has the correct business hierarchy.
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
            email={email}
            onNameChange={this.nameChange}
            onJobChange={this.jobChange}
            onCompanyChange={this.companyChange}
            onMobileChange={this.mobileChange}
            onEmailChange={this.emailChange}
          />

          <SignaturePreview
            name={name}
            job={job}
            company={company}
            mobile={mobile}
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