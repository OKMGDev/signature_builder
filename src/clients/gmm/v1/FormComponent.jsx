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
    const { name, job, mobile, email, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper">
        <h1 style={{ paddingBottom: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>
            <img
              src={FORM_LOGO}
              width={200}
              style={{ "marginBottom": "5px" }}
              alt="Globe Metals & Mining Logo"
            />
          </span>
          <span>Signature Generator</span>
        </h1>

        <div className="welcome-text" >
          <p>
            Welcome to your custom signature generator, designed and hosted by OKMG.
          </p>
          <p>Complete the fields below to prepare your email signature. The Globe Metals & Mining logo will be automatically included in your signature.
          </p>
          <p>For any support enquiries, please contact web@okmg.com - Thank you!
          </p>
        </div>

        <div className="signature-section-wrapper">


          <Form
            name={name}
            job={job}
            mobile={mobile}
            email={email}
            onNameChange={this.nameChange}
            onJobChange={this.jobChange}
            onMobileChange={this.mobileChange}
            onEmailChange={this.emailChange}
          />

          <SignaturePreview
            name={name}
            job={job}
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