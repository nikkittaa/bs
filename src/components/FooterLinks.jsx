import React from 'react'

const FooterLinks = ({name, links}) => {
  return (
    <div className = "grid grid-cols-2 gap-4">
            <div>
                <h3 className = "text-md font-semibold mb-4">{name}</h3>
                <ul classname = "my-2">
                    {links.map((item, index) => (
                        <li key = {index} className = "my-1">
                            <a className = "text-neutral-300 hover:text-white" href = {item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default FooterLinks