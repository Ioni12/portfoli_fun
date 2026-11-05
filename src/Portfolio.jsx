import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Briefcase,
  Check,
  ChevronDown,
  Code,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  Trophy,
  Wrench,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const EMAIL = "enkeljongjeta@gmail.com";
const GITHUB = "https://github.com/Ioni12";
const LINKEDIN = "https://www.linkedin.com/in/enkeljon-gjeta-7b137214b/";
const RESUME = "/Enkeljon_Gjeta_Resume.pdf";

const NAV = ["home", "about", "experience", "skills", "projects", "contact"];

const ROTATING = ["BACKEND APIS", "FULL-STACK APPS", "INTERNAL TOOLS", "IOT SYSTEMS"];

const MARQUEE = [
  "JAVA",
  "SPRING BOOT",
  "REACT",
  "NODE.JS",
  "TYPESCRIPT",
  "POSTGRESQL",
  "MONGODB",
  "PRISMA",
  "DOCKER",
  "REST APIS",
  "JWT",
  "ARDUINO",
];

const FACTS = [
  { icon: Briefcase, value: "2+ YRS", label: "Building apps for clients", color: "bg-yellow-400" },
  { icon: Trophy, value: "1ST", label: "Robotics championship as mentor", color: "bg-pink-400" },
  { icon: GraduationCap, value: "B.SC.", label: "Software Engineering", color: "bg-blue-400" },
];

const experience = [
  {
    role: "IT Specialist",
    company: "Albanian Development Company",
    period: "Aug. 2026 – Present",
    description:
      "Keeping the company's day-to-day IT running: setting up workstations and devices, managing user accounts and access, supporting staff, and troubleshooting hardware, software and network issues.",
    color: "bg-yellow-400",
  },
  {
    role: "Backend Developer Intern",
    company: "Sisal",
    period: "Mar. 2026 – May 2026",
    description:
      "Built a banking backend in Java Spring Boot with mentor guidance: multi-currency accounts with generated IBANs, deposits, withdrawals and transfers with live exchange-rate conversion, and balance history. Secured with Spring Security, with global error handling, Caffeine caching, Actuator health checks and Swagger docs on PostgreSQL.",
    color: "bg-blue-400",
  },
  {
    role: "Robotics Competition Mentor",
    company: "Student Robotics Team",
    period: "Feb. 2024 – Mar. 2026",
    description:
      "Led and mentored a student robotics team from concept to competition, overseeing technical work with Arduino and Raspberry Pi and delivering a championship result.",
    color: "bg-pink-400",
  },
];

