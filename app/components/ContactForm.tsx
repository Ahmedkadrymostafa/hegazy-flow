'use client'
import React from 'react'

const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label>Name</label>
          <input required name="name" id="email" type="text" />
        </div>
        <div className="form-group">
          <label>Company Email</label>
          <input required name="email" id="email" type="text" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea required cols={50} rows={10} id="textarea" name="textarea"></textarea>
        </div>
        <button type="submit" className="form-submit-btn" onClick={(e: any) => {
            e.preventDefault();
        }}>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
