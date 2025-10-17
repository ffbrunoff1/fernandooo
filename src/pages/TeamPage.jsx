import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Award, Scale, Star, Mail, Phone } from 'lucide-react'

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jose",
      role: "Advogado Sênior",
      specialties: ["Direito Civil", "Direito Empresarial"],
      description: "Profissional experiente com amplo conhecimento em diversas áreas do direito. Formação sólida e dedicação integral aos casos dos clientes.",
      experience: "10+ anos",
      education: "Doutor em Direito pela USP",
      achievements: [
        "Especialista em Direito Civil",
        "Membro da OAB/SP",
        "Autor de artigos jurídicos",
        "Palestrante em congressos"
      ]
    }
  ]

  const stats = [
    { number: "1", label: "Advogado Especializado", icon: Users },
    { number: "15+", label: "Anos de Experiência", icon: Award },
    { number: "500+", label: "Casos Atendidos", icon: Scale },
    { number: "98%", label: "Satisfação dos Clientes", icon: Star }
  ]

  const values = [
    {
      title: "Dedicação",
      description: "Comprometimento total com cada caso e cliente atendido."
    },
    {
      title: "Expertise",
      description: "Conhecimento especializado em múltiplas áreas do direito."
    },
    {
      title: "Ética",
      description: "Conduta profissional pautada pelos mais altos padrões éticos."
    },
    {
      title: "Resultados",
      description: "Foco em alcançar os melhores resultados para nossos clientes."
    }
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
              Nossa <span className="text-gradient">Equipe</span>
            </h1>
            <p className="body-large text-gray-600">
              Conheça o profissional que integra nossa advocacia. Experiência, 
              dedicação e expertise jurídica para oferecer as melhores soluções aos nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1 text-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <div className="w-40 h-40 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <h2 className="heading-3 text-primary-800 mb-2">{member.name}</h2>
                    <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">contato@fernandooo.adv.br</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">(11) 99999-9999</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-3">Sobre</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{member.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Experiência:</p>
                          <p className="text-primary-600">{member.experience}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Formação:</p>
                          <p className="text-primary-600">{member.education}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-3">Especialidades</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-3">Conquistas</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {member.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Link to="/contato">
                        <motion.button
                          className="btn-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Agendar Consulta
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
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
              Os princípios que norteiam nosso trabalho e definem nossa abordagem profissional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}