import React from "react"
import { Link } from "react-router-dom"
import Logo from "../public/logo.jpg"

const TopBar = () => {
  return (
    <div className="bg-white shadow-lg">
      <Link to="/">
        <div className="px-6 py-4 flex items-center justify-center gap-4 group">

          {/* Logo */}
          <img
            src={Logo}
            alt="Indu Sri Lanka Travel"
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          {/* Brand Text */}
          <div className="flex flex-col leading-tight text-center sm:text-left">
            <span
              className="
                text-xl md:text-2xl font-extrabold
                bg-gradient-to-r from-[#0B1C2D] via-[#0E7490] to-[#F4B41A]
                bg-clip-text text-transparent
                tracking-wide
              "
            >
              Indu Sri Lanka
            </span>

            <span className="text-xs md:text-sm font-medium text-gray-600 tracking-wider">
              Travel Organization
            </span>
          </div>

        </div>
      </Link>
    </div>
  )
}

export default TopBar
