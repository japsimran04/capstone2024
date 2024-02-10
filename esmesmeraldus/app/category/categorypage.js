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
        <li><a href="#">Colombian Coffee</a></li>
        <li><a href="#">Specialty Coffee</a></li>
        {/* ... (other list items) ... */}
        <li><a href="#">Colouristm</a></li>
      </ul>
    </div>
  );
}