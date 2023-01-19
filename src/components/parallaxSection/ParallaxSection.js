import React from 'react';
import './ParallaxSection.css';
import Button from '../button/Button';
import { AiOutlineLeft , AiOutlineRight } from "react-icons/ai";

export default function ParallaxSection(props) {
  let sectionType=`main-container parallax ${props.type}`;

  if(props.type==="withBtn"){
    var jsx=<Button type="prpl-btn" btnText="more info"/>;
  }
  else if(props.type==="withImg"){
    var jsx=<div className="imageContainer">
     <i className='icon'><AiOutlineLeft/></i>
     <div className="image">
         <img src="./img/Aigars-Silkalns-300x300.jpg" className="img" alt='userImage' />
         <p className="imgName">Aigars Silkalns</p>
      </div>
      <i className='icon'><AiOutlineRight/></i>
   </div>
  }

  return (
    <div className={sectionType}>
        <h1 className="title">{props.title}</h1>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis enim esse placeat suscipit aspernatur facere iusto, debitis ullam fuga temporibus commodi, numquam incidunt. Iste temporibus fugit eligendi nostrum, qui quo,!</p>
         
        {jsx}
        
        
    </div>
  )
}
