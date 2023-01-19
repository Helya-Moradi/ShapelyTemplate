import './project.css';
import React from 'react'

export default function Project(props) {
  return (
    <div className="project">
        <div className="overlayBg"></div>
        <div className="overlay">{props.textOverlay}</div>
        <img src={props.imgSrc} className="projectImg" alt='project'></img>
    </div>
  )
}
