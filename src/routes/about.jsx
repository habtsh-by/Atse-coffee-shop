import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import hero from '../assets/images/coffee about.png'
import './about.css'
function About (){
    return(
        <>
         <Navbar/>

   <div className="hero">
    <h1>About</h1>
     </div>
   <div className="hero-text">
    
   </div>
   <div className="about-body">
    <h3>Atse coffee</h3>
    <p>Atse Coffee is committed to sustainability, working directly with farmers in Kefa
         to ensure fair prices and environmentally friendly farming practices.</p>
   
   <div className="first-body">
    <div className="body-text">
        <p>
        Atse Coffee prioritizes sustainability, forging direct partnerships with farmers in Kefa.
         Our commitment extends beyond quality coffee; we ensure fair prices and promote environmentally friendly farming practices.
          By working closely with farmers, we cultivate
         a mutually beneficial relationship, fostering ethical and sustainable 
         coffee production while supporting local communities in Kefa.
        </p>

    </div>
    <div className="image">
    <img className='aboutimg' src="https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className='aboutimg' src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
   </div>
   <div className="first-body">
   <div className="image">
    <img className='aboutimg' src="https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className='aboutimg' src="https://images.unsplash.com/photo-1631166092772-d07aed54b9a0?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className="body-text">
        <p>
        Embark on a coffee journey unlike any other with Atse Coffee! We're not just about brewing a cup;
         we're crafting an experience, one that's steeped in responsibility from seed to sip. Picture this: June 2024,
          when Abidisa Melkamu, fueled by passion and determination, bravely ventured into the coffee world, with his wife by his side.
           They planted the seeds of Atse Coffee, right down the street from Bole Road. The community's response? A resounding cheer!
            Atse quickly became the go-to spot for everyone, from students to retirees, seeking a caffeine fix and a cozy hangout.
             But wait, there's more! Dive into our delightful array of baked goods and scrumptious meals. Oh,
              and did we mention the ambiance? Prepare to be charmed by our chic design and welcoming atmosphere.
         Atse Coffee: where every cup is a celebration, and every visit is a delightful adventure!
        </p>

    </div>
    
   </div>
   </div>

       <Footer/>
        </>
    )
}

export default About