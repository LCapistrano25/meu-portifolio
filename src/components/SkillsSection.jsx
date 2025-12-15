import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SkillCard, FeatureCard } from './ui/brutalist-card';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const tabs = [
    { id: 'backend', label: '🐍 Backend', emoji: '🐍' },
    { id: 'nocode', label: '🚀 No-Code', emoji: '🚀' },
    { id: 'data', label: '📊 Dados', emoji: '📊' },
    { id: 'tools', label: '🛠️ Ferramentas', emoji: '🛠️' }
  ];

  const goToPreviousTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const previousIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    setActiveTab(tabs[previousIndex].id);
  };

  const goToNextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(tabs[nextIndex].id);
  };

  const skills = {
    backend: [
      {
        icon: '🐍',
        name: 'Python',
        level: 'Avançado',
        levelColor: 'bg-[var(--primary)]',
        description: 'Automações e tratamento de dados',
        stars: 4
      },
      {
        icon: '🌐',
        name: 'Django',
        level: 'Avançado',
        levelColor: 'bg-[var(--primary)]',
        description: 'Framework para APIs e aplicações web',
        stars: 4
      },
      {
        icon: '📊',
        name: 'Pandas',
        level: 'Intermediário',
        levelColor: 'bg-[var(--accent)]',
        description: 'Análise e manipulação de dados',
        stars: 3
      },
      {
        icon: '🔢',
        name: 'NumPy',
        level: 'Intermediário',
        levelColor: 'bg-[var(--accent)]',
        description: 'Computação científica e arrays',
        stars: 3
      }
    ],
    nocode: [
      {
        icon: '📱',
        name: 'Flutter Flow',
        level: 'Intermediário',
        levelColor: 'bg-[var(--accent)]',
        description: 'Desenvolvimento mobile no-code',
        stars: 3
      },
      {
        icon: '💧',
        name: 'Bubble',
        level: 'Intermediário',
        levelColor: 'bg-[var(--accent)]',
        description: 'Aplicações web no-code',
        stars: 3
      }
    ],
    data: [
      {
        icon: '📄',
        name: 'PDF Processing',
        level: 'Avançado',
        levelColor: 'bg-[var(--primary)]',
        description: 'Extração e processamento de PDFs',
        stars: 4
      },
      {
        icon: '📊',
        name: 'Excel/Planilhas',
        level: 'Avançado',
        levelColor: 'bg-[var(--primary)]',
        description: 'Automação de planilhas',
        stars: 4
      }
    ],
    tools: [
      {
        icon: '🔧',
        name: 'Git',
        level: 'Intermediário',
        levelColor: 'bg-[var(--accent)]',
        description: 'Controle de versão',
        stars: 3
      },
      {
        icon: '🖥️',
        name: 'VS Code',
        level: 'Avançado',
        levelColor: 'bg-[var(--primary)]',
        description: 'Editor de código principal',
        stars: 4
      }
    ]
  };

  const features = [
    {
      icon: '🐍',
      title: 'Desenvolvimento Backend',
      description: 'Python, Django, APIs REST'
    },
    {
      icon: '⏰',
      title: 'Experiência Profissional',
      description: 'Desenvolvedor Junior na Fourmaq'
    },
    {
      icon: '💼',
      title: 'Projetos Impactantes',
      description: 'Automações e sistemas para agronegócio'
    },
    {
      icon: '🎓',
      title: 'Formação Acadêmica',
      description: 'Engenharia de Software em andamento'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-20 h-20 bg-[var(--accent)] rounded-full border-4 border-black top-10 left-20 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[var(--primary)] rounded-full border-4 border-black bottom-10 right-10 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 px-2 py-2">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <span className="text-2xl">🐍</span>
            TECNOLOGIAS
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="text-black">MINHAS </span>
            <span className="gradient-text">HABILIDADES</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Criando soluções eficientes e escaláveis
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 px-6 py-4">
          <div className="flex gap-1 sm:gap-2 bg-white border-4 border-black rounded-2xl p-1 sm:p-2 shadow-[6px_6px_0px_0px_#000000] max-w-full overflow-visible">
            <button 
              onClick={goToPreviousTab}
              className="border-4 border-black rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] p-2 sm:p-3 bg-white hover:bg-gray-50 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Previous tab"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0 px-2 py-2 -mx-2 -my-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all duration-200 flex-shrink-0 min-w-[80px] sm:min-w-auto text-sm sm:text-base min-h-[44px] flex items-center justify-center ${
                    activeTab === tab.id
                      ? 'bg-[var(--primary)] text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000]'
                      : 'bg-white text-gray-700 border-4 border-transparent hover:border-gray-300'
                  }`}
                >
                  <span className="sm:hidden text-lg">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
            <button 
              onClick={goToNextTab}
              className="border-4 border-black rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] p-2 sm:p-3 bg-white hover:bg-gray-50 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Next tab"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-2 py-2">
          {skills[activeTab]?.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              levelColor={skill.levelColor}
              description={skill.description}
              stars={skill.stars}
            />
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 py-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

