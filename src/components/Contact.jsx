import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, Map, Clock, Send } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        "recipientEmail": "",
        "token": token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }

    recaptchaRef.current.reset()
    setTimeout(() => setStatus({ message: '', isError: false }), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      description: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@fernandooo.adv.br",
      description: "Resposta em até 24h"
    },
    {
      icon: Map,
      title: "Endereço",
      info: "São Paulo - SP",
      description: "Atendimento presencial e online"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "08:00 - 18:00",
      description: "Emergências 24h"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-primary-800 mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo. Entre em contato conosco e agende uma consulta 
            para discutir seu caso com nossos especialistas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="heading-3 text-primary-800 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <motion.div
                      key={contact.title}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-800">{contact.title}</h4>
                        <p className="text-primary-600 font-medium">{contact.info}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              className="bg-primary-50 rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-primary-800 mb-3">Consulta Gratuita</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Oferecemos uma primeira consulta gratuita para avaliar seu caso e 
                apresentar as melhores estratégias jurídicas. Agende já a sua!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h3 className="heading-3 text-primary-800 mb-6">Envie sua Mensagem</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Qual o assunto da sua consulta?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Descreva detalhadamente sua situação jurídica..."
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  className={`p-4 rounded-lg ${status.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </motion.button>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}