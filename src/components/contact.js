import './contact.css';

export const Contact = () => {
  return (
    <section className='section'>
      <h3>Contact me</h3>
      <p>Hi, there. Contact me to ask me about anything you have in mind.</p>

      <form action='/action_page.php'>
        <div className='name-group'>
          <div className='separate'>
            <label for='fname'>First name</label>
            <input type='text' id='first_name' value='Enter your first name' />
          </div>

          <div className='separate'>
            <label for='lname'>Last name</label>
            <input type='text' id='last_name' value='Enter your last name' />
          </div>
        </div> 

        <div className='separate'>
          <label for='email'>Email</label>
          <input type='email' id='email' value='yourname@email.com' />
        </div>

        <div className='separate'>
          <label for='textArea'>Message</label>
          <textarea id='message'>
            Send me a message and reply as soon as I can
          </textarea>
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
