import React, { useState } from 'react'
import { FaBars, FaHome, FaListAlt, FaQuoteLeft, FaTimes, FaUtensils } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: <FaHome />, text: "Home", to: "home" },
    { icon: <FaUtensils />, text: "Services", to: "service" },
    { icon: <FaListAlt />, text: "Menu", to: "menu" },
    { icon: <FaQuoteLeft />, text: "Reviews", to: "reviews" },
  ]

  return (
    <nav className='fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg rounded-full px-3 lg:px-8 py-2 md:py-3 w-[95%] md:w-[90%] max-w-7xl flex items-center justify-between backdrop-blur-md border border-white/20 z-50'>

      {/* LOGO */}
      <div className='flex items-center space-x-2'>
        <div className='p-2 bg-white/20 rounded-full'>
          <FaUtensils className='text-xl text-white animate-pulse' />
        </div>
        <h1 className='text-xl lg:text-2xl font-bold text-black'>
          Foodie's <span className='text-orange-800 ml-2'>Hub</span>
        </h1>
      </div>

      {/* DESKTOP MENU */}
      <div className='hidden md:flex space-x-6'>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={600}
            className='flex items-center space-x-2 text-black hover:text-orange-600 transition cursor-pointer'
          >
            <span className='text-lg'>{item.icon}</span>
            <span className='font-semibold'>{item.text}</span>
          </Link>
        ))}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden p-2 text-white'
      >
        {isOpen ? <FaTimes className='text-xl' /> : <FaBars className='text-xl' />}
      </button>

      {/* MOBILE MENU */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-red-500 to-orange-600 rounded-2xl shadow-xl mt-3 mx-4 transition-all duration-300
        ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}>

        <div className='p-4 space-y-4'>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={600}
              onClick={() => setIsOpen(false)}
              className='flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-xl'
            >
              <span className='text-xl'>{item.icon}</span>
              <span className='text-lg'>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navbar
