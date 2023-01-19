import './projects.css';
import React from 'react';
import Project from './project/project';

export default function Projects() {
  return (
    <div className='projectsContainer'>
        <h1 className="projectsTitle">Our Latest Projects</h1>
        <p className="projectsText">Lorem ipsum dolor sit amet </p>
        <div className="projects">
            <Project imgSrc="./img/photo-1443890484047-5eaa67d1d630-1.jpg" textOverlay="Project #1"/>
            <Project imgSrc="./img/photo-1422568374078-27d3842ba676-1.jpg" textOverlay="Project #2"/>
            <Project imgSrc="./img/photo-1447834353189-91c48abf20e1-1-1.jpg" textOverlay="Project #3"/>
            <Project imgSrc="./img/photo-1447877085163-3cce903855cd-1.jpg" textOverlay="Project #4"/>

            <Project imgSrc="./img/photo-1447958374760-1ce70cf11ee3-1-1.jpg" textOverlay="Project #5"/>
            <Project imgSrc="./img/photo-1430329429612-babb42f88673-1-1.jpg" textOverlay="Project #6"/>
            <Project imgSrc="./img/photo-1449057528837-7ca097b3520c-1-1.jpg" textOverlay="Project #7"/>
            <Project imgSrc="./img/photo-1449168013943-3a15804bb41c-1-1.jpg" textOverlay="Project #8"/>

            <Project imgSrc="./img/photo-1451186859696-371d9477be93-1-1.jpg" textOverlay="Project #9"/>
            <Project imgSrc="./img/photo-1448518184296-a22facb4446f-1-1.jpg" textOverlay="Project #10"/>
        </div>
    </div>
  )
}
