import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox =({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Giorgio</span> 👋🏻
      <br />
      A Software Developer from Thessaloniki, Greece!
      </h1>
  ),
  2: (
    <InfoBox 
      text="Still studying but been working for many years and picked
      up many skills along the way!"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox 
     text="Been working on many projects right now! Curious about what I do?"
     link="/projects"
     btnText="Visit my portfolio"
  />
  ),
  4: (
    <InfoBox 
     text="Need a project done or looking for a dev? I'm just a few
     keystrokes away!"
     link="/contact"
     btnText="Let's talk"
  />
  )
}



const HomeInfo = ({currentStage}) => {
  return renderContent [currentStage] || null;
}

export default HomeInfo