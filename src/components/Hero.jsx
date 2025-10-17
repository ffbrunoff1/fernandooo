import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Shield, Users } from 'lucide-react'

export default function Hero() {
  const features = [
    {
      icon: Scale,
      title: "Excelência Jurídica",
      description: "Mais de 15 anos de experiência em direito"
    },
    {
      icon: Shield,
      title: "Proteção Garantida",
      description: "Defesa completa dos seus direitos"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada caso recebe atenção individual"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="heading-1">
                <span className="text-gradient">Advocacia</span>{' '}
                <span className="text-primary-800">Fernandooo</span>
              </h1>
              
              <p className="body-large text-gray-600 max-w-2xl">
                Defendemos seus direitos com dedicação, experiência e resultados comprovados. 
                Nossa advocacia especializada oferece soluções jurídicas personalizadas 
                para cada necessidade do nosso cliente.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contato">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consulta Gratuita
                </motion.button>
              </Link>
              
              <Link to="/servicos">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nossos Serviços
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    className="text-center space-y-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-primary-800">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 space-y-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <h3 className="heading-3 text-primary-800 mb-4">Por que escolher nossa advocacia?</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Atendimento 24/7 para emergências jurídicas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Equipe especializada em múltiplas áreas do direito</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Transparência total nos processos e custos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Resultados comprovados em centenas de casos</p>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-6 text-center">
                  <p className="text-primary-800 font-semibold text-lg">Primeira Consulta Gratuita</p>
                  <p className="text-primary-600 text-sm mt-1">Análise completa do seu caso sem compromisso</p>
                </div>
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl transform rotate-3 opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}