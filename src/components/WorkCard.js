import './WorkCardStyles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function WorkCard(props) {
  return (
    <div className='project-card'>
    <img src={props.imgSrc} alt='image'/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='project-details'>
        <p>{props.text}</p>
        <div className='pro-btn'>
            <NavLink to={props.view} className='btn'>VIEW</NavLink>
            <NavLink to='url.com' className='btn'>SOURCE</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
