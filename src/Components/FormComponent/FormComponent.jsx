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
      active: false,
      company: '',
      name: '',
      job: '',
      phone: '',
      mobile: '',
      email: '',
      tooltip: '',
      toolinfo: 'click to copy signature!',
      color: '',
      color_class: '',
      pronoun: ''
    };
  }

  nameChange = (e) => {
    let value = e.target.value;
    this.setState({
      name: value
    });
  }

  companyChange = (e) => {
    let value = e.target.value;
    this.setState({
      company: value
    })
  }

  toolTipShow = () => {
    this.setState({
      tooltip: 'active',
    })
  }

  toolTipHide = () => {
    this.setState({
      tooltip: '',
    })
  }

  phoneChange = (e) => {
    let value = e.target.value;
    this.setState({
      phone: value
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
    const { marginTop } = this.props;
    const { name, job, company, mobile, email, tooltip, toolinfo, color_class } = this.state;

    return (
      <div className={color_class + " wrapper"}>
        <h1 style={{ paddingBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
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