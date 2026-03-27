'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, BrainCircuit, Binary } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Clifford A. Pickover', href: '#pickover' },
    { name: 'Weitere Rätselmeister', href: '#masters' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-emerald-700 text-white p-2 rounded-lg group-hover:bg-emerald-600 transition-colors">
              <Binary size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-900">VibeHacker88</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-600 hover:text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-stone-100 py-4 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-700 hover:text-emerald-700 p-2 rounded-md hover:bg-stone-50"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/seed/forestmath/1920/1080?blur=2"
              alt="Background blending nature and mathematics"
              fill
              className="object-cover opacity-20"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/95 to-stone-50"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wider mb-6">
                MATHEMATIK & NATURVERBUNDENHEIT
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 tracking-tight mb-8">
                Die Faszination der <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
                  Zahlenrätsel
                </span>
              </h1>
              <p className="mt-4 text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Willkommen auf der Seite von <a href="https://vibehacker88.github.io" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-medium">VibeHacker88</a>. 
                Tauche ein in die Welt von Clifford A. Pickover, Harvey Dubner, Kuchen TV und Herr Kuchen. 
                Entdecke die Schönheit der Mathematik und die Faszination von Zahlenrätseln.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#pickover"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  Zu den Rätseln <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
                <a
                  href="#masters"
                  className="inline-flex items-center justify-center px-8 py-3 border border-stone-300 text-base font-medium rounded-md text-stone-700 bg-white hover:bg-stone-50 transition-colors shadow-sm"
                >
                  Weitere Rätselmeister <BrainCircuit className="ml-2 -mr-1 h-5 w-5 text-emerald-600" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pickover Section */}
        <section id="pickover" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                  <BrainCircuit className="text-emerald-600" size={32} />
                  Clifford A. Pickover
                </h2>
                <div className="prose prose-lg prose-stone text-stone-600">
                  <p>
                    Im Kern beschäftigt sich diese Seite mit den faszinierenden Arbeiten von <a href="https://de.wikipedia.org/wiki/Clifford_A._Pickover" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Clifford A. Pickover</a>. 
                    Als produktiver Autor, Wissenschaftler und Erfinder hat er die Art und Weise, wie wir über Mathematik, Muster und das Universum denken, maßgeblich geprägt.
                  </p>
                  <p>
                    Besonders seine Zahlenrätsel und mathematischen Entdeckungen, wie die <strong>Vampirzahlen</strong> (Zahlen, die als Produkt von zwei &quot;Reißzähnen&quot; geschrieben werden können, welche die gleichen Ziffern wie die ursprüngliche Zahl enthalten), fesseln mich seit Jahren.
                  </p>
                  <p>
                    Pickovers Fähigkeit, komplexe mathematische Konzepte mit Kunst, Philosophie und Science-Fiction zu verweben, macht seine Rätsel nicht nur zu logischen Herausforderungen, sondern zu echten Bewusstseinserweiterungen.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-10 lg:mt-0 relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[500px]"
              >
                <Image
                  src="https://picsum.photos/seed/cliffordpickover/800/1000"
                  alt="Clifford A. Pickover - Mathematiker und Autor"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg">&quot;Mathematik ist der Webstuhl, auf dem Gott das Universum webt.&quot;</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Masters Section */}
        <section id="masters" className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Weitere Rätselmeister</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Neben Pickover gibt es weitere brillante Köpfe, deren kryptografische und mathematische Herausforderungen diese Seite prägen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Kuchen TV',
                  role: 'Entertainment & Rätsel',
                  desc: 'Ein einzigartiger Content-Creator, der mit humorvollen und kreativen Ansätzen die Welt der Rätsel und mathematischen Kuriositäten einem breiten Publikum näherbringt.',
                  seed: 'entertainmentpuzzle'
                },
                {
                  name: 'Herr Kuchen',
                  role: 'Mathematische Philosophie',
                  desc: 'Ein mysteriöser Geist in der Welt der Zahlenrätsel. Die komplexen Muster und logischen Verknüpfungen in den Arbeiten von Herr Kuchen erfordern oft unkonventionelle Lösungsansätze.',
                  seed: 'philosophymath'
                },
                {
                  name: 'Harvey Dubner',
                  role: 'Primzahlen & Mathematik',
                  desc: 'Bekannt für seine Beiträge zur Suche nach großen Primzahlen und die Dubner-Vermutung. Seine Arbeit an Repunit-Primzahlen und anderen speziellen Zahlenformen ist ein Fest für jeden Zahlentheoretiker.',
                  seed: 'harveydubner'
                }
              ].map((master, index) => (
                <motion.div
                  key={master.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={`https://picsum.photos/seed/${master.seed}/600/400`}
                      alt={master.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-1">{master.name}</h3>
                    <p className="text-sm font-medium text-emerald-600 mb-4">{master.role}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{master.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <Binary size={24} className="text-emerald-500" />
                <span className="text-xl font-bold tracking-tight">VibeHacker88</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Die Schnittstelle zwischen komplexen Zahlenrätseln, Mathematik und kreativen Denkansätzen.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://vibehacker88.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">VibeHacker88 GitHub</a></li>
                <li><a href="https://de.wikipedia.org/wiki/Clifford_A._Pickover" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Clifford A. Pickover (Wiki)</a></li>
                <li><a href="https://de.wikipedia.org/wiki/Harvey_Dubner" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Harvey Dubner (Wiki)</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} VibeHacker88. Alle Rechte vorbehalten.</p>
            <p className="mt-2 md:mt-0 text-stone-500">
              Inspiriert von der Struktur klassischer Vereinsseiten, neu interpretiert für die Welt der Zahlenrätsel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
