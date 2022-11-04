export const Contact = () => {
  return (
    <section>
      <h1>Contact me</h1>
      <h2>Hi, there. Contact me to ask me about anything you have in mind</h2>
      
      <form action='/action_page.php'>
        <label for='fname'>First name:</label>
        <input type='text' id='first_name' value='Enter your first name' />

        <label for='lname'>Last name:</label>
        <input type='text' id='last_name' value='Enter your last name' />

        <label for='email'>Email</label>
        <input type='email' id='email' value='yourname@email.com' />

        <label for='textArea'>Message</label>
        <textarea
          id='message'
          value='Send me a message and  reply as soon as I can '
        ></textarea>

        <input type='radio' />
        <label>
          You agree to providing your data to Ada who may contact you?
        </label>
        <button id='btn__submit'>Send message</button>
      </form>
    </section>
  );
};
