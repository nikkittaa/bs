import React from 'react'

const Buttons = () => {
  return (
     <div className = {"lg:flex justify-center space-x-12 items-center"}>
        <a href = '#' className = "p-3 border rounded-md"> Log In</a>
        <a href = "#" className = "p-3  rounded-md bg-gradient-to-r from-purple-500 to-purple-800">Get Started For Free</a>
    </div>
  )
}

export default Buttons