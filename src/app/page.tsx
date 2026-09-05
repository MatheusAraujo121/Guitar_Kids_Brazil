'use client';
import React from 'react';

// 100% dos ícones vindo de bibliotecas prontas (Lucide e React Icons)
import { 
  CheckCircle2, ChevronRight, MessageCircle, Clock, Headphones, BookOpen, MapPin, 
  Piano, Guitar, Mic2, Sparkles, ListMusic
} from 'lucide-react';

import { 
  GiGuitar, GiViolin, GiFlute, GiSaxophone 
} from 'react-icons/gi';

import { FaGuitar } from 'react-icons/fa';

// ================= WRAPPERS DOS ÍCONES PARA AJUSTES VISUAIS =================
function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Instagram">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function ViolaoIcon({ className = "" }: { className?: string }) {
  return <Guitar className={className} />;
}

function GuitarraIcon({ className = "" }: { className?: string }) {
  return <GiGuitar className={className} />;
}

function ViolaIcon({ className = "" }: { className?: string }) {
  return <FaGuitar className={className} />;
}

function UkuleleIcon({ className = "" }: { className?: string }) {
  return <Guitar className={`transform scale-75 ${className}`} />;
}

function BaixoIcon({ className = "" }: { className?: string }) {
  return <GiGuitar className={`transform scale-x-[-1] ${className}`} />;
}

function GaitaIcon({ className = "" }: { className?: string }) {
  return <ListMusic className={className} />;
}

function ViolinoIcon({ className = "" }: { className?: string }) {
  return <GiViolin className={className} />;
}

function FlautaIcon({ className = "" }: { className?: string }) {
  return <GiFlute className={className} />;
}

function SaxIcon({ className = "" }: { className?: string }) {
  return <GiSaxophone className={className} />;
}

