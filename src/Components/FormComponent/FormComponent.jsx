/*
 FORM COMPONENT
*/

import React from 'react';
import './FormComponent.scss';
import Form from './Form';
import SignaturePreview from './SignaturePreview';
import COMPANIES from './constants/companyData';
import { formatAustralianMobile } from './utils/signatureUtils';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    // State.
    this.state = {
      company: 'Aquatic Life Industries',
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
    const value = formatAustralianMobile(e.target.value);
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
    const aliCompany = COMPANIES['Aquatic Life Industries'];
    const staCompany = COMPANIES['Southern Trading Australia'];

    return (
      <div className="wrapper">
        <h1 style={{ paddingBottom: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <img
              src={aliCompany.logo.src}
              style={{ maxHeight: '40px', width: 'auto', display: 'block' }}
              alt={aliCompany.logo.alt}
            />
            <img
              src={staCompany.logo.src}
              style={{ maxHeight: '40px', width: 'auto', display: 'block' }}
              alt={staCompany.logo.alt}
            />
          </span>
          <span>ALI & STA Signature Generator</span>
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