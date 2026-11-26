import React from 'react';
import './FormComponent.scss';
import Form from './Form';
import SignaturePreview from './SignaturePreview';
import { FORM_LOGO } from './constants/assets';

export default class FormComponent extends React.Component {
  state = {
    name: '',
    job: '',
    mobile: '',
    email: '',
    meetingSchedule: '',
    tooltip: '',
    toolinfo: 'click to copy signature!'
  };

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  jobChange = (e) => {
    this.setState({ job: e.target.value });
  };

  mobileChange = (e) => {
    this.setState({ mobile: e.target.value });
  };

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  meetingScheduleChange = (e) => {
    this.setState({ meetingSchedule: e.target.value });
  };

  copyContent = () => {
    this.setState({
      tooltip: 'copied',
      toolinfo: 'copied!'
    });
  };

  render() {
    const { name, job, mobile, email, meetingSchedule, tooltip, toolinfo } = this.state;

    return (
      <div className="wrapper">
        <h1 style={{ paddingBottom: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>
            <img
              src={FORM_LOGO}
              width={200}
              style={{ marginBottom: '5px' }}
              alt="HiVo"
            />
          </span>
          <span>Signature Generator</span>
        </h1>

        <div className="welcome-text">
          <p>Welcome to your custom signature generator, designed and hosted by OKMG.</p>
          <p>
            Complete the fields below to prepare your email signature. The HiVo logo will be
            automatically included in your signature.
          </p>
          <p>For any support enquiries, please contact web@okmg.com - Thank you!</p>
        </div>

        <div className="signature-section-wrapper">
          <Form
            name={name}
            job={job}
            mobile={mobile}
            email={email}
            meetingSchedule={meetingSchedule}
            onNameChange={this.nameChange}
            onJobChange={this.jobChange}
            onMobileChange={this.mobileChange}
            onEmailChange={this.emailChange}
            onMeetingScheduleChange={this.meetingScheduleChange}
          />

          <SignaturePreview
            name={name}
            job={job}
            mobile={mobile}
            email={email}
            meetingSchedule={meetingSchedule}
            tooltip={tooltip}
            toolinfo={toolinfo}
            onCopy={this.copyContent}
          />
        </div>
      </div>
    );
  }
}
