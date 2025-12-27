
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Award, 
  Play, 
  Plus, 
  Zap, 
  Cpu, 
  Lock, 
  MonitorPlay, 
  BadgeCheck, 
  Globe, 
  Instagram, 
  Facebook, 
  Youtube,
  TrendingUp,
  Coins,
  Smartphone,
  Users,
  BookOpen,
  Calendar,
  X,
  ArrowDown
} from 'lucide-react';

// --- Constants ---
const LOGO_URL = "https://avancoprofissional.online/wp-content/uploads/2024/08/LOGO-Profissionalize-3-150x150.png";
const HOTMART_LINK = "https://pay.hotmart.com/L89949252N?off=dbjs7anu&checkoutMode=10&sck=direto&bid=1766724046531";

// --- Helper Functions ---
const scrollToCheckout = () => {
  // Disparar evento do Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout');
  }
  
  const element = document.getElementById('checkout-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Components ---

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#05080a]/95 backdrop-blur-xl z-50 border-b border-green-500/10 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="p-1.5 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <img 
              src={LOGO_URL} 
              alt="Logo Instituto Professionalize Maxxima" 
              className="h-10 md:h-16 w-auto object-contain hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-tech font-bold text-[8px] md:text-sm text-white tracking-widest leading-none uppercase">
              INSTITUTO PROFISSIONALIZE <span className="text-green-500 block mt-0.5">MAXXIMA</span>
            </span>
          </div>
        </div>
        
        <button 
          onClick={scrollToCheckout}
          className="bg-green-600 hover:bg-green-500 text-white font-black py-2 px-4 md:py-3 md:px-8 rounded-full text-[9px] md:text-xs transition-all active:scale-95 uppercase tracking-widest shadow-lg animate-neon-button"
        >
          GARANTIR VAGA
        </button>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 md:pt-48 md:pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full blur-[120px] md:blur-[180px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-green-800/10 rounded-full blur-[120px] md:blur-[180px]"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-green-500 text-black font-tech font-black px-4 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-sm uppercase tracking-widest mb-8 animate-neon shadow-[0_0_30px_rgba(34,197,94,0.6)] transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
          <Zap className="h-4 w-4 fill-black" />
          BOLSA DE ESTUDOS: DE <span className="line-through opacity-60">R$ 297,00</span> POR APENAS R$ 97,00
        </div>

        <h1 className="font-tech font-black leading-[1.1] uppercase tracking-tighter mb-6 md:mb-8">
          <span className="block text-green-500 text-xs md:text-xl lg:text-2xl mb-4 tracking-[0.3em] font-bold">
            CURSO PROFISSIONALIZANTE EAD + CERTIFICADO
          </span>
          <span className="block text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
            MANUTENÇÃO DE <span className="text-green-500">CELULARES</span>
          </span>
        </h1>
        
        <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-4">
          Domine o mercado mais lucrativo do país. Aprenda do <span className="text-white font-bold">zero ao avançado</span> com o método 100% online do Instituto Professionalize Maxxima.
        </p>
        
        <div className="max-w-4xl mx-auto mb-10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-2 border-green-500/20 bg-black aspect-video relative">
          {/* Utilizando youtube-nocookie para evitar restrições de privacidade e Erro 153 */}
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/rLnKNlCch9A?modestbranding=1&rel=0&showinfo=0"
            title="Vídeo de Apresentação"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
          <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-20 md:h-20 pointer-events-none z-10 opacity-60">
            <img src="https://curso-manutencaodecelular.online/wp-content/uploads/2024/10/INFORMATICA-COMPLETA-1.png" alt="Selo Qualidade" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureHighlights: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-black/50 border-y border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 items-center text-center">
          <div className="flex flex-col items-center gap-3 group">
            <Lock className="h-8 w-8 text-green-500/60 group-hover:text-green-500 transition-colors" />
            <span className="text-gray-400 font-tech text-[8px] md:text-xs uppercase tracking-widest font-bold">LIBERAÇÃO<br />IMEDIATA</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <MonitorPlay className="h-8 w-8 text-green-500/60 group-hover:text-green-500 transition-colors" />
            <span className="text-gray-400 font-tech text-[8px] md:text-xs uppercase tracking-widest font-bold">VÍDEO<br />AULAS + APOSTILA</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <BadgeCheck className="h-8 w-8 text-green-500/60 group-hover:text-green-500 transition-colors" />
            <span className="text-gray-400 font-tech text-[8px] md:text-xs uppercase tracking-widest font-bold">CERTIFICADO<br />AUTORIZADO MEC</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <Calendar className="h-8 w-8 text-green-500/60 group-hover:text-green-500 transition-colors" />
            <span className="text-gray-400 font-tech text-[8px] md:text-xs uppercase tracking-widest font-bold">1 ANO DE<br />ACESSO ILIMITADO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const MarketAnalysis: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#05080a] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-tech font-black text-2xl md:text-5xl text-white mb-6 uppercase tracking-tighter">
              POR QUE ESTE É O <span className="text-green-500">MELHOR MERCADO?</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-lg">
              Enquanto houver celulares, haverá dinheiro no seu bolso. O Brasil já possui mais smartphones do que habitantes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-green-500/30 transition-all group">
              <div className="w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-green-500 h-8 w-8" />
              </div>
              <h3 className="font-tech font-bold text-white mb-4 uppercase tracking-tighter">Demanda Infinita</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                São mais de <span className="text-white font-bold">240 milhões</span> de celulares ativos no Brasil. Todo dia milhares de telas quebram e precisam de você.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-green-500/30 transition-all group">
              <div className="w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coins className="text-green-500 h-8 w-8" />
              </div>
              <h3 className="font-tech font-bold text-white mb-4 uppercase tracking-tighter">Lucro Altíssimo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Um reparo simples de 20 minutos pode render de <span className="text-white font-bold">R$ 100 a R$ 400</span> de lucro líquido. <span className="text-white font-bold uppercase">VOCÊ RECUPERA O INVESTIMENTO DO CURSO NA PRIMEIRA MANUTENÇÃO.</span>
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-green-500/30 transition-all group">
              <div className="w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-green-500 h-8 w-8" />
              </div>
              <h3 className="font-tech font-bold text-white mb-4 uppercase tracking-tighter">Prática EAD</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aprenda com atividades práticas onde o <span className="text-white font-bold">professor orienta o passo a passo</span>, com exercícios propostos para aplicar o conhecimento na hora!
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-green-600/20 to-transparent border-l-4 border-green-500 p-8 rounded-r-2xl">
            <p className="text-white font-bold italic text-sm md:text-xl leading-relaxed">
              "Você não está apenas aprendendo a consertar telefones. Você está adquirindo a chave para a sua <span className="text-green-500 underline underline-offset-4">liberdade financeira</span> em uma profissão que não conhece a palavra desemprego."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoTestimonials: React.FC = () => {
  const videos = [
    { id: "h__uc7vO_Ns", title: "Caso Real de Aluno #1" },
    { id: "BOxHuCDnjiM", title: "Caso Real de Aluno #2" },
    { id: "umQuBt-0YeI", title: "Caso Real de Aluno #3" },
  ];

  return (
    <section className="py-20 md:py-24 bg-black/80 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <img src={LOGO_URL} alt="Instituto Logo" className="h-10 md:h-14 mx-auto mb-4 opacity-30 grayscale" />
          <h2 className="font-tech font-black text-3xl md:text-6xl text-white mb-6 uppercase tracking-tighter">
            HISTÓRIAS DE <span className="text-green-500">SUCESSO</span>
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-12"></div>
        </div>

        {/* --- CASOS REAIS AMPLIADO - PLAYER DIRETO --- */}
        <div className="max-w-6xl mx-auto mb-20 px-2 md:px-4">
          <div className="rounded-[2rem] md:rounded-[4rem] overflow-hidden border-2 border-green-500/40 bg-black shadow-[0_0_80px_rgba(34,197,94,0.3)] aspect-video relative">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/uX1is8qhHAQ?modestbranding=1&rel=0&showinfo=0"
              title="CASOS REAIS COMPILADO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-8">
             <h3 className="font-tech font-black text-2xl md:text-5xl text-white uppercase tracking-tighter">
                CASOS <span className="text-green-500">REAIS</span>
              </h3>
              <p className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mt-2">DEPOIMENTOS DE DIVERSOS ALUNOS NO PRESELL</p>
          </div>
        </div>
        
        {/* Grid de Depoimentos Individuais - PLAYER DIRETO */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {videos.map((video, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-black rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-video relative">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?modestbranding=1&rel=0&showinfo=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <span className="text-[10px] md:text-xs text-green-500 font-tech font-bold uppercase tracking-[0.2em]">{video.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProofSection: React.FC = () => {
  const proofImages = [
    { url: "https://curso-manutencaodecelular.online/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-22-at-10.03.40-1024x543.jpeg", label: "COMUNIDADE VIP" },
    { url: "https://curso-manutencaodecelular.online/wp-content/uploads/2024/10/IMG_4753-e1730310131562.png", label: "PRÁTICA TÉCNICA" },
    { url: "https://curso-manutencaodecelular.online/wp-content/uploads/2024/10/IMG_4787-e1740926812950.png", label: "LABORATÓRIO" },
    { url: "https://curso-manutencaodecelular.online/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-22-at-10.06.01.jpeg", label: "NOSSOS ALUNOS" },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#040608]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <img src={LOGO_URL} alt="Instituto Logo" className="h-10 md:h-14 mx-auto mb-6 opacity-40 grayscale" />
          <h2 className="font-tech font-black text-3xl md:text-7xl text-white mb-6 uppercase tracking-tighter leading-none">
            MÉTODO <span className="text-green-500">COMPROVADO</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] font-bold text-[8px] md:text-xs">RESULTADOS REAIS DE QUEM APLICOU O SISTEMA PROFISSIONALIZE MAXXIMA</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {proofImages.map((img, i) => (
            <div key={i} className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src={img.url} alt={img.label} className="w-full h-56 md:h-80 object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <h3 className="text-white font-tech font-bold text-sm md:text-xl uppercase tracking-tighter italic">{img.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BonusSection: React.FC = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-gradient-to-br from-[#0a0f12] to-black rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 border border-green-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-600 text-white font-black px-4 md:px-6 py-1.5 md:py-2 rounded-bl-3xl uppercase text-[8px] md:text-[9px] tracking-widest">
            BÔNUS EXCLUSIVOS
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <img src={LOGO_URL} alt="Logo" className="h-8 md:h-10 mb-4 md:mb-6 opacity-60" />
              <h2 className="font-tech font-black text-xl md:text-3xl mb-4 text-white uppercase tracking-tighter leading-tight">
                COMBO DE <span className="text-green-500">PRESENTE</span>
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-gray-300 font-bold text-sm md:text-base leading-relaxed">
                  Ganhe de presente nossa biblioteca exclusiva com <span className="text-white font-black">12 LIVROS</span> motivacionais e de gestão de alta performance.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 font-black text-base md:text-2xl line-through decoration-red-600 decoration-[2px]">VALOR REAL: R$ 250,00</span>
                  <span className="text-green-500 font-tech font-black text-2xl md:text-4xl">SAI POR: R$ 0,00</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 md:gap-3 text-green-500 font-tech font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] border border-green-500/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4" /> LIBERAÇÃO IMEDIATA
              </div>
            </div>
            
            <div className="flex justify-center group">
              <img 
                src="https://curso-manutencaodecelular.online/wp-content/uploads/2024/01/12-livros_reduzido.png" 
                alt="12 Livros Coloridos" 
                className="w-full max-w-[180px] md:max-w-[240px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificateSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <img src={LOGO_URL} alt="Instituto Logo" className="h-10 md:h-14 mx-auto mb-6 opacity-30 grayscale" />
        <h2 className="font-tech font-black text-xl md:text-4xl text-white mb-12 md:text-white uppercase tracking-widest">
          QUALIFICAÇÃO <span className="text-green-500">CERTIFICADA</span>
        </h2>
        
        <div className="max-w-md md:max-w-lg mx-auto relative group">
          <div className="absolute -inset-10 bg-green-500/10 rounded-full blur-[80px] md:blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src="https://curso-manutencaodecelular.online/wp-content/uploads/2024/01/Frente-5-1024x724.png" 
            alt="Certificado Oficial Colorido" 
            className="relative z-10 w-full h-auto rounded-xl md:rounded-3xl shadow-2xl border border-white/10 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-20 md:w-32 animate-pulse z-20">
            <img src="https://curso-manutencaodecelular.online/wp-content/uploads/2024/03/copy_of_mec.png" alt="Selo MEC" className="w-full h-auto" />
          </div>
        </div>
        <p className="mt-8 text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-sm">
          NOSSO CERTIFICADO É RECONHECIDO E POSSUI <span className="text-white">AUTORIZAÇÃO DO MEC</span> COM VALIDADE NACIONAL.
        </p>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft(prev => ({ ...prev, seconds: prev.seconds - 1 }));
      } else if (timeLeft.minutes > 0) {
        setTimeLeft(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 }));
      } else {
        setTimeLeft({ minutes: 15, seconds: 0 }); // Reset for infinite urgency
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <section id="pricing" className="py-20 md:py-24 relative bg-black">
      <div className="container mx-auto px-4 max-w-lg md:max-w-2xl">
        <div className="bg-[#0a0f12] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-green-500/30 text-center relative overflow-hidden shadow-2xl shadow-green-900/10">
          
          <div className="mb-8 md:mb-12">
            <p className="font-tech font-black text-sm md:text-xl text-green-500 uppercase tracking-tighter italic animate-pulse">
              A OPORTUNIDADE AO SEU ALCANCE,<br />A MUDANÇA AGORA ESTÁ COM VOCÊ!
            </p>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 mb-10 md:mb-12">
            <div className="text-center">
              <div className="font-tech text-3xl md:text-5xl font-black text-white italic">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1 md:mt-2">Minutos</div>
            </div>
            <div className="text-3xl md:text-4xl text-green-500 font-black">:</div>
            <div className="text-center">
              <div className="font-tech text-3xl md:text-5xl font-black text-white italic">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1 md:mt-2">Segundos</div>
            </div>
          </div>

          <h3 className="text-gray-500 font-tech font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-4">OFERTA DE MATRÍCULA</h3>
          <div className="flex flex-col items-center mb-10">
            <div className="text-white text-lg md:text-2xl font-black line-through decoration-red-600 decoration-[1px] mb-2 md:mb-4">DE R$ 297,00</div>
            <div className="font-tech text-5xl md:text-7xl font-black text-white tracking-tighter italic">R$ 97,00</div>
            <div className="text-[8px] md:text-[10px] text-green-500 font-bold uppercase tracking-widest mt-4">PAGAMENTO ÚNICO – SEM MENSALIDADE</div>
          </div>

          <button 
            onClick={scrollToCheckout}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-tech font-black text-[10px] md:text-lg py-5 md:py-6 rounded-2xl transition-all shadow-xl shadow-green-900/30 uppercase tracking-widest active:scale-95 animate-neon-button"
          >
            QUERO MINHA VAGA AGORA
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 font-bold text-[8px] md:text-[9px] uppercase tracking-widest">
            <ShieldCheck className="h-3 w-3" /> VAGAS LIMITADAS POR TURMA
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckoutSection: React.FC = () => {
  useEffect(() => {
    // Rastrear visualização da seção de checkout
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'ViewContent', {
              content_name: 'Checkout - Curso Manutenção de Celular',
              content_category: 'Checkout'
            });
            observer.disconnect(); // Dispara apenas uma vez
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('checkout-section');
    if (element) {
      observer.observe(element);
    }

    // Tentar rolar o iframe para a seção de pagamento após carregar
    const iframe = document.querySelector('#checkout-section iframe') as HTMLIFrameElement;
    if (iframe) {
      const handleLoad = () => {
        try {
          // Tentar acessar o conteúdo do iframe (pode falhar por CORS)
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            // Procurar por elementos relacionados ao formulário de pagamento
            const paymentSection = iframeDoc.querySelector('[class*="payment"], [class*="checkout"], form');
            if (paymentSection) {
              paymentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        } catch (e) {
          // CORS pode bloquear o acesso, então usamos o transform CSS
          console.log('Não foi possível acessar o conteúdo do iframe devido a políticas de segurança');
        }
      };
      
      iframe.addEventListener('load', handleLoad);
      return () => {
        if (element) {
          observer.unobserve(element);
        }
        iframe.removeEventListener('load', handleLoad);
      };
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="checkout-section" className="py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-green-500 animate-bounce" />
          <h2 className="font-tech font-black text-xl md:text-3xl text-white uppercase tracking-widest">
            PAGAMENTO SEGURO <span className="text-green-500">VIA HOTMART</span>
          </h2>
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-green-500 animate-bounce" />
        </div>
        <div className="max-w-4xl mx-auto rounded-2xl md:rounded-[3rem] border border-white/5 overflow-hidden bg-[#0a0f12] shadow-2xl relative" style={{ height: '900px', overflow: 'hidden' }}>
          <div 
            className="absolute inset-0"
            style={{ 
              overflow: 'hidden',
              height: '900px'
            }}
          >
            <iframe 
              src={HOTMART_LINK} 
              className="w-full border-0"
              style={{ 
                height: '1400px',
                width: '100%',
                transform: 'translateY(-200px)',
                pointerEvents: 'auto',
                border: 'none',
                display: 'block'
              }}
              title="Checkout Hotmart"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const questions = [
    { 
      q: "COMO SÃO OS CURSOS E AS AULAS?", 
      a: "Nossos cursos são profissionalizantes na modalidade EAD, 100% on-line com vídeo aulas dinâmicas, apostila completa e certificado válido em todo Brasil. Os certificados são liberados após a conclusão curso." 
    },
    { 
      q: "COMO RECEBO O MEU MATERIAL E ACESSO?", 
      a: "Você recebe por e-mail um login e senha exclusivos para acessar nossa plataforma pelo celular ou computador. Você tem acesso imediato às vídeo aulas e apostila. Após a conclusão do curso é disponibilizado o seu certificado." 
    },
    { 
      q: "QUAL O TEMPO DE ACESSO AO CURSO?", 
      a: "Você terá 1 ano de acesso ilimitado para estudar a hora que quiser e quantas vezes quiser dentro desse período." 
    },
    { 
      q: "O CERTIFICADO É RECONHECIDO?", 
      a: "Sim! Nosso certificado é reconhecido como curso complementar/profissionalizante e temos a autorização do MEC para veicular este curso. Ele tem validade em todo o território nacional e permite atuar profissionalmente na área." 
    },
    { 
      q: "O CURSO POSSUI ATIVIDADES PRÁTICAS?", 
      a: "SIM! Todos os nossos cursos possuem atividades práticas, onde o professor orienta passo a passo como você deve praticar, além de propor exercícios para aplicar o que foi aprendido." 
    },
    { 
      q: "QUAIS SÃO AS FORMAS DE PAGAMENTO?", 
      a: "O investimento pode ser pago em cartão de crédito ou PIX diretamente no checkout seguro." 
    },
    { 
      q: "PRECISO COMPRAR FERRAMENTAS CARAS AGORA?", 
      a: "Não. Durante as aulas, orientamos sobre as ferramentas básicas necessárias para começar de forma econômica, permitindo que você evolua conforme seus primeiros lucros." 
    },
    { 
      q: "E SE EU NÃO GOSTAR DO CURSO?", 
      a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo o curso não atender suas expectativas, devolvemos 100% do seu investimento sem burocracia." 
    }
  ];

  return (
    <section className="py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-tech font-black text-xl text-center mb-12 md:mb-16 text-white uppercase tracking-[0.3em]">SUPORTE & DÚVIDAS</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl md:rounded-2xl overflow-hidden border border-white/5 transition-all hover:border-green-500/20">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 md:p-6 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-[10px] md:text-sm text-gray-300 group-hover:text-green-500 transition-colors uppercase tracking-widest">{item.q}</span>
                <Plus className={`h-4 w-4 text-green-500 transition-transform ${openIndex === i ? 'rotate-45' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-400 text-[10px] md:text-sm leading-relaxed italic border-t border-white/5 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-[0_0_80px_rgba(34,197,94,0.5)] relative z-20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-tech font-black text-sm md:text-2xl text-black mb-6 uppercase tracking-[0.3em] leading-tight">
          SIGA A PROFISSIONALIZE MAXXIMA <br className="hidden md:block" /> NAS REDES SOCIAIS
        </h3>
        <div className="flex justify-center items-center gap-10 md:gap-20 flex-wrap">
          <a href="https://www.instagram.com/inst.profissionalizemaxxima/" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black transition-all hover:scale-125 animate-bounce-subtle">
            <Instagram className="h-12 w-12 md:h-20 md:w-20 stroke-[2.5]" />
          </a>
          <a href="https://www.facebook.com/institutomaxxima/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black transition-all hover:scale-125 animate-bounce-subtle delay-100">
            <Facebook className="h-12 w-12 md:h-20 md:w-20 stroke-[2.5]" />
          </a>
          <div className="flex items-center gap-4 md:gap-10">
            <a href="https://www.youtube.com/@profissionalizemaxxima" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black transition-all hover:scale-125 animate-bounce-subtle delay-200">
              <Youtube className="h-12 w-12 md:h-20 md:w-20 stroke-[2.5]" />
            </a>
            <div className="animate-bounce-subtle delay-300">
              <img 
                src={LOGO_URL} 
                alt="Instituto Logo" 
                className="h-12 md:h-20 w-auto object-contain drop-shadow-lg grayscale brightness-0 hover:grayscale-0 hover:brightness-100 transition-all duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-20 bg-black text-center border-t border-white/5">
      <div className="container mx-auto px-4">
        <p className="text-[9px] md:text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em] max-w-4xl mx-auto leading-loose px-4">
          Copyright 2025 – INSTITUTO PROFISSIONALIZE MÁXXIMA ® CNPJ 43.774.046/0001-70 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

const FloatingCTAButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInCheckout, setIsInCheckout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const shouldShow = scrollPos > 400;
      setIsVisible(shouldShow);

      // Verificar se está na seção de checkout
      const checkoutSection = document.getElementById('checkout-section');
      if (checkoutSection) {
        const checkoutTop = checkoutSection.offsetTop;
        const checkoutBottom = checkoutTop + checkoutSection.offsetHeight;
        const viewportTop = scrollPos;
        const viewportBottom = scrollPos + window.innerHeight;
        
        // Ocultar se a viewport estiver sobrepondo a seção de checkout
        // Considerando que o botão está no bottom da tela
        const buttonBottom = viewportBottom - 24; // 24px é o bottom-6 (1.5rem)
        const isOverCheckout = buttonBottom >= checkoutTop && viewportTop <= checkoutBottom;
        setIsInCheckout(isOverCheckout);
      }
    };

    // Verificação inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Não mostrar se não estiver visível ou se estiver na seção de checkout
  if (!isVisible || isInCheckout) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[90%] md:max-w-md pointer-events-none transition-all duration-500 animate-in fade-in slide-in-from-bottom-10">
      <button 
        onClick={scrollToCheckout}
        className="w-full pointer-events-auto bg-green-600 hover:bg-green-500 text-white py-4 md:py-5 rounded-2xl font-tech font-black text-[10px] md:text-sm uppercase tracking-widest transition-all active:scale-95 relative group overflow-hidden animate-neon-button"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <span className="flex items-center justify-center gap-3 relative z-10">
          <Zap className="h-4 w-4 fill-white animate-pulse" />
          GARANTIR MINHA VAGA AGORA
        </span>
      </button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      <style>
        {`
          @keyframes neon-glow-button {
            0%, 100% { 
              box-shadow: 0 0 10px rgba(34, 197, 94, 0.4), 0 0 20px rgba(34, 197, 94, 0.2); 
              filter: brightness(100%);
            }
            50% { 
              box-shadow: 0 0 25px rgba(34, 197, 94, 0.8), 0 0 50px rgba(34, 197, 94, 0.4); 
              filter: brightness(130%);
            }
          }
          @keyframes neon-glow-play {
            0%, 100% { 
              box-shadow: 0 0 15px rgba(34, 197, 94, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 40px rgba(34, 197, 94, 1), inset 0 0 15px rgba(255, 255, 255, 0.5);
              transform: scale(1.1);
            }
          }
          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-neon-button {
            animation: neon-glow-button 1.5s infinite ease-in-out;
          }
          .animate-neon-play-button {
            animation: neon-glow-play 2s infinite ease-in-out;
          }
          .animate-bounce-subtle {
            animation: bounce-subtle 3s infinite ease-in-out;
          }
          .scale-in-center {
            animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          }
          @keyframes scale-in-center {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
      <Header />
      <Hero />
      <FeatureHighlights />
      <MarketAnalysis />
      <VideoTestimonials />
      <SocialProofSection />
      <BonusSection />
      <CertificateSection />
      <Pricing />
      <CheckoutSection />
      <FAQ />
      <SocialLinks />
      <Footer />
      <FloatingCTAButton />
    </div>
  );
}
