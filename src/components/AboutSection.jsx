import { Heart, CheckCircle, Target, Zap, Bot, User } from 'lucide-react';
import { StatCard, EmojiCard } from './ui/brutalist-card';

const AboutSection = () => {
  const stats = [
    {
      icon: <Target className="w-8 h-8 text-[var(--primary)]" />,
      number: "2+",
      label: "Projetos Principais"
    },
    {
      icon: <Zap className="w-8 h-8 text-[var(--primary)]" />,
      number: "2+",
      label: "Anos de Experiência"
    },
    {
      icon: <Heart className="w-8 h-8 text-[var(--primary)]" />,
      number: "19",
      label: "Anos de Idade"
    },
    {
      icon: <Bot className="w-8 h-8 text-[var(--primary)]" />,
      number: "1",
      label: "Empresa Atual"
    }
  ];

  const highlights = [
    {
      icon: "🐍",
      text: "Especializado em Python, Django e desenvolvimento de APIs"
    },
    {
      icon: "⚡",
      text: "Experiência com automações de processos e tratamento de dados"
    },
    {
      icon: "🚀",
      text: "Desenvolvedor Junior na Fourmaq - Soluções em Agronegócio"
    },
    {
      icon: "🎓",
      text: "Estudante de Engenharia de Software na Universidade Católica do Tocantins"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-24 h-24 bg-[var(--primary)] rounded-full border-4 border-black top-20 left-10 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[var(--accent)] rounded-full border-4 border-black bottom-20 right-20 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000]">
              <Heart className="w-5 h-5 text-[var(--primary)]" />
              Sobre Mim
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou um desenvolvedor Backend dedicado com 19 anos, natural de Goiânia. 
              Concluí o ensino médio no Instituto Federal do Tocantins e atualmente curso 
              Engenharia de Software pela Universidade Católica do Tocantins. Especializo-me 
              em Python e Django, focando na criação de APIs e automações de processos.
            </p>
            
            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)] border-4 border-black rounded-full flex items-center justify-center text-xl">
                    {highlight.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Stats and emoji */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <EmojiCard emoji="👨‍💻" />
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-black mb-2">Vamos Construir Juntos</h3>
              <div className="w-16 h-1 bg-[var(--primary)] mx-auto"></div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  number={stat.number}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

