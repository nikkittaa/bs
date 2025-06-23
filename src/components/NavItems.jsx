import React from 'react'

const NavItems = ({mobile}) => {

  const items = [
    {name : "About Us", href: '#about' },
    {name: "Services", href: "#service"},
    {name: "Testimonials", href: "#testimonial"},
    {name: "Contact Us", href: "#contact"},
  ];

  let classesList = 'hidden lg:flex ml-14 space-x-12 text-lg';

  return (
    <ul className = {!mobile && classesList}>
        {items.map((item, index) => (
            <li key = {index} className = 'p-2'>
                <a href = {item.href}>{item.name}</a>
            </li>
        ))}
    </ul>
  )
}

export default NavItems;