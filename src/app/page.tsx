import React from 'react';
import { 
  Music, Guitar, Mic2, Piano, Headphones, BookOpen, Clock, 
  MapPin, CheckCircle2, ChevronRight, MessageCircle, Play
} from 'lucide-react';
import { siInstagram } from 'simple-icons';

export default function Home() {
  const whatsappNumber = "5511930252748";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a aula experimental gratuita da Guitar Brasil.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-dark text-zinc-100 font-sans selection:bg-gold selection:text-darker">
      
      {/* ================= HEADER (Sticky) ================= */}
      <header className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-gold" />
            <div className="font-extrabold text-xl leading-tight">
              <span className="block tracking-wider">GUITAR BRASIL</span>
              <span className="block text-xs text-zinc-400 font-medium">GUITAR KIDS</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
            <a href="#cursos" className="hover:text-gold transition-colors">Cursos</a>
            <a href="#metodologia" className="hover:text-gold transition-colors">Metodologia</a>
            <a href="#planos" className="hover:text-gold transition-colors">Planos</a>
            <a href="#localizacao" className="hover:text-gold transition-colors">Localização</a>
          </nav>
          <a 
            href={whatsappLink}
            target="_blank" rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Aula Grátis
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-dark to-darker -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-goldLight text-sm font-medium mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
            </span>
            Matrículas Abertas
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Sua jornada musical <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
              começa aqui.
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Escola Especializada no Ensino de música para adultos, crianças e adolescentes. Aprenda de forma prática, rápida e eficiente.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={whatsappLink}
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(5,150,105,0.4)]"
            >
              Quero agendar minha aula experimental
            </a>
            <a 
              href="#cursos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Explorar Cursos <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= CURSOS SECTION ================= */}
      <section id="cursos" className="py-24 bg-darker relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Instrumentos & Cursos</h2>
            <p className="text-zinc-400 text-lg">Encontre o instrumento perfeito para o seu estilo.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {['Violão', 'Guitarra', 'Viola', 'Ukulele', 'Contrabaixo', 'Canto', 'Piano', 'Violino', 'Flauta', 'Gaita', 'Sax', 'Iniciação musical'].map((curso, idx) => (
              <div key={idx} className="group bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-zinc-800 hover:border-gold/50 transition-all cursor-default">
                {curso === 'Canto' ? <Mic2 className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" /> : 
                 curso === 'Piano' ? <Piano className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" /> :
                 curso === 'Iniciação musical' ? <Play className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" /> :
                 <Guitar className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />}
                <h3 className="font-semibold text-lg text-zinc-200 group-hover:text-white">{curso}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= METODOLOGIA & AULAS ================= */}
      <section id="metodologia" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Aprendizagem Acelerada.</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Nossos cursos de música têm ênfase em aprendizagem acelerada. Desenvolvemos um formato focado no que realmente importa para você tocar seu instrumento favorito.
              </p>
              
              <div className="flex items-center gap-6 mb-10 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                <div className="flex-1 text-center border-r border-zinc-700">
                  <div className="text-4xl font-black text-gold">70%</div>
                  <div className="text-sm text-zinc-400 font-medium mt-1 uppercase tracking-wider">Prático</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-black text-white">30%</div>
                  <div className="text-sm text-zinc-400 font-medium mt-1 uppercase tracking-wider">Teórico</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-gold/10 p-2 rounded-lg text-gold"><Clock className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-bold">Carga Horária Ideal</h4>
                    <p className="text-zinc-400 mt-1">1 aula por semana com 60 minutos de duração.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-gold/10 p-2 rounded-lg text-gold"><Headphones className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-bold">Níveis Disponíveis</h4>
                    <p className="text-zinc-400 mt-1">Temos aulas para alunos nos níveis Iniciante, Médio e Avançado.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="text-gold w-8 h-8" />
                O que é trabalhado em aula:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Técnica', 'Escalas', 'Acordes', 'Ritmos', 'Músicas cifradas', 'Repertório', 'Teoria'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-zinc-300">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-emerald-900/20 border border-emerald-900/50 rounded-2xl">
                <h4 className="font-bold text-emerald-400 mb-2">Bônus Especial:</h4>
                <p className="text-zinc-300">Temos aulas de Teoria Musical e fundamentos de música aos sábados (Opcional).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLANOS E PREÇOS ================= */}
      <section id="planos" className="py-24 bg-darker border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Planos & Investimento</h2>
            <p className="text-zinc-400 text-lg">Escolha o formato ideal para o seu momento.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-100">Aula Individual Online</h3>
                <p className="text-zinc-400 text-sm mt-2 min-h-[40px]">Para qualquer instrumento no conforto de casa.</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold">R$ 430</span>
                <span className="text-zinc-400 font-medium">/mês</span>
              </div>
              <p className="text-emerald-400 font-medium text-sm mb-8">Sem taxa de matrícula.</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-center rounded-xl font-semibold transition-colors">Garantir Vaga</a>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 border border-gold/50 rounded-3xl p-8 flex flex-col relative transform lg:-translate-y-4 shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-darker font-bold px-4 py-1 rounded-full text-sm">
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
              <div className="text-transparent mb-8">.</div> {/* Spacer */}
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 px-4 bg-gold hover:bg-goldLight text-darker text-center rounded-xl font-bold transition-colors">Garantir Vaga</a>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-100">Aula em Grupo</h3>
                <p className="text-zinc-400 text-sm mt-2 min-h-[40px]">Caso você tenha um amigo ou familiar que queira fazer junto.</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold">R$ 299,99</span>
                <span className="text-zinc-400 font-medium">/mês</span>
              </div>
              <div className="text-transparent mb-8">.</div> {/* Spacer */}
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-center rounded-xl font-semibold transition-colors">Garantir Vaga</a>
            </div>

            {/* Card 4 */}
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
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 border border-zinc-800">
             <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Tudo o que você precisa para evoluir:</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-gold mb-4">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium">Material didático é gratuito e enviado pelo WhatsApp.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-gold mb-4">
                    <Guitar className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium">Dispomos de instrumentos para as aulas presenciais.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-gold mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium">Aulas de teoria musical e fundamentos aos sábados (opcional).</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-400 mb-4 border border-emerald-800/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 font-medium">Disponibilizamos uma aula experimental gratuita.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= LOCALIZAÇÃO & REDES ================= */}
      <section id="localizacao" className="py-24 bg-darker border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Localização */}
            <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 flex flex-col justify-center text-center md:text-left">
              <MapPin className="w-12 h-12 text-gold mx-auto md:mx-0 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Nossa Escola</h3>
              <p className="text-xl text-zinc-300 mb-2">📍 Rua Eça de Queiroz, 134</p>
              <p className="text-xl text-zinc-400 mb-8">Vila Mariana, São Paulo - SP</p>
              <a 
                href="https://maps.google.com/?q=Rua+Eça+de+Queiroz,+134+Vila+Mariana" 
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2 text-gold hover:text-goldLight font-semibold transition-colors"
              >
                Ver no Google Maps <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="bg-gradient-to-br from-zinc-900 to-dark p-10 rounded-3xl border border-zinc-800 flex flex-col justify-center">
              <svg
  role="img"
  viewBox="0 0 24 24"
  className="w-12 h-12 text-pink-500 mb-6 mx-auto md:mx-0"
  fill="currentColor"
  aria-label="Instagram"
>
  <path d={siInstagram.path} />
</svg>
              <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Acompanhe nosso trabalho</h3>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6 text-sm text-zinc-400">
                <span className="font-semibold text-white">1.930</span> seguidores
                <span className="font-semibold text-white">241</span> seguindo
              </div>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <a href="https://instagram.com/guitarkidsbrasil.saopaulo" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">@guitarkidsbrasil.saopaulo</a>
                <a href="https://instagram.com/guitarbrasil.saopaulo" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">@guitarbrasil.saopaulo</a>
                <a href="https://instagram.com/guitarkids.brasil" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">guitarkids.brasil</a>
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
              <span className="block text-xs text-zinc-500">GUITAR KIDS BRASIL</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm">
              Escola Especializada no Ensino de música para adultos, crianças e adolescentes 🎸🎻🎹
            </p>
          </div>
          <div className="text-sm text-zinc-500 text-center md:text-right space-y-1">
            <p>📍 Rua Eça de Queiroz, 134 - Vila Mariana</p>
            <p>📱 WhatsApp: (11) 93025-2748</p>
          </div>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a 
        href={whatsappLink}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] z-50 transition-transform transform hover:scale-110 flex items-center justify-center animate-pulse-slow group"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-zinc-800 text-white text-sm font-semibold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block border border-zinc-700">
          Agende sua aula experimental!
        </span>
      </a>

    </main>
  );
}