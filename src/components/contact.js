import './contact.css';
import { useState } from 'react';

export const Contact = () => {
  const [fname, setFname] = useState('Enter your first name');
  const [lname, setLname] = useState('Enter your last name');
  const [email, setEmail] = useState('yourname@email.com');
  const [message, setMessage] = useState(
    `Send me a message and I'll reply as soo as I can`
  );

  return (
    <section className='section'>
      <h3>Contact me</h3>
      <p>Hi, there. Contact me to ask me about anything you have in mind.</p>

      <form action='/'>
        <div className='name-group'>
          <div className='separate'>
            <label htmlFor='fname'>First name</label>
            <input
              type='text'
              id='first_name'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              onFocus={() => setFname('')}
            />
          </div>

          <div className='separate'>
            <label htmlFor='lname'>Last name</label>
            <input
              type='text'
              id='last_name'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              onFocus={() => setLname('')}
            />
          </div>
        </div>

        <div className='separate'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmail('')}
          />
        </div>

        <div className='separate'>
          <label htmlFor='textArea'>Message</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setMessage('')}
          ></textarea>
        </div>

        <div className='separate checkbox-container'>
          <input type='checkbox' />
          <label className=' checkbox-text'>
            You agree to providing your data to Ada who may contact you?
          </label>
        </div>
        <button id='btn__submit'>Send message</button>
      </form>
    </section>
  );
};
