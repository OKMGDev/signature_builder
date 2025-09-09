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
      selectedCompanies: ['New Me'], // Array of selected companies
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
        // Add company to selected list if not already present
        if (!prevState.selectedCompanies.includes(companyName)) {
          return {
            selectedCompanies: [...prevState.selectedCompanies, companyName]
          };
        }
      } else {
        // Remove company from selected list
        return {
          selectedCompanies: prevState.selectedCompanies.filter(company => company !== companyName)
        };
      }
      return prevState; // No change if company already in list and being added
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
    const { name, job, selectedCompanies, mobile, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper">
        <h1 style={{ paddingBottom: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>
            <img
              src="https://cdn.prod.website-files.com/6639be971dc3625ee145fd74/68bfeaf6b60ac326a3bce9a1_newme.png"
              width={250}
              style={{ "marginBottom": "5px" }}
              alt="New Me Logo"
            />
          </span>
          <span>Signature Generator</span>
        </h1>

        <div className="welcome-text" >
          <p>
            Welcome to your custom signature generator, designed and hosted by OKMG.
          </p>
          <p>Complete the fields below to prepare your email signature. Select one or more companies using the checkboxes to display the relevant logos in your signature.
          </p>
          <p>For any support enquiries, please contact web@okmg.com - Thank you!
          </p>
        </div>

        <div className="signature-section-wrapper">


          <Form
            name={name}
            job={job}
            selectedCompanies={selectedCompanies}
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
            selectedCompanies={selectedCompanies}
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