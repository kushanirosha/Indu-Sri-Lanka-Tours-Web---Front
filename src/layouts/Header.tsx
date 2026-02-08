import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Menu,
  X,
  ChevronDown,
  Globe,
} from "lucide-react"
import TopBar from "./TopBar"
import { useTranslation } from "react-i18next"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const { t, i18n } = useTranslation()
  const location = useLocation()

  const currentPath = location.pathname

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
  }

  const languages = [
    { code: "en", label: "English", short: "English" },
    { code: "si", label: "සිංහල", short: "සිංහල" },
    { code: "ta", label: "தமிழ்", short: "தமிழ்" },
  ]

  const currentLang = languages.find(l => l.code === i18n.language)?.short || "EN"

  return (
    <header className="sticky top-0 z-50 bg-[#0B1C2D] shadow-md">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-5">

          {/* Desktop Navigation – unchanged */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc1")}
            </Link>

            <Link
              to="/tours"
              className={`font-medium transition-colors ${
                isActive("/tours") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc2")}
            </Link>

            <Link
              to="/visa"
              className={`font-medium transition-colors ${
                isActive("/visa") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc3")}
            </Link>

            <Link
              to="/offers"
              className={`font-medium transition-colors ${
                isActive("/offers") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc4")}
            </Link>

            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive("/about") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc5")}
            </Link>

            <Link
              to="/gallery"
              className={`font-medium transition-colors ${
                isActive("/gallery") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc6")}
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc7")}
            </Link>
          </nav>

          {/* Desktop Right Section – unchanged */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-white hover:text-[#F4B41A] transition-colors"
              >
                <Globe className="h-4 w-4" />
                {currentLang}
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-xl py-1 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                        i18n.language === lang.code ? "bg-gray-50 font-medium" : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ─── MOBILE ONLY – icons pinned to right edge ─── */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-5 z-20">
            {/* Mobile Language */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-white font-semibold tracking-wide min-w-[2.5rem] text-center"
              >
                {currentLang}
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-xl py-1 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                        i18n.language === lang.code ? "bg-gray-50 font-medium" : ""
                      }`}
                    >
                      {lang.short}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu – unchanged logic */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0B1C2D] border-t border-gray-700/70">
          <div className="px-5 py-6 space-y-5">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive("/") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc1")}
            </Link>

            <Link
              to="/tours"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive("/tours") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc2")}
            </Link>

            <Link
              to="/visa"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive("/visa") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc3")}
            </Link>

            <Link
              to="/offers"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive("/offers") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc4")}
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive("/about") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc5")}
            </Link>

            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive("/gallery") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc6")}
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive("/contact") ? "text-[#F4B41A]" : "text-white hover:text-[#F4B41A]"
              }`}
            >
              {t("navbar.desc7")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}