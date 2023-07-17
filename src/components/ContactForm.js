import "./ContactForm.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>
               Send Message ... 
            </h1>
            <form>
                <input type="text" name="name" id="name" placeholder="Name" required/>
                <input type="text" name="email" id="email" placeholder="Email" required/>
                <input type="text"  name="subject" id="subject" placeholder="Subject" required/>
                <textarea name="message" id="message" rows="10" cols="30" placeholder="message" required/>
                <button>Send Message</button>
            </form>
        </div>
    );
}
export default ContactForm;