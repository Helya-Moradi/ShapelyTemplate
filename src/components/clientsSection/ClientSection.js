import './ClientSection.css';
import Client from './client/Client';
import React from 'react'

export default function ClientSection() {
  return (
    <div className='mainContainer'>
        <h1 className="title">Our Main Clients</h1>
        <div className="clients">
           <Client src="./img/html5-logo.png"/>
           <Client src="./img/css-logo.png"/>
           <Client src="./img/js-logo.png"/>
           <Client src="./img/sass-logo.png"/>
        </div>
    </div>
  )
}
