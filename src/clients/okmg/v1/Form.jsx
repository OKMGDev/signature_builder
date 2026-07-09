import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    const {
      name,
      job,
      mobile,
      meetingSchedule,
      onNameChange,
      onJobChange,
      onMobileChange,
      onMeetingScheduleChange
    } = this.props;

    return (
      <form>

        <fieldset>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onNameChange}
            placeholder="Enter your name"
          />
        </fieldset>
        <fieldset>
          <label>Job Title</label>
          <input
            type="text"
            id="job-title"
            value={job}
            onChange={onJobChange}
            placeholder="Enter your job title"
          />
        </fieldset>
        <fieldset>
          <label>Mobile</label>
          <input
            type="text"
            id="phone"
            value={mobile}
            onChange={onMobileChange}
            placeholder="Enter your mobile number"
          />
        </fieldset>
        <fieldset>
          <label>Meeting Schedule Link</label>
          <input
            type="text"
            id="meeting-schedule"
            value={meetingSchedule}
            onChange={onMeetingScheduleChange}
            placeholder="Enter meeting schedule link (optional)"
          />
        </fieldset>
      </form>
    );
  }
}
