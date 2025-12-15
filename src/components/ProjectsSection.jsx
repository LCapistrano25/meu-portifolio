import { Star } from 'lucide-react';
import { ProjectCard, SimpleProjectCard } from './ui/brutalist-card';

const ProjectsSection = () => {
  const projects = [
    {
      id: '01',
      title: 'XPLS',
      description: 'Sistema de automação para otimizar o processo de montagem de planilhas para plano de saúde. Extrai e organiza automaticamente dados de arquivos PDF, tornando o processo mais ágil e preciso.',
      technologies: ['Python', 'Pandas', 'NumPy', 'PDF Processing'],
      bgColor: 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]',
      textColor: 'text-white'
    },
    {
      id: '02',
      title: 'Fourmaq Connect',
      description: 'Solução inovadora para sistema de reservas de máquinas. Permite reservas pelo celular com gestão ágil e eficiente pela plataforma web, organizando todo o processo para o agronegócio.',
      technologies: ['Python', 'Django', 'Flutter Flow', 'Bubble', 'APIs REST'],
      bgColor: 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]',
      textColor: 'text-white'
    },
    {
      id: '03',
      title: 'Fourmaq Lanc',
      description: 'Solução responsável por automatizar e gerenciar o lançamento de notas fiscais. Facilita o gerencimaneto de notas fiscais emitidas por terceitos, otimizando o processo para o setor do agronegócio.',
      technologies: ['Django', 'Python', 'Playwright', 'APIs REST'],
      bgColor: 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]',
      textColor: 'text-white'
    },
    {
      id: '04',
      title: 'Automatização de Relatórios',
      description: 'Solução responsável por automatizar a geração de relatórios de projetos ambientais. Utiliza técnicas de substituição de variáveis para criar relatórios personalizados e eficientes.',
      technologies: ['Streamlit', 'Python', 'Docx', 'Pandas'],
      bgColor: 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]',
      textColor: 'text-white'
    }
  ];

  const additionalProjects = [
    {
      title: 'Automações de Processos',
      description: 'Desenvolvimento de scripts e automações para otimizar processos empresariais, reduzindo tempo e aumentando a eficiência operacional.',
      technologies: ['Python', 'Pandas', 'Automação']
    },
    {
      title: 'APIs REST',
      description: 'Criação de APIs robustas e escaláveis para comunicação entre aplicações, seguindo as melhores práticas de desenvolvimento backend.',
      technologies: ['Python', 'Django', 'REST Framework']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-32 h-32 bg-[var(--accent)] rounded-full border-4 border-black top-20 right-10 lg:z-auto -z-10"></div>
      <div className="absolute w-20 h-20 bg-[var(--primary)] rounded-full border-4 border-black bottom-20 left-10 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <Star className="w-5 h-5 text-yellow-500" />
            Projetos Principais
            <span className="text-xl">⚡</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Meus Projetos</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Soluções inovadoras criadas com paixão e precisão
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              bgColor={project.bgColor}
              textColor={project.textColor}
              projectId={project.id}
              onExternalClick={() => console.log('External link clicked')}
              onGithubClick={() => console.log('GitHub link clicked')}
            />
          ))}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-3xl font-black mb-8 text-center">
            <span className="gradient-text">Outros Trabalhos</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionalProjects.map((project, index) => (
              <SimpleProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

