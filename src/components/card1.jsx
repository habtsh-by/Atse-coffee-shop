// src/component/card.jsx
import React from 'react';
import './card1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
        <div className="card_body">
            <div className="card_body-img">
                <img src="https://images.unsplash.com/photo-1649056747314-74345cf99a9c?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      </div>
            <div className="card_body-info">
                <h3 className="card_body-info-title">Atse</h3>
             <div className="card_body-info-p_icon">
             <p>price:100$</p> 
             <FontAwesomeIcon icon={faShoppingCart} />
                </div> 
                <p>description about the coffee </p>
            </div>
        </div>

  );
}

export default Card;
