import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const {
      name,
      job,
      mobile,
      email,
      meetingSchedule,
      onNameChange,
      onJobChange,
      onMobileChange,
      onEmailChange,
      onMeetingScheduleChange
    } = this.props;

    return (
      <form>
        <fieldset>
          <label htmlFor="hivo-name">Name</label>
          <input
            type="text"
            id="hivo-name"
            value={name}
            onChange={onNameChange}
            placeholder="Enter your name"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="hivo-job-title">Job Title</label>
          <input
            type="text"
            id="hivo-job-title"
            value={job}
            onChange={onJobChange}
            placeholder="Enter your job title"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="hivo-phone">Mobile</label>
          <input
            type="text"
            id="hivo-phone"
            value={mobile}
            onChange={onMobileChange}
            placeholder="Enter your mobile number"
            inputMode="tel"
            autoComplete="tel"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="hivo-email">Email</label>
          <input
            type="email"
            id="hivo-email"
            value={email}
            onChange={onEmailChange}
            placeholder="Enter your email"
            autoComplete="email"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="hivo-meeting-schedule">Book a demo</label>
          <input
            type="text"
            id="hivo-meeting-schedule"
            value={meetingSchedule}
            onChange={onMeetingScheduleChange}
            placeholder="Enter demo booking link (optional)"
          />
        </fieldset>
      </form>
    );
  }
}
