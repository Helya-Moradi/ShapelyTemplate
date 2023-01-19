import './Client.css';
import React from 'react'

export default function Client(props) {
  return (
    <div>
        <img src={props.src} className="clientImage" alt='clientImage'/>
    </div>
  )
}
