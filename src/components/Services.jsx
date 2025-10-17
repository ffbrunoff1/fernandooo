import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Shield, Briefcase, Users, Gavel, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direitos reais e obrigações. Assessoria completa em questões civis.",
      features: ["Contratos e Negócios Jurídicos", "Responsabilidade Civil", "Direito das Sucessões", "Direito de Família"]
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Constituição de empresas, contratos comerciais e consultoria empresarial estratégica.",
      features: ["Constituição de Empresas", "Contratos Comerciais", "Consultoria Empresarial", "Fusões e Aquisições"]
    },
    {
      icon: Shield,
      title: "Direito Trabalhista",
      description: "Defesa em ações trabalhistas, consultoria preventiva e assessoria em relações de trabalho.",
      features: ["Ações Trabalhistas", "Consultoria Preventiva", "Relações Sindicais", "Compliance Trabalhista"]
    },
    {
      icon: Gavel,
      title: "Direito Penal",
      description: "Defesa criminal, habeas corpus e acompanhamento em inquéritos policiais.",
      features: ["Defesa Criminal", "Habeas Corpus", "Inquéritos Policiais", "Recursos Criminais"]
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Divórcio, guarda de filhos, pensão alimentícia e inventários com sensibilidade e expertise.",
      features: ["Divórcio e Separação", "Guarda de Filhos", "Pensão Alimentícia", "Inventários"]
    },
    {
      icon: Award,
      title: "Direito Tributário",
      description: "Planejamento tributário, defesa em autuações fiscais e consultoria em tributos.",
      features: ["Planejamento Tributário", "Defesas Fiscais", "Consultoria Tributária", "Recuperação de Tributos"]
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-primary-800 mb-6">
            Nossos <span className="text-gradient">Serviços Jurídicos</span>
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços jurídicos especializados, 
            com foco na excelência e resultados efetivos para nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg p-8 card-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link to="/contato">
                    <motion.button
                      className="w-full btn-primary text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Consultar Especialista
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="heading-3 text-primary-800 mb-4">Precisa de Ajuda Jurídica?</h3>
            <p className="body-large text-gray-600 mb-6">
              Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica. 
              Agende uma consulta gratuita e descubra como podemos ajudá-lo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar Consulta Gratuita
                </motion.button>
              </Link>
              <Link to="/servicos">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Todos os Serviços
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}