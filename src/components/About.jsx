import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Shield, Award, Users } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "500+", label: "Casos Resolvidos" },
    { number: "98%", label: "Taxa de Sucesso" },
    { number: "24/7", label: "Atendimento" }
  ]

  const values = [
    {
      icon: Scale,
      title: "Justiça",
      description: "Buscamos sempre a justiça e a aplicação correta da lei em todos os casos que atendemos."
    },
    {
      icon: Shield,
      title: "Proteção",
      description: "Protegemos os direitos dos nossos clientes com dedicação e estratégias eficazes."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Mantemos os mais altos padrões de qualidade em todos os serviços prestados."
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Nosso compromisso é com o sucesso e satisfação de cada cliente que atendemos."
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-primary-800 mb-6">
            Sobre a <span className="text-gradient">Fernandooo Advocacia</span>
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Com mais de 15 anos de experiência no mercado jurídico, nossa advocacia 
            se destaca pela excelência no atendimento e pelos resultados alcançados. 
            Oferecemos soluções jurídicas completas e personalizadas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="heading-3 text-primary-800 mb-4">Nossa História</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Advocacia Fernandooo nasceu da paixão pela justiça e pelo desejo de fazer 
                a diferença na vida das pessoas. Desde nossa fundação, temos construído uma 
                reputação sólida baseada na confiança, competência e dedicação.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe é formada por profissionais altamente qualificados, especializados 
                em diversas áreas do direito, sempre prontos para enfrentar os desafios jurídicos 
                mais complexos com estratégias inovadoras e eficazes.
              </p>
            </div>

            <div>
              <h3 className="heading-3 text-primary-800 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar serviços jurídicos de excelência, defendendo os direitos e interesses 
                dos nossos clientes com ética, transparência e compromisso, contribuindo para uma 
                sociedade mais justa e equilibrada.
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
              <h3 className="heading-3 mb-6">Nossos Números</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-primary-100 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="heading-3 text-primary-800 mb-4">Nossos Valores</h3>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Os valores que norteiam nosso trabalho e definem nossa identidade como escritório de advocacia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="text-center space-y-4 card-hover bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary-800">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}