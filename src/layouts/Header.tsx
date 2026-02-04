import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Menu,
  X,
  ChevronDown,
  Bell,
  Globe,
} from "lucide-react"
import TopBar from "./TopBar"
import { useTranslation } from "react-i18next"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navigate = useNavigate()

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang)
    window.location.reload()
  }

  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-[#0B1C2D] shadow-md">
      {/* Top Bar */}
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#F4B41A] font-medium">
              {t("navbar.desc1")}
            </Link>

            {/* Tours Dropdown */}
            <Link to="/tours" className="text-white hover:text-[#F4B41A] font-medium">
              {t("navbar.desc2")}
            </Link>

            <Link to="/visa" className="text-white hover:text-[#F4B41A] font-medium">{t("navbar.desc3")}</Link>
            <Link to="/offers" className="text-white hover:text-[#F4B41A] font-medium">{t("navbar.desc4")}</Link>
            <Link to="/about" className="text-white hover:text-[#F4B41A] font-medium">{t("navbar.desc5")}</Link>
            <Link to="/gallery" className="text-white hover:text-[#F4B41A] font-medium">{t("navbar.desc6")}</Link>
            <Link to="/contact" className="text-white hover:text-[#F4B41A] font-medium">{t("navbar.desc7")}</Link>
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-white hover:text-[#F4B41A]"
              >
                <Globe className="h-4 w-4" />
                English
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("si")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    සිංහල
                  </button>
                  <button
                    onClick={() => handleLanguageChange("ta")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    தமிழ்
                  </button>
                </div>
              )}
            </div>

            {/* Notification Icon */}
            <button
              onClick={() => navigate("/notifications")}
              className="text-white hover:text-[#F4B41A]"
            >
              <Bell className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-end justify-end gap-4 lg:hidden">

            {/* Mobile Language */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-white font-semibold"
              >
                EN
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange("si")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    සිං
                  </button>
                  <button
                    onClick={() => handleLanguageChange("ta")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    த
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Notification */}
            <button
              onClick={() => navigate("/notifications")}
              className="text-white"
            >
              <Bell className="h-5 w-5" />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0B1C2D] border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-white hover:text-[#F4B41A]">Home</Link>
            <Link to="/tours" className="block text-white hover:text-[#F4B41A]">Tours</Link>
            <Link to="/visa" className="block text-white hover:text-[#F4B41A]">Visa</Link>
            <Link to="/offers" className="block text-white hover:text-[#F4B41A]">Offers</Link>
            <Link to="/about" className="block text-white hover:text-[#F4B41A]">About</Link>
            <Link to="/gallery" className="block text-white hover:text-[#F4B41A]">Gallery</Link>
            <Link to="/contact" className="block text-white hover:text-[#F4B41A]">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
