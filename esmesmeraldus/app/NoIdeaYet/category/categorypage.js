import React from 'react';
import "./category.css";


export default function CategoryComponent(props) {
  return (
    <div id="categories">
      {props.showBackButton && (
        <button id="back-button" onClick={props.onBackButtonClick}>
          back
        </button>
      )}
      <h2>Browse by category</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Learn</a></li>
        <li><a href="#">About </a></li>
        
        
      </ul>
    </div>
  );
}