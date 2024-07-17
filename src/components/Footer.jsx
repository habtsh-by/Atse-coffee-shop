import './footer.css'
import logo2 from "../assets/images/logo2.png"
const Footer =()=> {
  return(
    <div className="footer">
      <div className="top">
      <div>
      <img src={logo2} className="navbar-logo" /> 
      <p>Choose your favourite </p>
      </div>
      <div>
        <a href="/">
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter-square"></i>
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      </div>
      
      <div className="bottom">
        <div>
        <h4>About</h4>
            <a href="/manu">Menu</a>
            <a href="/Features">Features</a>
              <a href="/news">News & Blogs</a>
              <a href="/help">  Help & Supports</a>
        </div>
        <div>
        <h4>Company</h4>
            <a href="/manu">How we work</a>
            <a href="/Features">Terms of service</a>
              <a href="/news">Pricing</a>
              <a href="/help"> FAQ</a>
        </div>
        <div>
        <h4>Contact</h4>
            <a href="/addres">Addis Ababa,bole</a>
            <a href="/phone">+251-935-35-58-65</a>
              <a href="/email">habtamufrew1888@gmail.com</a>
              <a href="/websit"> www.atse.come</a>
        </div>
      </div>
      <p>&copy; 2024 Atse Coffee Shop. All rights reserved.</p>

    </div>

  )
}
export default Footer