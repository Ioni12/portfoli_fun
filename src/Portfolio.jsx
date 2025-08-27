import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Code,
  Database,
  Server,
  Smartphone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id").forEach((section) => {
      observer.observe(section);
    });

    // Add scroll listener for scroll indicator
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    {
      name: "MongoDB",
      icon: Database,
      color: "bg-green-400",
      shadow: "shadow-green-400",
    },
    {
      name: "Express.js",
      icon: Server,
      color: "bg-purple-400",
      shadow: "shadow-purple-400",
    },
    {
      name: "React",
      icon: Code,
      color: "bg-blue-400",
      shadow: "shadow-blue-400",
    },
    {
      name: "Node.js",
      icon: Server,
      color: "bg-yellow-400",
      shadow: "shadow-yellow-400",
    },
    {
      name: "JavaScript",
      icon: Code,
      color: "bg-pink-400",
      shadow: "shadow-pink-400",
    },

    {
      name: "Tailwind CSS",
      icon: Code,
      color: "bg-teal-400",
      shadow: "shadow-teal-400",
    },
    {
      name: "Git & GitHub",
      icon: Code,
      color: "bg-red-400",
      shadow: "shadow-red-400",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-COMMERCE PLATFORM",
      description:
        "Full-stack MERN application with payment integration, user authentication, and admin dashboard. Built for maximum performance and scalability.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true,
      color: "bg-pink-400",
      shadow: "shadow-pink-400",
    },
    {
      id: 2,
      title: "TASK MANAGEMENT APP",
      description:
        "Collaborative project management tool with real-time updates and team features. Socket.io powers the real-time communication.",
      tech: ["React", "Express", "Socket.io", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true,
      color: "bg-blue-400",
      shadow: "shadow-blue-400",
    },
    {
      id: 3,
      title: "SOCIAL DASHBOARD",
      description:
        "Analytics dashboard for social media management with beautiful data visualization and comprehensive reporting.",
      tech: ["React", "Chart.js", "Node.js", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: false,
      color: "bg-yellow-400",
      shadow: "shadow-yellow-400",
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black font-bold overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-black uppercase tracking-wider bg-yellow-400 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] skew-x-12">
              ENKELJON GJETA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`uppercase px-6 py-3 border-4 border-black font-black text-lg transition-all transform hover:-translate-y-1 ${
                      activeSection === item
                        ? "bg-pink-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-white hover:bg-blue-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden bg-pink-400 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-4 border-black">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-4 uppercase font-black text-lg border-b-2 border-black hover:bg-yellow-400 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300"
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-45"></div>

        <div className="text-center z-10 px-4 max-w-5xl">
          <div className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 skew-y-1">
            <h1 className="text-6xl md:text-9xl font-black mb-6 uppercase tracking-tighter leading-none">
              FULL STACK
              <br />
              <span className="bg-pink-400 px-4 inline-block skew-x-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                DEVELOPER
              </span>
            </h1>
          </div>

          <div className="bg-black text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,20,147,1)] p-6 mb-8 -skew-x-2">
            <p className="text-xl md:text-3xl font-black uppercase">
              MERN STACK SPECIALIST WHO BUILDS
              <br />
              <span className="bg-yellow-400 text-black px-2">BRUTAL</span> WEB
              EXPERIENCES
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-6 bg-blue-400 border-6 border-black font-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1 skew-x-6"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-6 bg-green-400 border-6 border-black font-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1 -skew-x-6"
            >
              HIRE ME NOW!
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 animate-bounce">
              <ChevronDown className="text-black" size={32} />
            </div>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-pink-400 to-blue-400 border-b-8 border-black"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-yellow-400 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 mb-16 skew-y-1">
            <h2 className="text-6xl font-black text-center uppercase tracking-wider">
              ABOUT ME
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.about
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(255,20,147,1)] p-8 mb-8">
                <p className="text-xl font-bold leading-relaxed mb-6 uppercase">
                  I'M A PASSIONATE FULL-STACK DEVELOPER WHO DOESN'T MESS AROUND.
                  I BUILD FAST, SCALABLE WEB APPS THAT ACTUALLY WORK.
                </p>
                <p className="text-lg font-semibold leading-relaxed mb-6">
                  My coding journey started with curiosity and evolved into an
                  obsession with creating BOLD digital solutions that solve real
                  problems.
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Ioni12"
                  className="bg-black text-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,20,147,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,20,147,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1"
                  target="_blank"
                >
                  <Github size={32} />
                </a>
                <a
                  href="#"
                  className="bg-blue-400 p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="#"
                  className="bg-green-400 p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible.about
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-black text-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,255,255,1)] p-8 -skew-x-3">
                <h3 className="text-3xl font-black mb-8 uppercase text-yellow-400">
                  WHAT I DO
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-pink-400 text-black p-4 border-4 border-white skew-x-3">
                    <Code size={32} />
                    <div>
                      <h4 className="font-black text-xl uppercase">
                        FRONTEND DEV
                      </h4>
                      <p className="font-bold">React, Next.js, TypeScript</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-green-400 text-black p-4 border-4 border-white skew-x-3">
                    <Server size={32} />
                    <div>
                      <h4 className="font-black text-xl uppercase">
                        BACKEND DEV
                      </h4>
                      <p className="font-bold">Node.js, Express, REST APIs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-blue-400 text-black p-4 border-4 border-white skew-x-3">
                    <Database size={32} />
                    <div>
                      <h4 className="font-black text-xl uppercase">
                        DATABASE PRO
                      </h4>
                      <p className="font-bold">MongoDB, PostgreSQL, Redis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gradient-to-br from-purple-300 via-yellow-300 to-green-300 relative"
      >
        <div className="absolute top-10 right-10 w-40 h-40 bg-pink-400 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-black text-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,20,147,1)] p-8 mb-16 skew-x-3">
            <h2 className="text-6xl font-black text-center uppercase tracking-wider">
              TECH SKILLS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`bg-white border-6 border-black ${
                    skill.shadow
                  } shadow-[8px_8px_0px_0px] p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px] ${
                    index % 2 === 0 ? "skew-x-3" : "-skew-x-3"
                  } ${
                    isVisible.skills
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center">
                    <div
                      className={`${skill.color} p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mr-4`}
                    >
                      <Icon size={40} />
                    </div>
                    <h3 className="text-3xl font-black uppercase text-center">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 border-b-8 border-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-pink-400 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 mb-16 -skew-x-3">
            <h2 className="text-6xl font-black text-center uppercase tracking-wider">
              BRUTAL PROJECTS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 transform hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] ${
                    index % 2 === 0 ? "skew-y-1" : "-skew-y-1"
                  } ${
                    isVisible.projects
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden border-b-8 border-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div
                      className={`absolute top-4 right-4 ${project.color} px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase`}
                    >
                      FEATURED
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-black mb-4 uppercase">
                      {project.title}
                    </h3>
                    <p className="text-lg font-bold mb-6 leading-tight">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-4 py-2 border-4 border-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                            [
                              "bg-yellow-400",
                              "bg-green-400",
                              "bg-blue-400",
                              "bg-pink-400",
                            ][techIndex % 4]
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-3 px-6 py-3 bg-black text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,20,147,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,20,147,1)] transition-all font-black uppercase transform hover:-translate-x-1 hover:-translate-y-1"
                      >
                        <Github size={20} />
                        CODE
                      </a>
                      <a
                        href={project.demo}
                        className={`flex items-center gap-3 px-6 py-3 ${project.color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all font-black uppercase transform hover:-translate-x-1 hover:-translate-y-1`}
                      >
                        <ExternalLink size={20} />
                        DEMO
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-white border-6 border-black ${
                    project.shadow
                  } shadow-[8px_8px_0px_0px] p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px] ${
                    index % 3 === 0
                      ? "skew-x-2"
                      : index % 3 === 1
                      ? "-skew-x-2"
                      : "skew-y-1"
                  }`}
                >
                  <div className="relative mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover border-4 border-black"
                    />
                    <div
                      className={`absolute -top-2 -right-2 ${project.color} px-2 py-1 border-4 border-black font-black text-xs uppercase`}
                    >
                      NEW
                    </div>
                  </div>

                  <h3 className="text-xl font-black mb-3 uppercase">
                    {project.title}
                  </h3>
                  <p className="font-bold text-sm mb-4 leading-tight">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 border-2 border-black font-black text-xs uppercase ${
                          [
                            "bg-yellow-300",
                            "bg-green-300",
                            "bg-blue-300",
                            "bg-pink-300",
                          ][techIndex % 4]
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="bg-black text-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,20,147,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,20,147,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      className={`${project.color} p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-pink-300 via-yellow-300 to-blue-300 relative"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-12"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="bg-black text-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,20,147,1)] p-8 mb-12 skew-x-2">
            <h2 className="text-6xl font-black uppercase tracking-wider">
              LET'S BUILD SOMETHING
              <br />
              <span className="bg-yellow-400 text-black px-4 -skew-x-6 inline-block">
                EPIC!
              </span>
            </h2>
          </div>

          <div className="bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 mb-12 -skew-x-1">
            <p className="text-2xl font-black uppercase mb-4">
              READY TO START YOUR NEXT PROJECT?
            </p>
            <p className="text-lg font-bold">
              I'M ALWAYS DOWN TO DISCUSS NEW IDEAS AND BUILD SOMETHING AMAZING
              TOGETHER!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-pink-400 p-8 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] skew-x-3 transform hover:-translate-y-2 transition-all">
              <Mail className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-black mb-2 uppercase">EMAIL</h3>
              <p className="font-bold">your.email@example.com</p>
            </div>
            <div className="bg-blue-400 p-8 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -skew-x-3 transform hover:-translate-y-2 transition-all">
              <Github className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-black mb-2 uppercase">GITHUB</h3>
              <p className="font-bold">github.com/yourusername</p>
            </div>
            <div className="bg-green-400 p-8 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] skew-x-3 transform hover:-translate-y-2 transition-all">
              <Linkedin className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-black mb-2 uppercase">LINKEDIN</h3>
              <p className="font-bold">linkedin.com/in/yourprofile</p>
            </div>
          </div>

          <a
            href="mailto:your.email@example.com"
            className="inline-block px-12 py-6 bg-yellow-400 border-8 border-black font-black text-2xl uppercase shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-2 hover:-translate-y-2 skew-x-6"
          >
            SEND MESSAGE!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400"></div>
        <div className="absolute -top-4 left-10 w-16 h-16 bg-green-400 border-4 border-white rotate-45"></div>
        <div className="absolute -top-4 right-10 w-12 h-12 bg-purple-400 border-4 border-white"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="bg-white text-black border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,20,147,1)] p-6 inline-block -skew-x-3">
            <p className="font-black uppercase text-lg">
              © 2025 YOUR NAME • BUILT WITH REACT & MAXIMUM BRUTALITY! 🔥
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
