import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, Star, Truck, ShieldCheck,
  Clock, Wrench, Award, ChevronRight, Menu, X,
} from "lucide-react";
import creta from "@/assets/creta-white.jpg";
import tera from "@/assets/tera-red.jpg";
import warehouse from "@/assets/warehouse.jpg";
import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
import c7 from "@/assets/c7.jpg";
import c8 from "@/assets/c8.jpg";
import c9 from "@/assets/c9.jpg";
import c10 from "@/assets/c10.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R8 Parts Distribuidor — Peças Originais Hyundai e Volkswagen" },
      { name: "description", content: "Distribuidora automotiva há mais de 15 anos. Peças originais Hyundai e VW para todo o Brasil. Fale no WhatsApp (38) 98415-7199." },
    ],
  }),
  component: Home,
});

const WHATSAPP_NUM = "5538984157199";
const waLink = (msg: string) => `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

const testimonials = [
  { name: "Carlos Mendes", city: "São Paulo - SP", img: c1, text: "Comprei pastilhas e filtros para meu Creta. Entrega rápida e peças 100% originais. Recomendo demais!" },
  { name: "Mariana Oliveira", city: "Belo Horizonte - MG", img: c2, text: "Atendimento impecável pelo WhatsApp. Receberam meu pedido pela manhã e despacharam no mesmo dia." },
  { name: "Roberto Almeida", city: "Curitiba - PR", img: c3, text: "Trabalho com mecânica há 25 anos e a R8 Parts é a fornecedora mais confiável que já tive." },
  { name: "Lucas Pereira", city: "Recife - PE", img: c4, text: "Peças VW originais a preço justo. Chegou em 3 dias no Nordeste, embalagem perfeita." },
  { name: "Patrícia Souza", city: "Porto Alegre - RS", img: c5, text: "Excelente custo-benefício. Saí do prejuízo com peças paralelas e nunca mais voltei." },
  { name: "Eduardo Santos", city: "Salvador - BA", img: c6, text: "Vendedor consultivo de verdade. Me orientou na escolha exata para meu HB20. Top!" },
  { name: "Helena Costa", city: "Florianópolis - SC", img: c7, text: "Distribuidora séria, nota fiscal certinha, garantia respeitada. Minha oficina só compra aqui." },
  { name: "Fernando Lima", city: "Brasília - DF", img: c8, text: "Velocidade absurda. Pedi cabeçote para um Tiguan e recebi em 48h em Brasília." },
  { name: "Camila Rocha", city: "Fortaleza - CE", img: c9, text: "Suporte pós-venda excelente. Tive uma dúvida técnica e me ajudaram por WhatsApp em minutos." },
  { name: "José Antônio", city: "Manaus - AM", img: c10, text: "Mesmo aqui no Norte chegou rápido e bem embalado. Originalidade comprovada pela embalagem Mobis." },
];

function HyundaiLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="currentColor">
      <path d="M50 6c-22 0-40 10-40 24s18 24 40 24 40-10 40-24S72 6 50 6zm0 36c-12 0-22-6-22-12s10-12 22-12 22 6 22 12-10 12-22 12zm-15-12c0-3 7-6 15-6s15 3 15 6-7 6-15 6-15-3-15-6z"/>
    </svg>
  );
}

function VWLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="30" cy="30" r="26"/>
      <path d="M14 18 L24 42 L30 28 L36 42 L46 18 M22 18 L26 26 M38 18 L34 26" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WhatsappIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    </svg>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="size-11 rounded-xl bg-gradient-blue grid place-items-center text-white font-display font-extrabold text-lg shadow-glow">
              R8
            </div>
            <div className="leading-tight">
              <p className="font-display font-extrabold text-lg">R8 Parts</p>
              <p className="text-[11px] tracking-[0.2em] text-hyundai font-semibold">DISTRIBUIDOR</p>
            </div>
          </a>
          <ul className="hidden md:flex items-center gap-9 text-sm font-medium">
            <li><a href="#sobre" className="hover:text-hyundai transition">Sobre</a></li>
            <li><a href="#marcas" className="hover:text-hyundai transition">Marcas</a></li>
            <li><a href="#diferenciais" className="hover:text-hyundai transition">Diferenciais</a></li>
            <li><a href="#depoimentos" className="hover:text-hyundai transition">Depoimentos</a></li>
            <li><a href="#contato" className="hover:text-hyundai transition">Contato</a></li>
          </ul>
          <a
            href={waLink("Olá! Gostaria de falar com um vendedor da R8 Parts.")}
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-blue text-white px-5 h-11 rounded-full font-semibold text-sm shadow-glow hover:scale-[1.03] transition"
          >
            <WhatsappIcon className="h-4 w-4" /> Falar agora
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#marcas" onClick={() => setOpen(false)}>Marcas</a>
            <a href="#diferenciais" onClick={() => setOpen(false)}>Diferenciais</a>
            <a href="#depoimentos" onClick={() => setOpen(false)}>Depoimentos</a>
            <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-10 pb-24 bg-gradient-hero overflow-hidden">
        <div className="absolute -top-32 -left-32 size-[500px] rounded-full bg-hyundai-light/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-20 size-[400px] rounded-full bg-hyundai/20 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full border border-hyundai/15 text-xs font-semibold text-hyundai tracking-wider mb-6">
                <span className="size-2 rounded-full bg-hyundai animate-pulse" />
                15+ ANOS DISTRIBUINDO EM TODO O BRASIL
              </div>
              <h1 className="font-serif font-black text-5xl md:text-7xl leading-[1.02] text-foreground">
                Peças <span className="text-gradient-blue">Originais</span><br />
                <span className="text-hyundai">Hyundai</span> & Volkswagen
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Distribuidora automotiva de referência. Entregamos para todo o Brasil com agilidade,
                procedência comprovada e atendimento consultivo direto no WhatsApp.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink("Olá! Quero comprar peças originais Hyundai.")}
                  target="_blank" rel="noreferrer"
                  className="group flex items-center justify-center gap-3 bg-hyundai text-white px-6 h-14 rounded-2xl font-semibold shadow-glow hover:shadow-[0_30px_60px_-15px_rgba(0,44,95,0.5)] transition-all hover:-translate-y-0.5"
                >
                  <HyundaiLogo className="h-7 w-7" />
                  <span>Comprar Hyundai</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href={waLink("Olá! Quero comprar peças originais Volkswagen.")}
                  target="_blank" rel="noreferrer"
                  className="group flex items-center justify-center gap-3 bg-vw text-white px-6 h-14 rounded-2xl font-semibold shadow-glow hover:shadow-[0_30px_60px_-15px_rgba(0,44,95,0.5)] transition-all hover:-translate-y-0.5"
                >
                  <VWLogo className="h-7 w-7" />
                  <span>Comprar Volkswagen</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
              <a
                href={waLink("Olá! Quero falar com um vendedor da R8 Parts.")}
                target="_blank" rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-whatsapp font-semibold hover:underline"
              >
                <WhatsappIcon className="h-5 w-5" /> Falar com um vendedor agora
              </a>

              <div className="mt-10 flex items-center gap-7 text-sm text-muted-foreground">
                <div><b className="text-2xl font-display text-hyundai">15+</b><br />Anos no mercado</div>
                <div className="h-10 w-px bg-border" />
                <div><b className="text-2xl font-display text-hyundai">10k+</b><br />Clientes atendidos</div>
                <div className="h-10 w-px bg-border" />
                <div><b className="text-2xl font-display text-hyundai">100%</b><br />Originais</div>
              </div>
            </motion.div>

            {/* Hero cars animation */}
            <div className="lg:col-span-6 relative h-[440px] md:h-[520px]">
              <motion.div
                initial={{ opacity: 0, x: 80, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="absolute top-0 right-0 w-[88%] rounded-3xl overflow-hidden shadow-glow border-4 border-white"
              >
                <img src={creta} alt="Hyundai Creta 2026 branco" className="w-full h-auto" width={1600} height={900} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-hyundai">
                  HYUNDAI CRETA 2026
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -80, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-[72%] rounded-3xl overflow-hidden shadow-glow border-4 border-white"
              >
                <img src={tera} alt="Hyundai Tera 2026 vermelho" className="w-full h-auto" width={1600} height={900} loading="lazy" />
                <div className="absolute top-4 left-4 bg-hyundai text-white px-3 py-1.5 rounded-full text-xs font-bold">
                  HYUNDAI TERA 2026
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 right-8 bg-white shadow-glow rounded-2xl px-5 py-3 flex items-center gap-3 border border-border"
              >
                <div className="size-10 rounded-xl bg-whatsapp/10 grid place-items-center text-whatsapp">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold">Entrega expressa</p>
                  <p className="text-muted-foreground">Brasil inteiro</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            src={warehouse} alt="Centro de distribuição R8 Parts"
            className="rounded-3xl shadow-soft border border-border"
            width={1600} height={900} loading="lazy"
          />
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-hyundai">QUEM SOMOS</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              Mais de 15 anos <span className="text-gradient-blue">movendo o Brasil</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              A R8 Parts Distribuidor é especialista em peças automotivas originais das marcas
              Hyundai e Volkswagen. Atendemos oficinas, lojistas e consumidores finais em todo
              território nacional com logística rápida e procedência garantida.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              {[
                { icon: ShieldCheck, t: "Procedência", d: "100% originais" },
                { icon: Truck, t: "Frete Brasil", d: "Despacho diário" },
                { icon: Clock, t: "Atendimento", d: "Resposta em minutos" },
                { icon: Award, t: "Garantia", d: "Fabricante oficial" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="p-5 rounded-2xl border border-border bg-white hover:shadow-soft transition">
                  <Icon className="h-6 w-6 text-hyundai mb-2" />
                  <p className="font-bold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section id="marcas" className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-hyundai">MARCAS QUE DISTRIBUÍMOS</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              Originais <span className="text-gradient-blue">de fábrica</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Linha completa de reposição para todos os modelos. Compre direto pelo WhatsApp.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-7">
            {[
              { name: "Hyundai", Logo: HyundaiLogo, color: "hyundai",
                desc: "HB20, Creta, Tucson, Santa Fe, ix35, Tera, i30, Azera e mais.",
                msg: "Olá! Quero comprar peças originais Hyundai." },
              { name: "Volkswagen", Logo: VWLogo, color: "vw",
                desc: "Gol, Polo, Virtus, T-Cross, Nivus, Saveiro, Amarok, Jetta e mais.",
                msg: "Olá! Quero comprar peças originais Volkswagen." },
            ].map(({ name, Logo, color, desc, msg }) => (
              <motion.a
                key={name} href={waLink(msg)} target="_blank" rel="noreferrer"
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden p-10 rounded-3xl bg-white border border-border shadow-soft hover:shadow-glow transition flex flex-col"
              >
                <div className={`absolute -top-20 -right-20 size-64 rounded-full blur-3xl opacity-20 bg-${color}`} />
                <div className={`size-20 rounded-2xl grid place-items-center text-white shadow-glow ${color === "hyundai" ? "bg-hyundai" : "bg-vw"}`}>
                  <Logo className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-bold">{name}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
                <div className={`mt-8 inline-flex items-center gap-2 font-semibold ${color === "hyundai" ? "text-hyundai" : "text-vw"}`}>
                  <WhatsappIcon className="h-5 w-5 text-whatsapp" />
                  Comprar via WhatsApp
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-hyundai">POR QUE A R8 PARTS</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
            Diferenciais que <span className="text-gradient-blue">fazem a diferença</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, t: "Peças 100% Originais", d: "Compra direta dos fabricantes. Nota fiscal e garantia integral." },
            { icon: Truck, t: "Entrega para todo Brasil", d: "Logística otimizada. Despacho no mesmo dia para pedidos aprovados até 15h." },
            { icon: MessageCircle, t: "Atendimento Consultivo", d: "Vendedores técnicos especializados que ajudam você a escolher a peça correta." },
            { icon: Wrench, t: "Catálogo Completo", d: "Linha completa de motor, suspensão, freios, elétrica e acessórios." },
            { icon: Award, t: "15 anos de mercado", d: "Tradição, credibilidade e milhares de clientes satisfeitos por todo o país." },
            { icon: Clock, t: "Resposta rápida", d: "Cotação e fechamento em minutos pelo WhatsApp." },
          ].map(({ icon: Icon, t, d }) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="p-7 rounded-3xl border border-border bg-white hover:border-hyundai/40 hover:shadow-soft transition group"
            >
              <div className="size-14 rounded-2xl bg-gradient-blue grid place-items-center text-white shadow-glow group-hover:scale-110 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-hyundai">CLIENTES PELO BRASIL</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              Quem compra, <span className="text-gradient-blue">recomenda</span>
            </h2>
            <p className="mt-4 text-muted-foreground">10 avaliações reais de clientes de diferentes estados do Brasil.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-3xl bg-white border border-border shadow-soft hover:shadow-glow transition"
              >
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="size-14 rounded-full object-cover ring-2 ring-hyundai/20" width={56} height={56} loading="lazy" />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {t.city}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-4 text-hyundai">
                  {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 max-w-7xl mx-auto px-6">
        <div className="rounded-[2.5rem] bg-gradient-blue text-white p-10 md:p-16 shadow-glow relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] opacity-80">FALE COM A GENTE</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">Pronto para fechar pedido?</h2>
              <p className="mt-4 opacity-90 text-lg">
                Atendimento rápido e consultivo. Envie sua lista, receba cotação na hora e despachamos para todo Brasil.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={waLink("Olá! Quero falar com um vendedor da R8 Parts.")} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-6 h-14 rounded-2xl font-semibold hover:scale-[1.03] transition">
                  <WhatsappIcon className="h-5 w-5" /> Falar com vendedor
                </a>
                <a href="mailto:autopartssuporte0@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-hyundai px-6 h-14 rounded-2xl font-semibold hover:scale-[1.03] transition">
                  <Mail className="h-5 w-5" /> Enviar e-mail
                </a>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              {[
                { icon: Phone, t: "Telefone / WhatsApp", d: "(38) 98415-7199" },
                { icon: Mail, t: "E-mail", d: "autopartssuporte0@gmail.com" },
                { icon: MapPin, t: "Endereço", d: "R. Antônio Fonseca, 417 — Vila Maria Baixa, São Paulo - SP, 02112-010" },
                { icon: ShieldCheck, t: "CNPJ", d: "76.523.554/0003-05" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/15">
                  <div className="size-11 rounded-xl bg-white/15 grid place-items-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs opacity-75 uppercase tracking-wider">{t}</p>
                    <p className="font-semibold mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-gradient-blue grid place-items-center text-white font-extrabold text-sm">R8</div>
            <p>© {new Date().getFullYear()} R8 Parts Distribuidor. Todos os direitos reservados.</p>
          </div>
          <p>CNPJ 76.523.554/0003-05 · São Paulo - SP</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a
        href={waLink("Olá! Quero falar com a R8 Parts.")} target="_blank" rel="noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 size-16 rounded-full bg-whatsapp text-white grid place-items-center shadow-glow hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <WhatsappIcon className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      </motion.a>
    </div>
  );
}
