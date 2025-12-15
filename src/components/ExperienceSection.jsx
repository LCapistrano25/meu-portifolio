import { Briefcase, ExternalLink } from 'lucide-react';
import { ExperienceCard } from './ui/brutalist-card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Freelancer',
      company: 'Atuando independentemente',
      period: 'Out 2025 - Atual',
      location: 'Tocantins, Brasil',
      description: 'Desenvolvimento de soluções backend em Python, Django e Playwright.',
      achievements: [
        'Atuando em projetos independentes',
        'Criou plataforma de Georeferenciamento'
      ],
      color: 'bg-[var(--primary)]'
    },
    {
      title: 'Desenvolvedor Junior',
      company: 'Fourmaq - Soluções em Agronegócio',
      period: 'Mai 2024 – Out 2025',
      location: 'Tocantins, Brasil',
      description: 'Desenvolvimento de soluções backend em Python e Django, criação de APIs REST e automações de processos para o setor do agronegócio.',
      achievements: [
        'Desenvolveu sistema de reservas',
        'Criou automações de processos',
        'Implementou APIs REST'
      ],
      color: 'bg-[var(--primary)]'
    },
    {
      title: 'Jovem Aprendiz',
      company: 'Fourmaq - Soluções em Agronegócio',
      period: 'Abr 2023 – Mai 2024',
      location: 'Tocantins, Brasil',
      description: 'Primeira oportunidade profissional onde demonstrei potencial aplicando conhecimentos da faculdade em projetos reais da empresa.',
      achievements: [
        'Aplicou conhecimentos acadêmicos',
        'Desenvolveu primeiro projeto XPLS',
        'Demonstrou potencial técnico'
      ],
      color: 'bg-[var(--accent)]'
    },
    {
      title: 'Estudante de Engenharia de Software',
      company: 'Universidade Católica do Tocantins',
      period: 'Mar 2023 – Presente',
      location: 'Tocantins, Brasil',
      description: 'Graduação em Engenharia de Software, área de interesse em tecnologia com foco em desenvolvimento backend e soluções escaláveis.',
      achievements: [
        'Aprendizado contínuo',
        'Projetos acadêmicos',
        'Base teórica sólida'
      ],
      color: 'bg-[var(--primary)]'
    },
    {
      title: 'Técnico em Agronegócio',
      company: 'Instituto Federal do Tocantins',
      period: 'Fev 2020 – Dez 2022',
      location: 'Tocantins, Brasil',
      description: 'Formação técnica em agronegócio onde aprendi sobre empreendedorismo e inovação, base importante para trabalhar no setor.',
      achievements: [
        'Formação técnica completa',
        'Conhecimento em agronegócio',
        'Base em empreendedorismo'
      ],
      color: 'bg-[var(--accent)]'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-24 h-24 bg-[var(--accent)] rounded-full border-4 border-black top-10 left-10 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[var(--primary)] rounded-full border-4 border-black bottom-10 right-20 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <Briefcase className="w-5 h-5 text-[var(--primary)]" />
            Jornada Profissional
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Experiência</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Construindo o futuro, um projeto de cada vez
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-32 bg-gray-300 z-0"></div>
                )}
                
                <div className="flex gap-8 relative z-10">
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 ${exp.color} border-4 border-black rounded-full flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_#000000]`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Experience card */}
                  <ExperienceCard
                    className="flex-1"
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    location={exp.location}
                    description={exp.description}
                    achievements={exp.achievements}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="text-center mt-20">
          <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] max-w-2xl mx-auto p-8 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
            <h3 className="text-3xl font-black mb-4">Pronto para Trabalharmos Juntos?</h3>
            <p className="text-lg mb-6 opacity-90">
              Vamos criar algo incrível juntos. Estou sempre animado para aceitar novos desafios e construir soluções inovadoras.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5563999540585"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--primary)] px-8 py-4 rounded-2xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                Entre em Contato
              </a>
              <a 
                href="https://drive.google.com/file/d/1QYVdcpLXMDQ042Jdy1oG7I4RESEBIPy1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white px-8 py-4 rounded-2xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                Ver Currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