export default function Home() {
  const whatsappNumber = "5511930252748";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a aula experimental gratuita da Guitar Brasil.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const cursosData = [
    { name: 'Violão', desc: 'Aprenda acordes, ritmos e repertório do zero ao avançado com método prático.', icon: ViolaoIcon },
    { name: 'Guitarra', desc: 'Técnicas de solo, escalas, riffs e solos com ênfase na prática.', icon: GuitarraIcon },
    { name: 'Viola', desc: 'Fundamentos e repertório tradicional com acompanhamento especializado.', icon: ViolaIcon },
    { name: 'Ukulele', desc: 'Aulas dinâmicas e aceleradas para tocar suas músicas favoritas rapidamente.', icon: UkuleleIcon },
    { name: 'Contrabaixo', desc: 'Desenvolva o groove, técnica, ritmo e harmonia no instrumento.', icon: BaixoIcon },
    { name: 'Canto', desc: 'Técnica vocal, afinação, projeção e repertório personalizado.', icon: Mic2 },
    { name: 'Piano', desc: 'Piano erudito e popular, com leitura de partituras, cifras, técnicas, escalas e repertório voltado para o clássico e popular.', icon: Piano },
    { name: 'Violino', desc: 'Postura, arco, técnica e peças clássicas ou populares.', icon: ViolinoIcon },
    { name: 'Flauta', desc: 'Respiração, emissão de som e prática musical acelerada.', icon: FlautaIcon },
    { name: 'Gaita', desc: 'Técnicas de respiração, bends e solos dinâmicos.', icon: GaitaIcon },
    { name: 'Sax', desc: 'Sonoridade, embocadura e repertório prático.', icon: SaxIcon },
    { name: 'Iniciação musical', desc: 'Primeiros passos no universo da música para crianças e iniciantes.', icon: Sparkles },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      
      {/* ================= HEADER (Sticky) ================= */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-amber-500/30 shadow-md bg-zinc-900 flex items-center justify-center shrink-0">
              <img 
                src="/images/logo-guitar-kids.png" 
                alt="Guitar Kids Brasil Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display='none';
                }}
              />
            </div>
            <div className="font-extrabold leading-tight">
              {/* Título Principal do Header MUITO maior */}
              <span className="block tracking-wider text-white text-3xl md:text-4xl">GUITAR BRASIL</span>
              {/* Subtítulo proporcionalmente maior */}
              <span className="block text-lg md:text-xl text-amber-400 font-semibold tracking-wide">GUITAR KIDS BRASIL</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
            <a href="#cursos" className="hover:text-amber-400 transition-colors">Cursos</a>
            <a href="#metodologia" className="hover:text-amber-400 transition-colors">Metodologia</a>
            <a href="#planos" className="hover:text-amber-400 transition-colors">Planos</a>
            <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização</a>
          </nav>

          <a 
            href={whatsappLink}
            target="_blank" rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-900/20"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Aula Grátis
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            Matrículas Abertas para Todas as Idades
          </div>

          {/* Título principal debaixo MUITO maior e proporcional */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Sua jornada musical <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
              começa aqui.
            </span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-normal">
            Escola Especializada no Ensino de música para adultos, crianças e adolescentes. Aprenda de forma prática, rápida e eficiente.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={whatsappLink}
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-emerald-900/30"
            >
              Quero agendar minha aula experimental
            </a>
            <a 
              href="#cursos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Explorar Cursos <ChevronRight className="w-5 h-5 text-amber-400" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= GALERIA DE ALUNOS ================= */}
      <section className="py-12 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold tracking-widest text-amber-400 uppercase mb-8">Nossos Alunos na Prática</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 h-48 bg-zinc-900 relative group">
              <img src="/images/aluno-violao.jpg" alt="Aluno tocando" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e)=>{(e.target as HTMLElement).style.display='none'}} />
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 h-48 bg-zinc-900 relative group">
              <img src="/images/crianca-aula.jpg" alt="Criança em aula" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e)=>{(e.target as HTMLElement).style.display='none'}} />
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 h-48 bg-zinc-900 relative group">
              <img src="/images/teclado-crianca.jpg" alt="Aluno no teclado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e)=>{(e.target as HTMLElement).style.display='none'}} />
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 h-48 bg-zinc-900 relative group">
              <img src="/images/guitarra-banda.jpg" alt="Aula prática" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e)=>{(e.target as HTMLElement).style.display='none'}} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURSOS SECTION ================= */}
      <section id="cursos" className="py-24 bg-zinc-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Instrumentos & Cursos</h2>
            <p className="text-zinc-400 text-lg">Conheça nossos cursos especializados para iniciantes, intermediários e avançados.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosData.map((curso, idx) => {
              const IconComponent = curso.icon;
              return (
                <div key={idx} className="group bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between hover:bg-zinc-850 hover:border-amber-500/50 transition-all shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{curso.name}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{curso.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    <span>Aulas Semanais de 60 min</span>
                    <span className="text-emerald-400">Presencial / Online</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= METODOLOGIA & AULAS ================= */}
      <section id="metodologia" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Aprendizagem Acelerada.</h2>
              <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                Nossos cursos de música têm ênfase em aprendizagem acelerada. Desenvolvemos um formato focado no que realmente importa para você tocar o quanto antes.
              </p>
              
              <div className="flex items-center gap-6 mb-10 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                <div className="flex-1 text-center border-r border-zinc-800">
                  <div className="text-4xl font-black text-amber-400">70%</div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1 uppercase tracking-wider">Prático</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-black text-white">30%</div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1 uppercase tracking-wider">Teórico</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-amber-500/10 p-2.5 rounded-xl text-amber-400 border border-amber-500/20"><Clock className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-bold">Carga Horária Ideal</h4>
                    <p className="text-zinc-400 mt-1">1 aula por semana com 60 minutos de duração.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-amber-500/10 p-2.5 rounded-xl text-amber-400 border border-amber-500/20"><Headphones className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-bold">Níveis Disponíveis</h4>
                    <p className="text-zinc-400 mt-1">Temos aulas para alunos nos níveis Iniciante, Médio e Avançado.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="text-amber-400 w-8 h-8" />
                O que é trabalhado em aula:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Técnica', 'Escalas', 'Acordes', 'Ritmos', 'Músicas cifradas', 'Repertório', 'Teoria'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-zinc-200">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                <h4 className="font-bold text-amber-400 mb-2">Bônus Especial:</h4>
                <p className="text-zinc-300">Temos aulas de Teoria Musical e fundamentos de música aos sábados (Opcional).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLANOS E PREÇOS (Com R$ 480 primeiro, invertido) ================= */}
      <section id="planos" className="py-24 bg-zinc-900/40 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Planos & Investimento</h2>
            <p className="text-zinc-400 text-lg">Escolha o formato ideal para o seu momento.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1º Card: Presencial de R$ 480 */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/50 rounded-3xl p-8 flex flex-col relative transform lg:-translate-y-4 shadow-xl shadow-amber-500/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-zinc-950 font-bold px-4 py-1 rounded-full text-sm">
                Presencial
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Aula Individual Presencial</h3>
                <p className="text-zinc-400 text-sm mt-2 min-h-[40px]">Acompanhamento lado a lado com o professor.</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">R$ 480</span>
                <span className="text-zinc-400 font-medium">/mês</span>
              </div>
              <div className="text-transparent mb-8">.</div> 
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-center rounded-xl font-bold transition-colors">Garantir Vaga</a>
            </div>

            {/* 2º Card: Online de R$ 430 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-100">Aula Individual Online</h3>
                <p className="text-zinc-400 text-sm mt-2 min-h-[40px]">Para qualquer instrumento no conforto de casa.</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">R$ 430</span>
                <span className="text-zinc-400 font-medium">/mês</span>
              </div>
              <p className="text-emerald-400 font-medium text-sm mb-8">Sem taxa de matrícula.</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-center rounded-xl font-semibold transition-colors">Garantir Vaga</a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-100">Aula em Grupo</h3>
                <p className="text-zinc-400 text-sm mt-2 min-h-[40px]">Caso você tenha um amigo ou familiar que queira fazer junto.</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">R$ 299,99</span>
                <span className="text-zinc-400 font-medium">/mês</span>
              </div>
              <div className="text-transparent mb-8">.</div> 
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-center rounded-xl font-semibold transition-colors">Garantir Vaga</a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors relative overflow-hidden">
              <div className="absolute top-6 right-[-35px] bg-emerald-600 text-white font-bold py-1 px-10 transform rotate-45 text-xs shadow-lg">
                5% OFF
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-100">Pacote Trimestral</h3>
                <p className="text-zinc-400 text-sm mt-2 min-h-[40px]">Feche 3 meses e ganhe desconto exclusivo.</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-emerald-400">R$ 1.296</span>
                <span className="text-zinc-400 font-medium">,00</span>
              </div>
              <p className="text-zinc-400 text-sm mb-8">Neste pacote a mensalidade sai <strong className="text-white">R$ 432,00</strong>.</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-center rounded-xl font-semibold transition-colors">Garantir Pacote</a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BENEFÍCIOS ================= */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/80 rounded-3xl p-8 md:p-16 border border-zinc-800">
             <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Tudo o que você precisa para evoluir:</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-amber-400 mb-4 border border-zinc-700">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium text-sm">Material didático é gratuito e enviado pelo WhatsApp.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-amber-400 mb-4 border border-zinc-700">
                    <Guitar className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium text-sm">Dispomos de instrumentos para as aulas presenciais.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-amber-400 mb-4 border border-zinc-700">
                    <Clock className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium text-sm">Aulas de teoria musical e fundamentos aos sábados (opcional).</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-400 mb-4 border border-emerald-800/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium text-sm">Disponibilizamos uma aula experimental gratuita.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= LOCALIZAÇÃO & REDES ================= */}
      <section id="localizacao" className="py-24 bg-zinc-900/40 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 flex flex-col justify-center text-center md:text-left">
              <MapPin className="w-12 h-12 text-amber-400 mx-auto md:mx-0 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Nossa Escola</h3>
              <p className="text-xl text-zinc-100 mb-2">📍 Rua Eça de Queiroz, 134</p>
              <p className="text-xl text-zinc-400 mb-8">Vila Mariana, São Paulo - SP</p>
              <a 
                href="https://maps.google.com/?q=Rua+Eça+de+Queiroz,+134+Vila+Mariana" 
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                Ver no Google Maps <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 flex flex-col justify-center">
              <Instagram className="w-12 h-12 text-pink-500 mb-6 mx-auto md:mx-0" />
              <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Acompanhe nosso trabalho</h3>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6 text-sm text-zinc-400">
                <span className="font-semibold text-white">1.930</span> seguidores
                <span className="font-semibold text-white">241</span> seguindo
              </div>
              <div className="space-y-3 flex flex-col items-center md:items-start text-zinc-300">
                <a href="https://instagram.com/guitarkidsbrasil.saopaulo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  @guitarkidsbrasil.saopaulo
                </a>
                <a href="https://instagram.com/guitarbrasil.saopaulo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  @guitarbrasil.saopaulo
                </a>
                <a href="https://instagram.com/guitarkids.brasil" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  @guitarkids.brasil
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-extrabold text-lg leading-tight mb-2">
              <span className="block text-white">GUITAR BRASIL</span>
              <span className="block text-xs text-amber-400">GUITAR KIDS BRASIL</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm">
              Escola Especializada no Ensino de música para adultos, crianças e adolescentes 🎸🎻🎹
            </p>
          </div>
          <div className="text-sm text-zinc-400 text-center md:text-right space-y-1">
            <p>📍 Rua Eça de Queiroz, 134 - Vila Mariana</p>
            <p>📱 WhatsApp: (11) 93025-2748</p>
          </div>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a 
        href={whatsappLink}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.5)] z-50 transition-transform transform hover:scale-110 flex items-center justify-center animate-pulse group"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-sm font-semibold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block border border-zinc-800 shadow-xl">
          Agende sua aula experimental!
        </span>
      </a>

    </main>
  );
}