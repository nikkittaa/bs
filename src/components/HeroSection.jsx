import React from 'react'
import Buttons from './Buttons'
import video1 from "../assets/video1.mp4";


const HeroSection = () => {
  return (
    <div className = "flex flex-col items-center mt-6 lg:mt-20">
        <h1 className = "text-4xl sm-text-6xl lg:text-7xl text-center tracking-wide">
            Professional Business Solutions
            <span className = "bg-gradient-to-r from-pink-600 to-purple-800 text-transparent bg-clip-text"> for businesses </span>
        </h1>
        <p className = "mt-10 text-lg text-center text-neutral-400 max-w-4xl">
            Solving real business problems with technology and insight.
            We craft intelligent, data-driven solutions that boost efficiency, spark innovation, and drive measurable growth.
        </p>
        <div className = "mt-5">
            <Buttons/>
        </div>
        
        <div className = "flex mt-10 justify-center">
            <video autoPlay loop muted className = "rounded-lg w-full md:w-1/2 border-2 border-blue-600 shadow-lg shadow-blue-400 mx-2 my-4">
                <source src = {video1} type = "video/mp4"/>
                This browser does not support video tags!
            </video>
        </div>
    </div>
  )
}

export default HeroSection