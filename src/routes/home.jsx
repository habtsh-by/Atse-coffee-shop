import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './home.css'
import hero from '../assets/images/coffee2.png'
import logo from '../assets/images/logo2.png'
import coffee from '../assets/images/coofeeben.png'
import coffeeImage from '../assets/images/badge 1.png'
import coffeeImage2 from '../assets/images/best-price 1.png'
import coffeeImage3 from '../assets/images/coffee-cup 1.png'
import Card from '../components/card.jsx';
import coffeebeans from '../assets/images/coffee-beans 1.png'

function Home (){
    return(
        <>
         <Navbar/>
         <div>

         </div>
        <div className='home__main'>
        <div className='home__mainInfo'>
        <h1 className='animated-h1'>ATSE COFFEE</h1>
        <p className='animated-p'>From the birthplace of coffee, Ethiopia, to your cup, experience the rich flavors and traditions that make Ethiopian coffee unique. Each sip tells a story of lush highlands, meticulous hand-picking, and ancient ceremonies. Enjoy a taste of history and culture with every cup of Ethiopian coffee.</p>
        <a className='show animated-a' href="/help">Learn More</a> 
        <a className='show2 animated-a' href="/login">Log IN</a>
        </div>
            <div className="home__mainimage">
            <img className="home-img circular-motion" src={hero} alt="hero image" />
            <img className ="animated-h1"src={logo} alt="" />
            </div>

        </div>

        <div className="home_se">
            <div className="home_se-text animated-p ">
                <h1>Discover the best coffee</h1>
                <p>Bean Scene is a coffee shop that provides you with
                     quality coffee that helps boost your productivity
                      and helps build your mood. Having a cup of coffee is good,
                       but having a cup of real coffee is greater. There is no doubt
                     that you will enjoy this coffee more than others you have ever tasted.</p>
             <a className='show animated-a' href="/help">Learn More</a> 
            </div>
            <div className="home_se-img">
                <img className="home_se-img animated-h1" src={coffee} alt="coffee" />
            </div>
        </div>
        <div className="home_tr">
            <div className="home_tr-text">
                <h1>Why are we different?</h1>
                <p>We don’t just make your coffee, we make your day!</p>

            </div>
            <div className="card-container">
                <Card 
                    image={coffeebeans} 
                    title="Supreme Beans" 
                    description="Beans that provides
                    great taste"
                />
                <Card 
                    image={coffeeImage} 
                    title="High Quality" 
                    description="We provide the
                    highest quality."
                />
                <Card 
                    image={coffeeImage3} 
                    title="Extraordinary" 
                    description="Coffee like you have
                    never tasted"
                />
                 <Card 
                    image={coffeeImage2} 
                    title="Affordable Price" 
                    description="Our Coffee prices are
                    easy to afford"
                />
            </div>
            <div className="home_tr-text">
                <p>Great ideas start with great coffee, Lets help you achieve that</p>
                <h3>Get started today.</h3>
                 <button className='join_us'>Join Us</button>

            </div>
        </div>
         <Footer/> 
        </>
    )
}

export default Home