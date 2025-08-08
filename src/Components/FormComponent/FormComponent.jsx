/*
 FORM COMPONENT
*/


import React, { Component } from 'react';  
import './FormComponent.scss';

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
      tooltip:'',
      toolinfo:'click to copy signature!',
      color: '',
      color_class: '',
      pronoun: ''
  
    };
  }
  nameChange(e) {
    let value = e.target.value;
    this.setState({
      name: value
    });
  }

  companyChange(e) {
    let value = e.target.value;
    this.setState({
      company: value
    })
  }
  toolTipShow(e){
    this.setState({
      tooltip: 'active',
    })
  }
  toolTipHide(e){
    this.setState({
      tooltip:'',

    })
  }
  phoneChange(e) {
    let value = e.target.value;
    this.setState({
      phone: value
    });
  }
  mobileChange(e) {
    let value = e.target.value;
    this.setState({
     mobile: value
    });
  }
  emailChange(e) {
    let value = e.target.value;
    this.setState({
     email: value
    });
  }
 
  copyContent(e){
    let content = e.currentTarget;
    let range = document.createRange();
    range.selectNode(content);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({
      tooltip: 'copied',
      toolinfo: 'copied!'
    })
  }
  jobChange(e) {
    let value = e.target.value;
    this.setState({
      job: value
    });
  }

 
  
  render(){

    const {
      marginTop
    } = this.props

    return (
      <div className={this.state.color_class + " wrapper"}>
      <h1 style={{paddingBottom:'15px',textAlign:'center'}}><span><img src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-group.png" width={130}  style={{"marginBottom":"5px"}}/></span></h1>
      <form>
          <fieldset>
            <label>Name</label>
            <input 
              type="text" 
              id="name"
              onChange={this.nameChange.bind(this)}
              placeholder="Enter your name"
              />
          </fieldset>
           <fieldset>
            <label>Job Title</label>
            <input 
              type="text" 
              id="job-title"
              onChange={this.jobChange.bind(this)}
              placeholder="Enter your job title"
              />
          </fieldset>
           <fieldset>
            <label>Company</label>
           <select id="company" name="company" onChange={this.companyChange.bind(this)}>
            <option value="--">--</option>
            <option value="Spot on Group">Spot on Group</option>
            <option value="Spot on Power Projects">Spot on Power Projects</option>
            <option value="North Vic Electricity Services">North Vic Electricity Services</option>
            <option value="Spot on Group + North Vic Electricity Services">Spot on Group & North Vic Electricity</option>
          </select>
          </fieldset>
          <fieldset>
            <label>Mobile</label>
            <input 
              type="text" 
              id="phone"
              onChange={this.mobileChange.bind(this)}
              placeholder="Enter your mobile number"
              />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input 
              type="text" 
              id="email"
              onChange={this.emailChange.bind(this)}
              placeholder="Enter your email address"
              />
          </fieldset>
          
   
   
      </form>
   
      <div 
        className="signature-wrapper" 
        style={{position:'relative'}}
        >
          <p className={this.state.tooltip + ' tooltip'}>{this.state.toolinfo}</p>
          <div className='instructions'>
            <h5>Instructions</h5>
            <ul>
              <li>Click on the signature to copy it to your clipboard.</li>
              <li>Navigate to Gmail > Settings > Signatures > Paste into signature box > Save</li>
              <li>Done!</li>
            </ul>
          </div>
          <div 
          onClick={this.copyContent.bind(this)} 
          onMouseEnter={this.toolTipShow.bind(this)} 
          onMouseLeave={this.toolTipHide.bind(this)}
          >
          {/* -------------- SIGNATURE ---------*/}
          <table width={520} cellspacing="0" cellPadding="0" style={{fontFamily: 'Arial,Helvetica,sans-serif', textAlign: 'left', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '16px', width: '520px'}}>
            <tbody>
              <tr>
                <td style={{fontSize:'12pt',textTransform:'capitalize', fontWeight:'bold',color:'rgb(38, 90, 168)'}}>{this.state.name  ? this.state.name : "Name"}</td>
              </tr>
               <tr>
               <td style={{ fontSize: '9pt',textTransform:'capitalize',color: "rgb(237, 182, 28)" }}>
                  {this.state.job ? this.state.job : "Job Title"}
                  <br/><br/>
                </td>
              </tr>

              <tr>
                <td style={{ fontSize: '9pt' }}>{this.state.mobile  ? this.state.mobile : "0000 00 0000"}</td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt' }}>{this.state.email  ? this.state.email : "example@example.com.au"}</td>
              </tr>
              {this.state.company === "--" ? (
              <tr>
                <td style={{ paddingTop: '10px' }}>
                  <img
                    src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/Placeholder_view_vector.svg.png"
                    alt="Spot On Group"
                    width="120"
                    height="92"
                    style={{ width: '120px', height: '92px' }}
                  />
                </td>
              </tr>
            ) : 
              null

            }
            {/* Spot on Group */ }
              {this.state.company === "Spot on Group" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-group.png"
                      alt="Spot On Group"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
               {/* Spot on Power Projects */ }
              {this.state.company === "Spot on Power Projects" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-power-projects.png"
                      alt="Spot On Group"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
               {/* North Vic Electricity */ }
              {this.state.company === "North Vic Electricity Services" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-north-vic-electric.png"
                      alt="Spot On Group"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
                {/* Spot on Group + North Vic */ }
              {this.state.company === "Spot on Group + North Vic Electricity Services" ? (
               <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-group.png"
                      alt="Spot On Group"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px', marginRight: '15px' }}
                    />
                    
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-north-vic-electric.png"
                      alt="Spot On Group"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>

              ) : null}

              <tr>

                <td style={{ fontSize: '9pt' }}><a href="https://spotonpower.com.au" target="_blank" style={{color: '#000',textDecoration:'none'}}><br/>spotonpower.com.au</a></td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt' }}><a href="https://spotonlocations.com.au" target="_blank" style={{color: '#000',textDecoration:'none'}}>spotonlocations.com.au</a></td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt' }}><a href="https://northvicelectrcity.com.au" style={{color: '#000',textDecoration:'none'}}>northvicelectrcity.com.au</a></td>
              </tr>
              <tr>
              <td style={{fontSize:'8pt',fontStyle: 'italic' }}>
              <br/>
                Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.
              </td>
              </tr>
            </tbody>
          </table>     

          {/* -------------- SIGNATURE ---------*/}
            
          </div>
        </div>
      </div>
      );
    }
  }