const skillGroups = [
  { title: "Languages", icon: Code, color: "bg-yellow-400", items: ["Java", "JavaScript", "TypeScript", "Python", "C"] },
  { title: "Backend", icon: Server, color: "bg-green-400", items: ["Spring Boot", "Node.js", "Express", "REST APIs", "JWT / OAuth2"] },
  { title: "Frontend", icon: Code, color: "bg-pink-400", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Data", icon: Database, color: "bg-blue-400", items: ["PostgreSQL", "MongoDB", "Prisma", "JPA"] },
  { title: "Tools", icon: Wrench, color: "bg-purple-400", items: ["Git & GitHub", "Docker", "Vercel", "VS Code"] },
  { title: "Hardware", icon: Cpu, color: "bg-orange-400", items: ["Arduino", "Raspberry Pi", "MQTT", "Networking"] },
];

const projects = [
  {
    id: "fleet",
    title: "Fleet Management System",
    description:
      "Platform for running a company vehicle fleet, with insurance and inspection expiry alerts, service history, fuel reconciliation, department-level permissions and audit logs.",
    highlights: [
      "Vehicles, drivers, insurance and inspections, with alerts before anything expires",
      "Full service and maintenance history for every vehicle",
      "Monthly fuel rollouts, transactions and price reconciliation",
      "Per-module permissions, with managers limited to their own department",
      "Excel import with a validation report, plus Excel exports",
      "Audit log of every change and session-based login",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop",
    github: "https://github.com/Ioni12/fleet-system",
    featured: true,
    color: "bg-yellow-400",
  },
  {
    id: "kepuca",
    title: "Këpuca e Artë",
    description:
      "Live bilingual e-commerce store with product variants, reviews, checkout, order tracking, automated emails and a full admin panel.",
    highlights: [
      "Product catalogue with variants, image galleries and customer reviews",
      "Pay-on-delivery checkout and public order tracking",
      "Automatic order confirmation and status update emails",
      "Admin panel for products, orders and review moderation",
      "Fully translated into English and Albanian",
      "JWT admin login with rate limiting",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=500&fit=crop",
    github: "https://github.com/Ioni12/shoe_shop",
    demo: "https://shoe-shop-rho.vercel.app/",
    featured: true,
    color: "bg-pink-400",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description:
      "Internal tool for tracking products, assets, suppliers and employee equipment, with admin roles, bulk Excel import/export and a full audit trail.",
    highlights: [
      "Products, assets, suppliers, categories and employee equipment in one place",
      "Admin-only actions protected by JWT login",
      "Bulk Excel import and styled Excel exports",
      "Every change written to an audit log",
      "Global search across every tab",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
    github: "https://github.com/Ioni12/inventory_managment_system",
    color: "bg-blue-400",
  },
  {
    id: "fitness",
    title: "Fitness Tracker",
    description:
      "AI-powered fitness tracker for logging workouts, planning sessions and tracking progress, with personalized recommendations.",
    highlights: [
      "Workout logging, exercise templates and workout plans",
      "Progress dashboard",
      "AI recommendations powered by Gemini",
    ],
    tech: ["React", "Node.js", "MongoDB", "Gemini"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    github: "https://github.com/Ioni12/FitJourney",
    demo: "https://fit-journey-psi.vercel.app/",
    color: "bg-green-400",
  },
  {
    id: "hackathon",
    title: "Bank Hackathon App",
    description:
      "Gamified onboarding app built at the Raiffeisen Bank Youth Hackathon, with reward chests, quests and leaderboards.",
    highlights: [
      "Built for a challenge aimed at 18–25 year-old bank customers",
      "Turns the sign-up bonus into a reward-chest opening",
      "Quests, leaderboards and friend invites",
      "Node.js API with MongoDB and JWT login",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    github: "https://github.com/Ioni12/raifaissen_hackathon",
    demo: "https://raifaissen-hackathon.vercel.app/",
    color: "bg-purple-400",
  },
];

const CHIP_COLORS = ["bg-yellow-300", "bg-green-300", "bg-blue-300", "bg-pink-300"];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

// Fades its children in the first time they scroll into view.
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ children, color, tilt = "skew-y-1", dark = false }) => (
  <div
    className={`${
      dark
        ? "bg-black text-white shadow-[12px_12px_0px_0px_rgba(255,20,147,1)]"
        : `${color} shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`
    } border-8 border-black p-6 md:p-8 mb-14 ${tilt}`}
  >
    <h2 className="text-4xl md:text-6xl font-black text-center uppercase tracking-wider">
      {children}
    </h2>
  </div>
);

const Chip = ({ children, i, size = "md" }) => (
  <span
    className={`${CHIP_COLORS[i % 4]} border-black font-black uppercase ${
      size === "sm"
        ? "px-2 py-1 border-2 text-xs"
        : "px-3 py-1.5 border-4 text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
    }`}
  >
    {children}
  </span>
);

const useTypewriter = (words) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    const word = words[index % words.length];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((n) => n + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
};

const btn =
  "border-4 border-black font-black uppercase transition-all hover:-translate-x-1 hover:-translate-y-1";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [openProject, setOpenProject] = useState(null);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const typed = useTypewriter(ROTATING);

  // Scroll progress and active-section tracking
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // Escape closes the project modal; page scroll is locked while it is open
  useEffect(() => {
    if (!openProject) return;
    const onKey = (e) => e.key === "Escape" && setOpenProject(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openProject]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast("Email copied!");
    } catch {
      setToast(EMAIL);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const subject = `Hello from ${form.name}`;
    const body = `${form.message}\n\n${form.name}${form.email ? ` (${form.email})` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setToast("Opening your email app…");
  };

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const inputCls =
    "w-full border-4 border-black px-4 py-3 font-semibold focus:outline-none focus:bg-yellow-100 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all";

  return (
    <div className="min-h-screen bg-white text-black font-bold overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b-8 border-black">
        <div
          className="absolute -bottom-2 left-0 h-2 bg-pink-500"
          style={{ width: `${scrolled * 100}%` }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl sm:text-2xl font-black uppercase tracking-wider bg-yellow-400 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -skew-x-6 hover:-translate-y-0.5 transition-transform"
            >
              ENKELJON GJETA
            </button>

            <div className="hidden xl:flex items-center gap-2">
              {NAV.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`uppercase px-4 py-2.5 border-4 border-black font-black transition-all hover:-translate-y-1 ${
                    activeSection === item
                      ? "bg-pink-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white hover:bg-blue-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href={RESUME}
                download
                className="ml-2 flex items-center gap-2 uppercase px-4 py-2.5 bg-black text-white border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(255,20,147,1)] hover:-translate-y-1 transition-all"
              >
                <Download size={18} /> Resume
              </a>
            </div>

            <button
              className="xl:hidden bg-pink-400 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden bg-white border-t-4 border-black">
            {NAV.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-6 py-4 uppercase font-black text-lg border-b-2 border-black transition-all ${
                  activeSection === item ? "bg-pink-400" : "hover:bg-yellow-400"
                }`}
              >
                {item}
              </button>
            ))}
            <a
              href={RESUME}
              download
              className="flex items-center gap-3 px-6 py-4 uppercase font-black text-lg bg-black text-white"
            >
              <Download size={20} /> Download Resume
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-28 pb-24 bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 overflow-hidden"
      >
        <div className="float-slow absolute top-28 left-6 md:left-12 w-20 h-20 md:w-32 md:h-32 bg-green-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
        <div className="float-slower absolute bottom-24 right-6 md:right-12 w-16 h-16 md:w-24 md:h-24 bg-purple-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
        <div className="float-slow absolute top-1/3 right-[12%] w-12 h-12 bg-orange-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hidden md:block" />

        <div className="text-center z-10 px-4 max-w-5xl w-full">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="flex items-center gap-2 bg-white border-4 border-black px-4 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              Open to work
            </span>
            <span className="flex items-center gap-2 bg-white border-4 border-black px-4 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MapPin size={18} /> Tirana, Albania
            </span>
          </div>

          <div className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              SOFTWARE
              <br />
              <span className="bg-pink-400 px-4 inline-block -skew-x-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-2">
                ENGINEER
              </span>
            </h1>
          </div>

          <div className="bg-black text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,20,147,1)] p-5 md:p-6 mb-10">
            <p className="text-lg md:text-3xl font-black uppercase">
              I BUILD{" "}
              <span className="bg-yellow-400 text-black px-2 inline-block">
                {typed}
                <span className="caret">|</span>
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className={`${btn} px-8 py-5 bg-blue-400 text-lg md:text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
            >
              View Projects
            </button>
            <a
              href={RESUME}
              download
              className={`${btn} flex items-center justify-center gap-3 px-8 py-5 bg-yellow-400 text-lg md:text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
            >
              <Download size={22} /> Resume
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${btn} px-8 py-5 bg-green-400 text-lg md:text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
            >
              Hire Me
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 animate-bounce transition-opacity ${
            scrolled > 0.02 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* Tech marquee */}
      <div className="bg-black text-white border-y-8 border-black overflow-hidden py-4 -rotate-1 scale-105 relative z-20">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {MARQUEE.map((t) => (
                <span
                  key={t}
                  className="text-2xl md:text-3xl font-black uppercase whitespace-nowrap px-5 flex items-center gap-10"
                >
                  {t}
                  <span className="text-yellow-400">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-24 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle color="bg-yellow-400">About Me</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,20,147,1)] p-8 mb-8">
                <p className="text-2xl font-black leading-snug mb-6 uppercase">
                  I've never been good at leaving a problem half-solved.
                </p>
                <p className="text-lg font-semibold leading-relaxed">
                  I'm a software engineer from Tirana. My favourite work is the
                  kind you can see in the real world: robots, sensors, a house
                  that answers to a phone. I've built web apps for clients who
                  trusted me with their business, written backend code at Sisal,
                  and now keep the systems at the Albanian Development Company
                  running. I also mentored a student robotics team all the way
                  to a championship win.
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className={`${btn} bg-black text-white p-4 shadow-[6px_6px_0px_0px_rgba(255,20,147,1)]`}
                >
                  <Github size={28} />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={`${btn} bg-blue-400 p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <Linkedin size={28} />
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className={`${btn} bg-green-400 p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <Mail size={28} />
                </button>
              </div>
            </Reveal>

            <div className="space-y-6">
              {FACTS.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.label} delay={i * 120}>
                    <div className="flex items-center gap-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 hover:-translate-y-1 transition-transform">
                      <div className={`${f.color} p-4 border-4 border-black`}>
                        <Icon size={32} />
                      </div>
                      <div>
                        <div className="text-4xl font-black leading-none">{f.value}</div>
                        <div className="text-lg font-bold uppercase mt-1">{f.label}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-24 px-4 bg-gradient-to-br from-blue-200 via-white to-pink-200"
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle color="bg-blue-400" tilt="-skew-y-1">
            Experience
          </SectionTitle>

          <div className="relative pl-10 md:pl-16">
            <div className="absolute left-3 md:left-6 top-2 bottom-2 w-2 bg-black" aria-hidden />
            <div className="space-y-10">
              {experience.map((job, i) => (
                <Reveal key={job.role} delay={i * 120}>
                  <div className="relative">
                    <div
                      className={`absolute -left-[42px] md:-left-[58px] top-6 w-8 h-8 ${job.color} border-4 border-black rotate-45`}
                      aria-hidden
                    />
                    <div className="bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight">
                            {job.role}
                          </h3>
                          <p
                            className={`inline-block mt-2 ${job.color} border-2 border-black px-2 py-0.5 font-black`}
                          >
                            {job.company}
                          </p>
                        </div>
                        <span className="self-start bg-black text-white px-4 py-2 font-black uppercase text-sm whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-lg font-semibold leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 px-4 bg-gradient-to-br from-purple-300 via-yellow-300 to-green-300 relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-400 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-45 hidden md:block" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle dark tilt="skew-x-2">
            Tech Skills
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={(i % 3) * 100} className="h-full">
                  <div className="h-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`${g.color} p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-black uppercase">{g.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((s, j) => (
                        <Chip key={s} i={j + i}>
                          {s}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle color="bg-pink-400" tilt="-skew-x-2">
            Projects
          </SectionTitle>

          <div className="grid lg:grid-cols-2 gap-12 mb-14">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 150} className="h-full">
                <article className="group h-full flex flex-col bg-white border-8 border-black shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[18px_18px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <button
                    onClick={() => setOpenProject(project)}
                    className="relative overflow-hidden border-b-8 border-black text-left"
                    aria-label={`Open details for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute top-4 right-4 ${project.color} px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase`}
                    >
                      Featured
                    </span>
                  </button>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-3xl font-black mb-4 uppercase">{project.title}</h3>
                    <p className="text-lg font-semibold mb-6 leading-snug">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((t, j) => (
                        <Chip key={t} i={j}>
                          {t}
                        </Chip>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto">
                      <button
                        onClick={() => setOpenProject(project)}
                        className={`${btn} px-6 py-3 bg-yellow-400 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]`}
                      >
                        Details
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`${btn} flex items-center gap-2 px-6 py-3 bg-black text-white shadow-[5px_5px_0px_0px_rgba(255,20,147,1)]`}
                      >
                        <Github size={20} /> Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={`${btn} flex items-center gap-2 px-6 py-3 ${project.color} shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]`}
                        >
                          <ExternalLink size={20} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((project, i) => (
              <Reveal key={project.id} delay={i * 100} className="h-full">
                <article className="group h-full flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <button
                    onClick={() => setOpenProject(project)}
                    className="relative mb-4 overflow-hidden border-4 border-black"
                    aria-label={`Open details for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                  <h3 className="text-xl font-black mb-2 uppercase">{project.title}</h3>
                  <p className="font-semibold text-sm mb-4 leading-snug">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t, j) => (
                      <Chip key={t} i={j} size="sm">
                        {t}
                      </Chip>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => setOpenProject(project)}
                      className={`${project.color} px-3 py-1.5 border-4 border-black font-black uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all`}
                    >
                      Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Code on GitHub"
                      className="bg-black text-white p-2 border-4 border-black shadow-[3px_3px_0px_0px_rgba(255,20,147,1)] hover:-translate-y-0.5 transition-all"
                    >
                      <Github size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        className="bg-white p-2 border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={`${GITHUB}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className={`${btn} inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-lg shadow-[8px_8px_0px_0px_rgba(255,20,147,1)]`}
            >
              <Github size={22} /> More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-br from-pink-300 via-yellow-300 to-blue-300 relative overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-28 h-28 bg-green-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12 hidden md:block" />
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-purple-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-12 hidden md:block" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-black text-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,20,147,1)] p-8 mb-12 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider">
              Let's build something
              <br />
              <span className="bg-yellow-400 text-black px-4 -skew-x-6 inline-block mt-2">
                great!
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <Reveal className="lg:col-span-3">
              <form
                onSubmit={sendMessage}
                className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 space-y-5"
              >
                <p className="text-xl font-black uppercase">Send me a message</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block font-black uppercase text-sm mb-2">Your name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="block font-black uppercase text-sm mb-2">Your email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="block font-black uppercase text-sm mb-2">Message</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-y`}
                  />
                </label>
                <button
                  type="submit"
                  className={`${btn} w-full flex items-center justify-center gap-3 px-8 py-4 bg-pink-400 text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <Send size={22} /> Send Message
                </button>
              </form>
            </Reveal>

            <div className="lg:col-span-2 space-y-6">
              <Reveal delay={100}>
                <div className="bg-pink-400 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={28} />
                    <h3 className="text-xl font-black uppercase">Email</h3>
                  </div>
                  <p className="font-bold break-all mb-4">{EMAIL}</p>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black font-black uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
                  >
                    <Copy size={16} /> Copy
                  </button>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-blue-400 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                  <Github size={28} />
                  <div>
                    <h3 className="text-xl font-black uppercase">GitHub</h3>
                    <p className="font-bold">Ioni12</p>
                  </div>
                  <ExternalLink size={20} className="ml-auto" />
                </a>
              </Reveal>
              <Reveal delay={300}>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-green-400 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                  <Linkedin size={28} />
                  <div>
                    <h3 className="text-xl font-black uppercase">LinkedIn</h3>
                    <p className="font-bold">Enkeljon Gjeta</p>
                  </div>
                  <ExternalLink size={20} className="ml-auto" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-black text-white relative">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400" />
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <p className="font-black uppercase">© {new Date().getFullYear()} Enkeljon Gjeta</p>
          <div className="flex gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 border-2 border-white hover:bg-pink-400 hover:text-black transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 border-2 border-white hover:bg-blue-400 hover:text-black transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="p-2 border-2 border-white hover:bg-green-400 hover:text-black transition-colors"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 bg-yellow-400 p-3 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all ${
          scrolled > 0.12 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={24} />
      </button>

      {/* Toast */}
      <div
        role="status"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-black text-white px-6 py-3 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,20,147,1)] font-black uppercase flex items-center gap-2 transition-all ${
          toast ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Check size={18} /> {toast}
      </div>

      {/* Project details modal */}
      {openProject && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpenProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={openProject.title}
            onClick={(e) => e.stopPropagation()}
            className="modal-in bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,20,147,1)] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative border-b-8 border-black">
              <img src={openProject.image} alt="" className="w-full h-48 md:h-60 object-cover" />
              <button
                onClick={() => setOpenProject(null)}
                aria-label="Close"
                autoFocus
                className="absolute top-4 right-4 bg-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h3
                className={`inline-block text-3xl md:text-4xl font-black uppercase ${openProject.color} border-4 border-black px-3 py-1 mb-5`}
              >
                {openProject.title}
              </h3>
              <p className="text-lg font-semibold mb-6">{openProject.description}</p>
              <h4 className="font-black uppercase mb-3">Highlights</h4>
              <ul className="space-y-2 mb-6">
                {openProject.highlights.map((h) => (
                  <li key={h} className="flex gap-3 font-semibold">
                    <span className="mt-1.5 w-3 h-3 shrink-0 bg-pink-400 border-2 border-black rotate-45" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-8">
                {openProject.tech.map((t, j) => (
                  <Chip key={t} i={j}>
                    {t}
                  </Chip>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={openProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btn} flex items-center gap-2 px-6 py-3 bg-black text-white shadow-[5px_5px_0px_0px_rgba(255,20,147,1)]`}
                >
                  <Github size={20} /> View Code
                </a>
                {openProject.demo && (
                  <a
                    href={openProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`${btn} flex items-center gap-2 px-6 py-3 bg-yellow-400 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]`}
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
