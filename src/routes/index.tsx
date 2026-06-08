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
import carTucson from "@/assets/car-tucson.jpg";
import carHb20 from "@/assets/car-hb20.jpg";
import carNivus from "@/assets/car-nivus.jpg";
import carTcross from "@/assets/car-tcross.jpg";
import carPolo from "@/assets/car-polo.jpg";
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
  // Authentic Hyundai mark: italic "H" inside a tilted ellipse
  return (
    <svg viewBox="0 0 200 120" className={className} aria-label="Hyundai">
      <g transform="rotate(-12 100 60)">
        <ellipse cx="100" cy="60" rx="92" ry="42" fill="none" stroke="currentColor" strokeWidth="12"/>
        <path d="M55 32 L78 32 L72 56 L128 56 L134 32 L157 32 L138 92 L115 92 L122 68 L66 68 L59 92 L36 92 Z" fill="currentColor"/>
      </g>
    </svg>
  );
}

function VWLogo({ className = "h-6 w-6" }: { className?: string }) {
  // Authentic Volkswagen mark: V over W inside a circle
  return (
    <svg viewBox="0 0 120 120" className={className} aria-label="Volkswagen">
      <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="6"/>
      <circle cx="60" cy="60" r="46" fill="currentColor" opacity="0.08"/>
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M30 38 L60 92 L90 38"/>
        <path d="M44 38 L60 70 L76 38"/>
        <path d="M20 50 L40 90 L52 64"/>
        <path d="M100 50 L80 90 L68 64"/>
      </g>
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

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-[#04070f] text-white">
        {/* Animated background lights */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.25),transparent_55%)]" />
          <div className="absolute top-1/3 -left-40 h-[2px] w-[60%] bg-gradient-to-r from-transparent via-sky-400 to-transparent blur-sm animate-streak" />
          <div className="absolute top-2/3 -left-40 h-[3px] w-[80%] bg-gradient-to-r from-transparent via-blue-300 to-transparent blur-sm animate-streak" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-1/2 -left-40 h-[1px] w-[40%] bg-gradient-to-r from-transparent via-white to-transparent animate-streak" style={{ animationDelay: "2.4s" }} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_70%,#04070f_100%)]" />
        </div>

        {/* Confidence phrases marquee — TOP */}
        <div className="relative border-y border-white/10 bg-gradient-to-r from-hyundai/40 via-blue-600/30 to-hyundai/40 backdrop-blur py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-fast gap-12 text-sm md:text-base font-display font-bold uppercase tracking-[0.25em] text-white/95">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 shrink-0">
                {[
                  "★ Peças 100% Originais",
                  "● Garantia de Fábrica",
                  "⚡ Entrega para todo Brasil",
                  "✓ Procedência Comprovada",
                  "★ +15 Anos de Mercado",
                  "● Distribuidor Oficial",
                  "⚡ Despacho no mesmo dia",
                  "✓ Atendimento Premium",
                ].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-3">
                    <span className="text-sky-300">{t}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* HERO Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-sky-400/30 text-xs font-semibold text-sky-300 tracking-wider mb-6">
              <span className="size-2 rounded-full bg-sky-400 animate-pulse" />
              R8 PARTS DISTRIBUIDOR — 15+ ANOS NO BRASIL
            </div>
            <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
              <span className="block text-white">Movemos quem</span>
              <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-sky-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                não pode parar.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Peças originais <b className="text-sky-300">Hyundai</b> e <b className="text-white">Volkswagen</b> com a velocidade,
              confiança e procedência que o Brasil exige.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waLink("Olá! Quero comprar peças originais Hyundai.")}
                target="_blank" rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-7 h-14 rounded-2xl font-semibold shadow-[0_20px_60px_-15px_rgba(59,130,246,0.8)] hover:scale-[1.03] transition"
              >
                <HyundaiLogo className="h-7 w-7" />
                <span>Comprar Hyundai</span>
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href={waLink("Olá! Quero comprar peças originais Volkswagen.")}
                target="_blank" rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/10 border border-white/25 backdrop-blur text-white px-7 h-14 rounded-2xl font-semibold hover:bg-white/15 transition"
              >
                <VWLogo className="h-7 w-7" />
                <span>Comprar Volkswagen</span>
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* CARS MARQUEE — main visual */}
        <div className="relative pb-6 overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#04070f] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#04070f] to-transparent" />

          <div className="flex gap-6 animate-marquee w-max">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-6 shrink-0">
                {[
                  { img: carTucson, name: "Hyundai Tucson 2026", brand: "HYUNDAI", accent: "from-sky-400 to-blue-600" },
                  { img: carNivus, name: "Volkswagen Nivus 2026", brand: "VOLKSWAGEN", accent: "from-blue-500 to-indigo-600" },
                  { img: carHb20, name: "Hyundai HB20 2026", brand: "HYUNDAI", accent: "from-sky-400 to-blue-600" },
                  { img: carTcross, name: "Volkswagen T-Cross 2026", brand: "VOLKSWAGEN", accent: "from-blue-500 to-indigo-600" },
                  { img: carPolo, name: "Volkswagen Polo GTS 2026", brand: "VOLKSWAGEN", accent: "from-blue-500 to-indigo-600" },
                ].map((car, i) => (
                  <div
                    key={`${k}-${i}`}
                    className="relative w-[340px] md:w-[460px] aspect-[16/9] rounded-3xl overflow-hidden shrink-0 border border-white/10 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.45)] group"
                  >
                    <img
                      src={car.img}
                      alt={car.name}
                      width={1280} height={720}
                      loading={k === 0 && i === 0 ? "eager" : "lazy"}
                      className="w-full h-full object-cover"
                    />
                    {/* headlight flare */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_55%,rgba(186,230,253,0.45),transparent_45%)] animate-flare" />
                    {/* gradient bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    {/* badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] text-white bg-gradient-to-r ${car.accent} shadow-lg`}>
                      {car.brand}
                    </div>
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <p className="font-display font-bold text-white text-lg md:text-xl drop-shadow-lg">{car.name}</p>
                      <span className="text-[10px] font-bold tracking-widest text-sky-300 bg-white/10 backdrop-blur px-2 py-1 rounded">2026</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { n: "15+", t: "Anos no mercado" },
              { n: "10k+", t: "Clientes atendidos" },
              { n: "100%", t: "Peças originais" },
              { n: "24h", t: "Despacho rápido" },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 text-center">
                <p className="font-display text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">{s.n}</p>
                <p className="text-xs md:text-sm text-white/70 mt-1">{s.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom phrases marquee — REVERSE */}
        <div className="relative border-t border-white/10 bg-white/[0.03] backdrop-blur py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-reverse gap-12 text-sm font-display font-semibold uppercase tracking-[0.3em] text-white/70">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 shrink-0">
                {[
                  "Confiança que move o Brasil",
                  "Originalidade é compromisso",
                  "Hyundai • Volkswagen",
                  "Atendimento que entrega",
                  "Logística sem fronteiras",
                  "Tecnologia • Procedência • Velocidade",
                ].map((t, i) => (
                  <span key={i} className="text-sky-200/80">— {t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SOBRE */}
      <section id="sobre" className="relative py-24 overflow-hidden">
        <div className="absolute top-10 right-0 size-80 rounded-full bg-sky-400/20 blur-3xl animate-float-blob pointer-events-none" />
        <div className="absolute bottom-0 left-10 size-72 rounded-full bg-hyundai/15 blur-3xl animate-float-blob pointer-events-none" style={{ animationDelay: "4s" }} />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
      <section id="marcas" className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-blue-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -left-20 size-96 rounded-full bg-hyundai/15 blur-3xl animate-float-blob pointer-events-none" />
        <div className="absolute -bottom-32 -right-20 size-96 rounded-full bg-sky-400/20 blur-3xl animate-float-blob pointer-events-none" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-hyundai">ESCOLHA A SUA MARCA</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              Originais <span className="text-gradient-blue">de fábrica</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Clique no símbolo oficial da sua marca e fale direto com nosso vendedor no WhatsApp.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-7">
            {[
              {
                name: "Hyundai", Logo: HyundaiLogo, color: "hyundai",
                tagline: "Linha completa para todos os modelos",
                models: "HB20 · Creta · Tucson · Santa Fe · ix35 · Tera · i30 · Azera",
                parts: ["Pastilhas e discos de freio", "Filtros (óleo, ar, cabine)", "Velas e bobinas", "Correias e tensores", "Amortecedores e bandejas", "Bombas d'água e radiadores"],
                msg: "Olá! Quero comprar peças originais Hyundai.",
              },
              {
                name: "Volkswagen", Logo: VWLogo, color: "vw",
                tagline: "Reposição completa Volkswagen",
                models: "Gol · Polo · Virtus · T-Cross · Nivus · Saveiro · Amarok · Jetta",
                parts: ["Kit embreagem e volante", "Pastilhas e discos", "Filtros e velas", "Suspensão completa", "Bombas e radiadores", "Elétrica e sensores"],
                msg: "Olá! Quero comprar peças originais Volkswagen.",
              },
            ].map(({ name, Logo, color, tagline, models, parts, msg }) => (
              <motion.a
                key={name} href={waLink(msg)} target="_blank" rel="noreferrer"
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden p-8 md:p-10 rounded-3xl bg-white border border-border shadow-soft hover:shadow-glow transition flex flex-col"
              >
                <div className={`absolute -top-24 -right-24 size-72 rounded-full blur-3xl opacity-25 ${color === "hyundai" ? "bg-hyundai" : "bg-vw"} animate-blue-pulse`} />

                {/* Big authentic logo */}
                <div className="flex items-center gap-5">
                  <div className={`size-24 rounded-3xl grid place-items-center bg-white border-2 ${color === "hyundai" ? "border-hyundai/30 text-hyundai" : "border-vw/30 text-vw"} shadow-glow group-hover:scale-105 transition`}>
                    <Logo className="h-16 w-16" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight">{name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{tagline}</p>
                  </div>
                </div>

                <p className="mt-6 text-xs font-bold tracking-widest uppercase text-hyundai">Modelos atendidos</p>
                <p className="mt-1 text-sm text-foreground/80">{models}</p>

                <p className="mt-6 text-xs font-bold tracking-widest uppercase text-hyundai">Peças disponíveis</p>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                  {parts.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-foreground/80">
                      <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${color === "hyundai" ? "bg-hyundai" : "bg-vw"}`} />
                      {p}
                    </li>
                  ))}
                </ul>

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
      <section id="diferenciais" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-20 left-1/4 size-80 rounded-full bg-sky-300/25 blur-3xl animate-float-blob pointer-events-none" />
        <div className="absolute bottom-10 right-10 size-72 rounded-full bg-hyundai/15 blur-3xl animate-float-blob pointer-events-none" style={{ animationDelay: "5s" }} />
        <div className="relative max-w-7xl mx-auto px-6">
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
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute -top-20 -right-20 size-96 rounded-full bg-sky-400/20 blur-3xl animate-float-blob pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 size-96 rounded-full bg-hyundai/15 blur-3xl animate-float-blob pointer-events-none" style={{ animationDelay: "3s" }} />
        <div className="relative max-w-7xl mx-auto px-6">
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
