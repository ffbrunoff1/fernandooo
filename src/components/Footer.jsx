import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Phone, Mail, Map, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Contato', href: '/contato' }
  ]

  const services = [
    { name: 'Direito Civil', href: '/servicos' },
    { name: 'Direito Empresarial', href: '/servicos' },
    { name: 'Direito Trabalhista', href: '/servicos' },
    { name: 'Direito Penal', href: '/servicos' },
    { name: 'Direito de Família', href: '/servicos' },
    { name: 'Direito Tributário', href: '/servicos' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 99999-9999' },
    { icon: Mail, text: 'contato@fernandooo.adv.br' },
    { icon: Map, text: 'São Paulo - SP' }
  ]

  return (
    <footer className="bg-primary-800 text-white pb-20">
      <div className="container mx-auto container-padding">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white rounded-lg">
                  <Scale className="h-8 w-8 text-primary-600" />
                </div>
                <span className="text-2xl font-bold">Fernandooo</span>
              </div>
              <p className="text-primary-100 leading-relaxed mb-6">
                Advocacia especializada com mais de 15 anos de experiência, 
                oferecendo soluções jurídicas personalizadas e eficazes.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center hover:bg-white hover:text-primary-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Navegação</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-primary-100 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Serviços</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-primary-100 hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="h-5 w-5 text-primary-300" />
                      <span className="text-primary-100">{contact.text}</span>
                    </div>
                  )
                })}
              </div>
              
              <div className="mt-6 p-4 bg-primary-700 rounded-lg">
                <h4 className="font-semibold mb-2">Consulta Gratuita</h4>
                <p className="text-primary-100 text-sm">
                  Agende uma consulta gratuita e descubra como podemos ajudá-lo.
                </p>
                <Link to="/contato">
                  <motion.button
                    className="mt-3 w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Agendar Agora
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t border-primary-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-100 text-sm">
              © {currentYear} Advocacia Fernandooo. Todos os direitos reservados.
            </p>
            <p className="text-primary-100 text-sm">
              Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Papum</a></em>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}