import { Routes , Route } from 'react-router-dom';
import './App.css'
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Service from './routes/service';
import Shop from './routes/shop';

export default function App(){

  return(
 <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/shop" element={<Shop />} />
     


     </Routes>
    
 
 </div>
  );
}


