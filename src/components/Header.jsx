import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Contato', href: '/contato' }
  ]

  const LogoComponent = () => (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary-600' : 'bg-white shadow-md'}`}>
        <Scale className={`h-8 w-8 ${isScrolled ? 'text-white' : 'text-primary-600'}`} />
      </div>
      <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-primary-800'}`}>
        Fernandooo
      </span>
    </motion.div>
  )

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary-800 shadow-xl backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <LogoComponent />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.href
                    ? isScrolled 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-primary-600 border-b-2 border-primary-600'
                    : isScrolled
                      ? 'text-gray-200 hover:text-white'
                      : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contato">
              <motion.button
                className={`btn-primary ${
                  isScrolled 
                    ? 'bg-white text-primary-800 hover:bg-gray-100' 
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Conosco
              </motion.button>
            </Link>
          </div>

          <motion.button
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-white' : 'text-primary-600'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-6 py-3 font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-primary-600 bg-primary-50 border-r-4 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-6 pt-4">
                  <Link to="/contato">
                    <motion.button
                      className="w-full btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Fale Conosco
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}