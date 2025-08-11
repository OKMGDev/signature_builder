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
      company: '',
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
        <h1 style={{ paddingBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>
            <img
              src="https://cdn.prod.website-files.com/6822c831157904e56be1ff97/68999525cba5d4586c622cd5_ali.png"
              width={200}
              alt="Aquatic Life Industries Logo"
            />
          </span>
          <span>Aquatic Life Industries <br />Signature Generator</span>
        </h1>

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