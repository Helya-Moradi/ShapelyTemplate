import React from 'react';
import './Section.css';
import Button from '../button/Button';

export default function section(props) {
  let sectionType=`seoContainer ${props.direction}`;
  return (
    <div className={sectionType}>
      <img src={props.imgSrc} className='seoImage' alt='seoImage' />
      <div className="seo">
        <h1 className="seoHeader">{props.title}</h1>
        <p className="seoText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste fuga, amet delectus laudantium ipsum dolores expedita quam aliquam quasi ad impedit error quas explicabo cupiditate vitae accusantium facilis a velit.</p>
        <Button type="prpl-btn"/>
      </div>
    </div>
  )
}
