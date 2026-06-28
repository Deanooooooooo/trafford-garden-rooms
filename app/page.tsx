"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight,
  CheckCircle2,
  Facebook,
  Hammer,
  Home,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Sparkles,
  Trees,
  Wrench,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assets = (name: string) => `${basePath}/assets/${name}`;

const businessName = "Trafford Garden Rooms";
const email = "traffordgardenrooms@gmail.com";
const phoneDisplay = "07570 094 600";
const phoneHref = "tel:07570094600";
const siteUrl = "https://www.traffordgardenrooms.com/";
const facebookUrl = "https://www.facebook.com/TraffordGardenRooms/";
const facebookReviewsUrl = "https://www.facebook.com/TraffordGardenRooms/reviews";
const mapsUrl =
  "https://www.google.com/maps/place/Trafford+Garden+Rooms/@53.4351984,-2.3235411,17z/data=!3m1!4b1!4m6!3m5!1s0x487bad5c057331bd:0x980123cf8e1fe232!8m2!3d53.4351984!4d-2.3209662!16s%2Fg%2F1tkmm2sp";
const address = "Bradley Lane, Stretford, Manchester M32 8RH";
const mailSubject = "Garden room enquiry";
const mailBody = [
  "Hi Trafford Garden Rooms,",
  "",
  "I would like to enquire about a garden room.",
  "",
  "Name:",
  "Phone:",
  "Postcode:",
  "Project type:",
  "Preferred timescale:",
  "Message:",
].join("\n");
const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

const services = [
  {
    icon: Home,
    title: "Garden offices",
    body: "A quiet, insulated space for focused work at home without losing a spare room inside the house.",
  },
  {
    icon: Trees,
    title: "Studios and leisure rooms",
    body: "Flexible outdoor rooms for training, music, hobbies, entertaining or simply getting more usable living space.",
  },
  {
    icon: Ruler,
    title: "Bespoke SIPs builds",
    body: "Made-to-measure garden rooms using SIPs panel construction for a strong, efficient structure and neat finish.",
  },
  {
    icon: Wrench,
    title: "Full finish details",
    body: "Cladding, glazing, decking and practical layout details planned around the way the room will actually be used.",
  },
];

const gallery = [
  {
    src: "trafford-hero.jpg",
    title: "Contemporary garden room",
    body: "Timber cladding, dark framed glazing and a clean deck edge for an everyday outdoor room.",
  },
  {
    src: "trafford-room-1.jpg",
    title: "Relaxed garden studio",
    body: "Compact room design that still leaves space for seating, planting and garden flow.",
  },
  {
    src: "trafford-room-2.jpg",
    title: "Large outdoor room",
    body: "A broader footprint with generous glazing and decking for a more substantial project.",
  },
  {
    src: "trafford-room-3.jpg",
    title: "Finished garden space",
    body: "Real project photography from Trafford Garden Rooms' own public site assets.",
  },
];

const proof = [
  "Official site states bespoke SIPs panel garden rooms for Manchester and the North West.",
  "Email and mobile contact are available for garden room enquiries.",
  "Project photography shows finished garden rooms, glazing, decking and usable outdoor spaces.",
];

