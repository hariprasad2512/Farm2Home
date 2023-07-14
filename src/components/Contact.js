import React from 'react'
import './Contact.css';
import NBar from './NBar';


function showAlert() {
    alert('Message sent');
  }

function Contact() {
  return (
	<div>
	  <div style={{backgroundColor: 'lightgreen'}}>
		<NBar/>
       <div class="container">
	<div class="row">
			<h1 style={{marginTop: '5%'}}>contact us</h1>
	</div>
	<div class="row">
			<h4 >We'd love to hear from you!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required/>
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" >
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn" onClick={showAlert} >Send Message</div>
			</div>
	</div>
</div>

    </div>	
	</div>
  
  )
}

export default Contact