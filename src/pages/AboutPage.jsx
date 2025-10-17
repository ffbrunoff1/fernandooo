import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Shield, Award, Users, Clock, Briefcase, Star } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Anos de Experiência", icon: Clock },
    { number: "500+", label: "Casos Resolvidos", icon: Briefcase },
    { number: "98%", label: "Taxa de Sucesso", icon: Star },
    { number: "24/7", label: "Atendimento", icon: Users }
  ]

  const values = [
    {
      icon: Scale,
      title: "Justiça",
      description: "Buscamos sempre a justiça e a aplicação correta da lei em todos os casos que atendemos, garantindo que nossos clientes tenham seus direitos preservados."
    },
    {
      icon: Shield,
      title: "Proteção",
      description: "Protegemos os direitos dos nossos clientes com dedicação e estratégias eficazes, oferecendo segurança jurídica em todas as situações."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Mantemos os mais altos padrões de qualidade em todos os serviços prestados, buscando sempre a perfeição em cada detalhe."
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Nosso compromisso é com o sucesso e satisfação de cada cliente que atendemos, estabelecendo relacionamentos duradouros baseados na confiança."
    }
  ]

  const milestones = [
    {
      year: "2008",
      title: "Fundação",
      description: "Inauguração da Advocacia Fernandooo com foco em atendimento personalizado"
    },
    {
      year: "2012",
      title: "Expansão",
      description: "Ampliação da equipe e diversificação das áreas de atuação"
    },
    {
      year: "2016",
      title: "Reconhecimento",
      description: "Consolidação como referência em advocacia especializada"
    },
    {
      year: "2020",
      title: "Inovação",
      description: "Implementação de tecnologias avançadas e atendimento digital"
    },
    {
      year: "2023",
      title: "Excelência",
      description: "Certificação em qualidade e expansão dos serviços oferecidos"
    }
  ]

  const differentials = [
    "Atendimento personalizado e humanizado",
    "Equipe altamente qualificada e especializada",
    "Tecnologia de ponta para maior eficiência",
    "Transparência total em processos e custos",
    "Acompanhamento em tempo real dos casos",
    "Consultoria preventiva para evitar problemas"
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 text-primary-800 mb-6">
              Sobre a <span className="text-gradient">Fernandooo Advocacia</span>
            </h1>
            <p className="body-large text-gray-600">
              Com mais de 15 anos de experiência no mercado jurídico, nossa advocacia 
              se destaca pela excelência no atendimento e pelos resultados alcançados. 
              Oferecemos soluções jurídicas completas e personalizadas para cada necessidade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="heading-3 text-primary-800 mb-6">Nossa História</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A Advocacia Fernandooo nasceu da paixão pela justiça e pelo desejo de fazer 
                  a diferença na vida das pessoas. Desde nossa fundação em 2008, temos construído 
                  uma reputação sólida baseada na confiança, competência e dedicação.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nossa trajetória é marcada por conquistas significativas e pelo reconhecimento 
                  da comunidade jurídica. Ao longo dos anos, expandimos nossa equipe e 
                  diversificamos nossas áreas de atuação, sempre mantendo o foco na qualidade 
                  e na satisfação dos nossos clientes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hoje, somos reconhecidos como uma das principais advocacias da região, 
                  com uma equipe altamente qualificada e especializada em múltiplas áreas 
                  do direito, sempre prontos para enfrentar os desafios jurídicos mais 
                  complexos com estratégias inovadoras e eficazes.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="heading-3 mb-8">Nossos Números</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary-200" />
                        <div className="text-3xl font-bold mb-2">{stat.number}</div>
                        <div className="text-primary-100 text-sm">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </div>
                
                <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
                  <h4 className="font-semibold mb-3">Nossos Diferenciais</h4>
                  <div className="space-y-2">
                    {differentials.slice(0, 3).map((differential, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-primary-100 text-sm">{differential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-800 mb-6">
              Nossos <span className="text-gradient">Valores</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Os valores que norteiam nosso trabalho e definem nossa identidade como escritório de advocacia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl shadow-lg p-8 text-center card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-800 mb-6">
              Nossa <span className="text-gradient">Trajetória</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Conheça os principais marcos da nossa história e evolução ao longo dos anos.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-800 text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              Pronto para <span className="text-white">Começar?</span>
            </h2>
            <p className="body-large text-primary-100 mb-8">
              Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica. 
              Entre em contato conosco hoje mesmo e descubra como podemos ajudá-lo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <motion.button
                  className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar Consulta Gratuita
                </motion.button>
              </Link>
              <Link to="/servicos">
                <motion.button
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conhecer Nossos Serviços
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}