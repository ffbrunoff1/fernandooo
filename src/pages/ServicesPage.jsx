import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Shield, Briefcase, Users, Gavel, Award, Phone, Check, Star } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Assessoria completa em questões civis, desde contratos até responsabilidade civil.",
      detailedDescription: "Nossa equipe especializada em Direito Civil oferece suporte abrangente em todas as questões relacionadas às relações entre particulares. Atuamos com expertise em contratos, direitos reais, obrigações e responsabilidade civil.",
      features: [
        "Elaboração e análise de contratos",
        "Ações de cobrança e execução",
        "Responsabilidade civil e danos",
        "Direito das sucessões e inventários",
        "Usucapião e ações possessórias",
        "Direito do consumidor"
      ],
      processSteps: [
        "Análise inicial do caso",
        "Estratégia jurídica personalizada",
        "Acompanhamento processual",
        "Resolução eficaz"
      ]
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas, desde a constituição até operações complexas.",
      detailedDescription: "Oferecemos assessoria jurídica completa para empresas de todos os portes, desde startups até grandes corporações. Nossa expertise abrange desde a constituição empresarial até operações societárias complexas.",
      features: [
        "Constituição de empresas",
        "Contratos comerciais e parcerias",
        "Fusões e aquisições",
        "Compliance empresarial",
        "Propriedade intelectual",
        "Recuperação judicial e falência"
      ],
      processSteps: [
        "Diagnóstico empresarial",
        "Planejamento estratégico",
        "Implementação das soluções",
        "Acompanhamento contínuo"
      ]
    },
    {
      icon: Shield,
      title: "Direito Trabalhista",
      description: "Defesa em ações trabalhistas e consultoria preventiva para empresas e empregados.",
      detailedDescription: "Atuamos tanto na defesa de empregadores quanto de empregados, oferecendo soluções eficazes em questões trabalhistas. Nossa abordagem preventiva ajuda a evitar conflitos e reduzir riscos.",
      features: [
        "Ações trabalhistas",
        "Consultoria preventiva",
        "Acordos e negociações",
        "Compliance trabalhista",
        "Relações sindicais",
        "Auditoria trabalhista"
      ],
      processSteps: [
        "Avaliação dos riscos",
        "Estratégia de defesa",
        "Negociação e mediação",
        "Acompanhamento judicial"
      ]
    },
    {
      icon: Gavel,
      title: "Direito Penal",
      description: "Defesa criminal especializada em todas as instâncias, com foco na proteção dos direitos.",
      detailedDescription: "Nossa equipe criminal atua com excelência na defesa de réus em processos penais, desde inquéritos policiais até recursos em tribunais superiores. Garantimos proteção integral dos direitos constitucionais.",
      features: [
        "Defesa em processos criminais",
        "Habeas corpus e mandados",
        "Acompanhamento de inquéritos",
        "Recursos em todas as instâncias",
        "Crimes empresariais",
        "Advocacia preventiva"
      ],
      processSteps: [
        "Análise das provas",
        "Estratégia de defesa",
        "Atuação processual",
        "Recursos cabíveis"
      ]
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Atuação sensível e especializada em questões familiares e sucessórias.",
      detailedDescription: "Tratamos questões familiares com sensibilidade e expertise jurídica, buscando sempre a melhor solução para todas as partes envolvidas, especialmente quando há crianças e adolescentes.",
      features: [
        "Divórcio e separação",
        "Guarda e visitação",
        "Pensão alimentícia",
        "Inventários e partilhas",
        "União estável",
        "Adoção e tutela"
      ],
      processSteps: [
        "Escuta e acolhimento",
        "Análise da situação familiar",
        "Busca por acordo",
        "Representação judicial"
      ]
    },
    {
      icon: Award,
      title: "Direito Tributário",
      description: "Planejamento tributário e defesa em questões fiscais para otimização da carga tributária.",
      detailedDescription: "Auxiliamos empresas e pessoas físicas na otimização da carga tributária através de planejamento estratégico e na defesa contra autuações fiscais indevidas.",
      features: [
        "Planejamento tributário",
        "Defesas administrativas",
        "Mandados de segurança",
        "Recuperação de tributos",
        "Parcelamentos fiscais",
        "Consultoria preventiva"
      ],
      processSteps: [
        "Diagnóstico tributário",
        "Planejamento estratégico",
        "Implementação das medidas",
        "Monitoramento contínuo"
      ]
    }
  ]

  const advantages = [
    "Equipe altamente especializada",
    "Atendimento personalizado",
    "Tecnologia de ponta",
    "Transparência total",
    "Resultados comprovados",
    "Ética profissional"
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
              Nossos <span className="text-gradient">Serviços Jurídicos</span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Oferecemos uma ampla gama de serviços jurídicos especializados, com foco na 
              excelência, inovação e resultados efetivos para nossos clientes.
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage}
                  className="flex items-center space-x-2 bg-white rounded-lg p-3 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Check className="h-4 w-4 text-primary-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary-600" />
                      </div>
                      <h2 className="heading-3 text-primary-800">{service.title}</h2>
                    </div>
                    
                    <p className="body-large text-gray-600">{service.description}</p>
                    <p className="text-gray-700 leading-relaxed">{service.detailedDescription}</p>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-4">Nossos Serviços Incluem:</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/contato">
                      <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Consultar Especialista
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`${isEven ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1 lg:row-start-1'}`}>
                    <motion.div
                      className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-6">Nosso Processo</h3>
                      <div className="space-y-4">
                        {service.processSteps.map((step, idx) => (
                          <div key={idx} className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-primary-100">{step}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Phone className="h-5 w-5" />
                          <span className="font-semibold">Consulta Gratuita</span>
                        </div>
                        <p className="text-primary-100 text-sm">
                          Agende uma consulta gratuita para discutir seu caso específico.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-800 mb-6">
              Pronto para <span className="text-gradient">Começar?</span>
            </h2>
            <p className="body-large text-gray-600 mb-8">
              Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica. 
              Entre em contato conosco hoje mesmo.
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
              <Link to="/sobre">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conhecer Nossa Equipe
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}