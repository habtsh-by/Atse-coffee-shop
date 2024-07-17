import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/card1.jsx';
import React from 'react';
import './shop.css';
const Shop = () => {
     
        return (
            <>
            <Navbar/>
            <div className="shopping-page">
                <div className="hero">
                    <h1>Shop Our Products</h1>
                    <p>Explore our wide range of coffee products available for purchase.</p>
                </div>
               <div className="prodacts">
               <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
               </div> 
                
            </div>

            <Footer/>
            </>)
        
    }
   
    
    
    export default Shop;
    