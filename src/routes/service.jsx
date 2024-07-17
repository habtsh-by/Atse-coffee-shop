import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import hero from '../assets/images/coffee about.png'
import coffeeImage from '../assets/images/badge 1.png'
import './service.css'
function Service (){
    return(
        <>
         <Navbar/>
         <div className="service-page">
            <div className="hero">
                <h1>Our Services</h1>
                <p>Discover the wide range of services we offer at Bean Scene Coffee Shop.</p>
            </div>
            <div className="services">
                <div className="service-card">
                    <img src={coffeeImage} alt="Freshly Brewed Coffee" className="service-card-image" />
                    <div className="service-card-content">
                        <h3>Freshly Brewed Coffee</h3>
                        <p>Enjoy our freshly brewed coffee made from the finest beans.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={coffeeImage} alt="Artisan Pastries" className="service-card-image" />
                    <div className="service-card-content">
                        <h3>Artisan Pastries</h3>
                        <p>Savor our delicious artisan pastries baked fresh daily.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={coffeeImage} alt="Coffee Tasting Events" className="service-card-image" />
                    <div className="service-card-content">
                        <h3>Coffee Tasting Events</h3>
                        <p>Join our coffee tasting events to explore different coffee flavors.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={coffeeImage} alt="Coffee Bean Sales" className="service-card-image" />
                    <div className="service-card-content">
                        <h3>Coffee Bean Sales</h3>
                        <p>Purchase our high-quality coffee beans to enjoy at home.</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Service