const testimonials = [
  {
    name: "Elle Flannery",
    source: "Customer review",
    body: "Amazing service and the room is perfect. They are extremely helpful and it was put up so quickly.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const main = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -58]);
  const detailY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.04, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".gsap-rise", {
        y: 42,
        opacity: 0,
        duration: 0.82,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 72%" },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: businessName,
    image: assets("trafford-hero.jpg"),
    url: "https://deanooooooooo.github.io/trafford-garden-rooms/",
    telephone: phoneDisplay,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bradley Lane",
      addressLocality: "Stretford",
      addressRegion: "Manchester",
      postalCode: "M32 8RH",
      addressCountry: "GB",
    },
    areaServed: ["Manchester", "Trafford", "Stretford", "Sale", "Altrincham", "North West"],
    sameAs: [siteUrl, facebookUrl, mapsUrl],
  };

  return (
    <main ref={main} className="min-h-screen overflow-hidden text-iron">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-[#171a16]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="relative h-12 w-24 overflow-hidden rounded-lg bg-white shadow-sm sm:w-28">
              <Image src={assets("trafford-logo.jpg")} alt="Trafford Garden Rooms logo" fill className="object-contain p-1" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-black uppercase">Trafford Garden Rooms</span>
              <span className="text-sm font-bold text-white/68">Manchester and North West</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-base font-black text-white/86 md:flex">
            <a className="hover:text-white" href="#rooms">Rooms</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#reviews">Reviews</a>
          </nav>
          <a href={mailtoUrl}>
            <Button className="min-h-11 rounded-lg bg-[#d0a04d] px-4 text-[#171a16] hover:bg-white">
              <Mail size={17} />
              <span className="hidden sm:inline">Send enquiry</span>
              <span className="sm:hidden">Enquire</span>
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="hero-clip relative min-h-[1040px] bg-[#171a16] pt-24 text-white md:min-h-[850px]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image src={assets("trafford-hero.jpg")} alt="Finished timber garden room with dark glazing" fill priority className="object-cover opacity-90" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#171a16]/94 via-[#171a16]/68 to-[#171a16]/24" />
        <div className="room-vignette absolute inset-0" />
        <motion.div style={{ y: detailY }} className="absolute -right-20 top-28 h-72 w-72 rounded-full bg-[#d0a04d]/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-28 pt-16 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:pt-24">
          <Reveal>
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/18 bg-black/58 px-4 py-2 text-xs font-black uppercase tracking-normal text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                <ShieldCheck size={16} /> Bespoke SIPs garden rooms in Manchester
              </p>
              <h1 className="max-w-4xl text-[clamp(2.9rem,5.9vw,5.8rem)] font-black leading-[0.97]">
                More room to work, train and switch off at home.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
                Trafford Garden Rooms designs and builds practical, made-to-measure outdoor rooms for homeowners who want proper usable space in the garden.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={mailtoUrl}>
                  <Button className="rounded-lg bg-[#d0a04d] text-[#171a16] hover:bg-white">
                    <Mail size={18} /> Start an enquiry
                  </Button>
                </a>
                <a href="#reviews">
                  <Button variant="secondary" className="rounded-lg border-white/18 bg-white/10 text-white hover:bg-white/18">
                    Reviews <ArrowUpRight size={18} />
                  </Button>
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Garden offices", "Studios", "Leisure rooms"].map((item) => (
                  <span key={item} className="rounded-lg border border-white/14 bg-black/34 px-4 py-3 text-sm font-black text-white/84 backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="rounded-2xl border border-white/14 bg-[#171a16]/88 p-5 shadow-[0_32px_110px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase text-[#d0a04d]">Garden room enquiry</p>
                  <h2 className="mt-1 text-3xl font-black leading-tight">Tell Trafford what you want to build.</h2>
                </div>
                <MessageSquareText className="text-[#d0a04d]" size={30} />
              </div>
              <form action={`mailto:${email}`} method="post" encType="text/plain" className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Name
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d0a04d]/45 transition placeholder:text-iron/42 focus:ring-4" name="name" placeholder="Your name" required />
                  </label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Email
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d0a04d]/45 transition placeholder:text-iron/42 focus:ring-4" name="email" type="email" placeholder="you@email.com" required />
                  </label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Phone
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d0a04d]/45 transition placeholder:text-iron/42 focus:ring-4" name="phone" placeholder="Best number" />
                  </label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Postcode
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d0a04d]/45 transition placeholder:text-iron/42 focus:ring-4" name="postcode" placeholder="M32..." />
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm font-black text-white/78">
                  Project type
                  <select className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d0a04d]/45 transition focus:ring-4" name="project_type" defaultValue="Garden office">
                    <option>Garden office</option>
                    <option>Studio or hobby room</option>
                    <option>Gym or training room</option>
                    <option>Entertainment room</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm font-black text-white/78">
                  Message
                  <textarea className="min-h-28 rounded-lg border border-white/12 bg-white px-3 py-3 text-base font-bold text-iron outline-none ring-[#d0a04d]/45 transition placeholder:text-iron/42 focus:ring-4" name="message" placeholder="Tell them the rough size, how you want to use it and when you would like to start." required />
                </label>
                <Button className="min-h-13 rounded-lg bg-[#d0a04d] text-base font-black text-[#171a16] hover:bg-white">
                  <Send size={18} /> Compose email enquiry
                </Button>
                <p className="text-sm font-semibold leading-6 text-white/62">
                  Opens your email app addressed to {email}. For urgent questions, call {phoneDisplay}.
                </p>
              </form>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="rooms" className="bg-[#f5f2e8] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#8b6a30]">What they build</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Outdoor rooms that earn their place in the garden.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-iron/68">
              A garden room should feel useful from day one: warm enough to work in, bright enough to spend time in, and finished cleanly enough to look like it belongs.
            </p>
          </Reveal>
          <div className="services-grid mt-12 grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="gsap-rise rounded-lg border-0 bg-white shadow-premium">
                <CardContent className="p-6">
                  <service.icon className="mb-7 text-[#8b6a30]" size={34} />
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-iron/64">{service.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#171a16] px-4 py-24 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-[#d0a04d]">Real project visuals</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Built examples, not borrowed mood shots.</h2>
            </div>
            <a href={siteUrl} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="rounded-lg bg-white text-[#171a16] hover:bg-[#d0a04d]">
                Official site <ArrowUpRight size={18} />
              </Button>
            </a>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {gallery.map((item, index) => (
              <Reveal key={item.src} delay={index * 0.04}>
                <article className="overflow-hidden rounded-lg bg-white text-iron shadow-[0_26px_80px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-[4/3]">
                    <Image src={assets(item.src)} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-iron/62">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-[#171a16] shadow-premium">
              <Image src={assets("trafford-room-4.jpg")} alt="Finished Trafford Garden Rooms project" fill className="object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171a16]/78 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-sm font-black uppercase text-[#d0a04d]">Manchester and North West</p>
                <h2 className="mt-2 text-4xl font-black">Measured, built and finished for the garden you already have.</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase text-[#8b6a30]">Why it feels credible</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">The enquiry is about the room, not a generic callback.</h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-iron/68">
                The form asks for the details Trafford need to understand the project: how the customer wants to use the room, where it is, and what kind of space they have in mind.
              </p>
              <div className="mt-8 grid gap-4">
                {proof.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-iron/10 bg-[#f5f2e8] p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#8b6a30]" size={22} />
                    <p className="font-bold leading-7 text-iron/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="reviews" className="bg-[#e8ecde] px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase text-[#8b6a30]">Customer testimonial</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Feedback from a garden room customer.</h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-iron/68">
                A finished garden room should feel easy from enquiry to handover: clear advice, tidy work and a space the customer can use straight away.
              </p>
              <a href={facebookReviewsUrl} target="_blank" rel="noreferrer">
                <Button className="mt-8 rounded-lg bg-[#171a16] text-white hover:bg-[#d0a04d] hover:text-[#171a16]">
                  <Facebook size={18} /> View Facebook page
                </Button>
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-5">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-lg bg-white p-7 shadow-premium">
                  <p className="text-xl font-black leading-8 text-iron">&quot;{testimonial.body}&quot;</p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-iron/10 pt-5">
                    <div>
                      <p className="font-black">{testimonial.name}</p>
                      <p className="text-sm font-bold text-iron/52">{testimonial.source}</p>
                    </div>
                    <CheckCircle2 className="text-[#8b6a30]" size={24} />
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className="text-sm font-black uppercase text-[#8b6a30]">Contact</p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Plan a garden room from Bradley Lane, Stretford.</h2>
              </div>
              <div className="mt-8 grid gap-3">
                <a className="flex items-center gap-3 rounded-lg bg-white p-4 font-black shadow-premium" href={mailtoUrl}>
                  <Mail className="text-[#8b6a30]" size={22} /> {email}
                </a>
                <a className="flex items-center gap-3 rounded-lg bg-white p-4 font-black shadow-premium" href={phoneHref}>
                  <Phone className="text-[#8b6a30]" size={22} /> {phoneDisplay}
                </a>
                <div className="flex items-center gap-3 rounded-lg bg-white p-4 font-black shadow-premium">
                  <MapPin className="text-[#8b6a30]" size={22} /> {address}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#171a16] px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-24 overflow-hidden rounded-lg bg-white">
              <Image src={assets("trafford-logo.jpg")} alt="Trafford Garden Rooms logo" fill className="object-contain p-1" />
            </span>
            <div>
              <p className="text-lg font-black">{businessName}</p>
              <p className="text-sm font-semibold text-white/58">{address}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a aria-label="Email Trafford Garden Rooms" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d0a04d] hover:text-[#171a16]" href={mailtoUrl}>
              <Mail size={20} />
            </a>
            <a aria-label="Call Trafford Garden Rooms" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d0a04d] hover:text-[#171a16]" href={phoneHref}>
              <Phone size={20} />
            </a>
            <a aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d0a04d] hover:text-[#171a16]" href={facebookUrl} target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
            <a aria-label="Official website" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d0a04d] hover:text-[#171a16]" href={siteUrl} target="_blank" rel="noreferrer">
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
