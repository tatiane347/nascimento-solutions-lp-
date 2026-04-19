import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Zap, Target, BarChart3, Globe } from "lucide-react";

export default function App() {
  const services = [
    {
      title: "Criação de Landing Pages",
      description: "Páginas de alta conversão otimizadas para performance extrema e ROI real.",
      icon: <Zap className="w-8 h-8 text-neon-green" />,
      tag: "01"
    },
    {
      title: "Prospecção B2B",
      description: "Estratégias avançadas para encontrar e converter os clientes ideais para seu negócio.",
      icon: <Target className="w-8 h-8 text-neon-purple" />,
      tag: "02"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-white/10 p-6 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="text-2xl font-black tracking-tighter uppercase">
          Nascimento<span className="text-neon-green">.</span>Solutions
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#servicos" className="hover:text-neon-green transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-neon-purple transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-neon-green transition-colors">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 border border-neon-green text-neon-green text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Performance Digital & ROI
            </span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-8">
              Performance <br />
              <span className="text-neon-purple">Digital</span> e ROI <br />
              <span className="text-neon-green">para seu</span> Negócio
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-medium mb-10 leading-relaxed">
              Ajudamos agências e empresas a escalarem seus resultados através de tecnologia de ponta e estratégias de prospecção validadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-neon-green text-black font-black uppercase px-8 py-4 text-lg hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(188,19,254,1)]">
                Começar Agora
              </button>
              <button className="border border-white/20 font-black uppercase px-8 py-4 text-lg hover:bg-white/5 transition-colors">
                Ver Serviços
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <Globe className="w-[500px] h-[500px] text-neon-purple" />
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-neon-green text-black py-4 overflow-hidden whitespace-nowrap border-y border-black">
        <div className="flex animate-marquee font-black uppercase text-2xl tracking-tighter">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8">
              Foco em Resultados • Alta Performance • ROI Real • Nascimento Solutions • 
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="servicos" className="py-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                Nossos <span className="text-neon-purple">Serviços</span>
              </h2>
              <div className="h-1 w-24 bg-neon-green"></div>
            </div>
            <div className="hidden md:block text-zinc-500 font-mono text-sm">
              / SOLUTIONS_2026
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="bg-black p-12 relative group overflow-hidden"
              >
                <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110">
                  {service.tag}
                </div>
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-3xl font-black uppercase mb-4 group-hover:text-neon-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                  Saiba Mais <ArrowRight className="w-4 h-4 text-neon-green" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl md:text-7xl font-black text-neon-green mb-2">+150</div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Projetos Entregues</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-black text-neon-purple mb-2">98%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Satisfação</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-black text-neon-green mb-2">24/7</div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Suporte Ativo</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-black text-neon-purple mb-2">10x</div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">ROI Médio</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Pronto para <span className="text-neon-green">Escalar?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Não perca tempo com estratégias que não funcionam. Vamos construir o futuro do seu negócio hoje.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-neon-purple text-white font-black uppercase px-12 py-6 text-xl hover:scale-105 transition-transform shadow-[8px_8px_0px_0px_rgba(0,255,0,1)]"
          >
            Falar com um Especialista <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 border-t border-white/10 text-center text-zinc-600 text-xs font-bold uppercase tracking-[0.3em]">
        © 2026 Nascimento Solutions • Todos os direitos reservados
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-neon-green text-black p-4 rounded-none shadow-[4px_4px_0px_0px_rgba(188,19,254,1)]"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
