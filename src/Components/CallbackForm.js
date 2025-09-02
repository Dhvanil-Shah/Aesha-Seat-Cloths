import React from 'react';
import './CallbackForm.css';

function CallbackForm() {
  // IMPORTANT: Replace the URL below with your own Formspree URL from Step 1
  const FORM_ENDPOINT = "https://formspree.io/f/xwpqeeal"; 

  // We no longer need the useState and handleSubmit logic,
  // as Formspree handles the submission process.

  return (
    <section className="callback-section" id="callback">
      <div className="container callback-container">
        <div className="callback-content">
          <h2 className="callback-title">Have Questions</h2>
          <p className="callback-subtitle">
            Leave your number and we'll call you back to discuss your customization needs.
          </p>
        </div>
        
        {/* The form now points to your Formspree endpoint */}
        <form 
          action={FORM_ENDPOINT}
          method="POST"
          className="callback-form"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="form-input"
            required 
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            name="phone"
            className="form-input"
            required
          />
          <button type="submit" className="form-button">Request a Callback</button>
        </form>
      </div>
    </section>
  );
}

export default CallbackForm;
