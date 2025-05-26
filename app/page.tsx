"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Smartphone,
  Code,
  Database,
  GitBranch,
  Coins,
  Apple,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Flutter Development",
      description:
        "Cross-platform mobile app development with Flutter, creating beautiful and performant applications for iOS and Android.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Android Native",
      description:
        "Native Android development using Java and Kotlin, with expertise in Android SDK, Material Design, and modern Android architecture.",
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "iOS Development",
      description:
        "Native iOS application development using Swift, with experience in UIKit, SwiftUI, and iOS design patterns.",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Blockchain Development",
      description:
        "Smart contract development using Solidity, DeFi protocols, and decentralized application (dApp) development.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Integration",
      description: "API integration, database management, and backend services integration for mobile applications.",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Version Control",
      description:
        "Git version control, collaborative development workflows, and project management using modern development tools.",
    },
  ]

  const projects = [
    {
      title: "Share Bill App",
      description:
        "A Flutter application designed to help users split bills and expenses among friends or groups. Features include expense tracking, bill splitting calculations, and group management with an intuitive user interface.",
      tech: ["Flutter", "Dart", "Mobile"],
      link: "https://github.com/duongdre/share_bill",
    },
    {
      title: "Flutter Riverpod x Retrofit",
      description:
        "A comprehensive Flutter project demonstrating the integration of Riverpod for state management and Retrofit for network operations. Showcases clean architecture patterns and modern Flutter development practices.",
      tech: ["Flutter", "Riverpod", "Retrofit", "Clean Architecture"],
      link: "https://github.com/duongdre/flutter_riverpod_x_retrofit",
    },
    {
      title: "Customer Service System",
      description:
        "A comprehensive customer service management system built to handle customer inquiries, support tickets, and service requests. Features include ticket tracking, customer management, and analytics dashboard.",
      tech: ["Flutter", "Backend API", "Dashboard", "Management System"],
      link: "https://github.com/duongdre/customer-service-system",
    },
  ]

  const techStack = ["Flutter", "Android (Java/Kotlin)", "iOS (Swift)", "Solidity", "Blockchain"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Duong Dre
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {["About", "Skills", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t">
              <ul className="py-4 space-y-2">
                {["About", "Skills", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <div className="animate-fade-in-up">
            {/* Avatar */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/avatar.jpg"
                  alt="Duong Dre"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white/20 shadow-2xl object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Duong Dre</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Mobile Developer • Flutter Specialist • Blockchain Engineer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white transition-all duration-300"
                asChild
              >
                <a href="#portfolio">View My Work</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Duong Dre"
                    width={150}
                    height={150}
                    className="rounded-2xl shadow-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-center lg:text-left">
                    I'm a passionate mobile developer with extensive expertise in creating high-quality, performant
                    applications across multiple platforms. My primary focus is on Flutter development, where I build
                    beautiful, cross-platform mobile applications that deliver exceptional user experiences. I also have
                    strong experience in native Android development using Java and Kotlin, as well as iOS development
                    with Swift. Additionally, I'm skilled in blockchain development with Solidity, allowing me to create
                    innovative decentralized applications and smart contracts.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default shadow-md"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{skill.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on exciting projects, or simply
                  connecting with fellow developers. Feel free to reach out!
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                {[
                  { icon: <Github className="w-6 h-6" />, href: "https://github.com/duongdre", label: "GitHub" },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    href: "https://www.linkedin.com/in/dev-duong-nguyenanh/",
                    label: "LinkedIn",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                    href: "https://www.facebook.com/BMKDuongDre/",
                    label: "Facebook",
                  },
                  { icon: <Mail className="w-6 h-6" />, href: "mailto:dev.duong.nguyenanh@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2025 Duong Dre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
