import React from 'react'
import FooterLinks from './FooterLinks';

const Footer = () => {
    const serviceLinks = [
  { name: "Web Development", href: "#" },
  { name: "Software Solutions", href: "#" },
  { name: "Digital Marketing", href: "#" },
  { name: "Cloud Services", href: "#" },
];

const supportLinks = [
  { name: "Contact Us", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];


  return (
    <div className = "flex mt-20 border-t py-10 border-neutral-700">
        <FooterLinks name = "Services" links = {serviceLinks}/>
        <FooterLinks name = "Support" links = {supportLinks}/>
    </div>
  )
}

export default Footer