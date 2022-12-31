import './FormStyles.css';

import React from 'react'

const  Form1 = () => {
  return (
    <div className='form1'>
      <form>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea rows='6' placeHolder='Type your message here'/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form1;
