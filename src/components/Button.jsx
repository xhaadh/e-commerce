import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ type, title, icon, to }) => {
  return (
    <Link to="/login"
    className={`flexCenter gap-3 rounded-full border bg-orange-600 px-12 py-4 text-white transition-all hover:bg-white hover:text-orange-600 hover:border-orange-600 border-orange-600`}
      type={type}
    >
        {icon && <img src={icon} alt={title} width={24} height={24} className=''/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </Link>
  )
}

export default Button

