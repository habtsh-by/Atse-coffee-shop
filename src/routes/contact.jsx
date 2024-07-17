import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './contact.css'
import rec from '../assets/images/Rectangle 14.png'
function Contact (){
    return(
        <>
         <Navbar/>
         <div className="contact-page">
            <div className="hero">
                {/* <img src={rec} alt="" /> */}
                <h1>Contact Us</h1>
                <p>We're here to help you with any questions or concerns.</p>
            </div>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        <Footer/>
        
        </>
    )
}

export default Contact