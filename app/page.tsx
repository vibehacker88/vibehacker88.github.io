'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, Leaf, Binary, BrainCircuit, MapPin } from 'lucide-react';

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
    { name: 'Próspera', href: '#prospera' },
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
                Tauche ein in die Welt von Clifford A. Pickover, Satoshi Nakamoto, S.C.H. und Harvey Dubner. 
                Entdecke die Schönheit der Mathematik und meine Vision für ein naturverbundenes Leben in Próspera.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#pickover"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  Zu den Rätseln <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
                <a
                  href="#prospera"
                  className="inline-flex items-center justify-center px-8 py-3 border border-stone-300 text-base font-medium rounded-md text-stone-700 bg-white hover:bg-stone-50 transition-colors shadow-sm"
                >
                  Meine Próspera-Pläne <Leaf className="ml-2 -mr-1 h-5 w-5 text-emerald-600" />
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
                  src="https://picsum.photos/seed/fractalmath/800/1000"
                  alt="Abstrakte mathematische Darstellung"
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
                  name: 'Satoshi Nakamoto',
                  role: 'Kryptografie & Bitcoin',
                  desc: 'Das größte Rätsel der modernen Finanzwelt. Nicht nur die Identität von Nakamoto ist ein Mysterium, sondern auch die zugrundeliegende kryptografische Eleganz der Blockchain-Technologie und des Proof-of-Work-Algorithmus.',
                  seed: 'crypto'
                },
                {
                  name: 'S.C.H.',
                  role: 'Zahlenmystik & Logik',
                  desc: 'Ein weiterer faszinierender Geist in der Welt der Zahlenrätsel. Die komplexen Muster und logischen Verknüpfungen in den Arbeiten von S.C.H. erfordern oft ein radikales Umdenken und unkonventionelle Lösungsansätze.',
                  seed: 'logic'
                },
                {
                  name: 'Harvey Dubner',
                  role: 'Primzahlen & Mathematik',
                  desc: 'Bekannt für seine Beiträge zur Suche nach großen Primzahlen und die Dubner-Vermutung. Seine Arbeit an Repunit-Primzahlen und anderen speziellen Zahlenformen ist ein Fest für jeden Zahlentheoretiker.',
                  seed: 'primes'
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

        {/* Prospera Section */}
        <section id="prospera" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://picsum.photos/seed/roatan/1920/1080"
              alt="Roatan Nature"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-200 text-sm font-medium mb-6">
                    <MapPin size={16} /> Zukunftspläne
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Auswandern nach <a href="https://de.wikipedia.org/wiki/Pr%C3%B3spera" target="_blank" rel="noopener noreferrer" className="underline decoration-emerald-500 hover:text-emerald-300 transition-colors">Próspera</a>
                  </h2>
                  <div className="space-y-6 text-emerald-50 text-lg">
                    <p>
                      Für das nächste Jahr plane ich einen großen Schritt: Die Auswanderung nach Próspera auf der Insel Roatán (Honduras). 
                      Dieses innovative Projekt einer Privatstadt fasziniert mich durch seine neuen Ansätze des Zusammenlebens und der Governance.
                    </p>
                    <p>
                      <strong>Allerdings warte ich noch.</strong> Ich werde erst umziehen, wenn die neuen, naturnahen Häuser fertiggestellt sind. 
                      Mein Ziel ist es nicht, im dichten Hauptgebäude von Próspera zu wohnen.
                    </p>
                    <div className="bg-emerald-800/40 p-6 rounded-xl border border-emerald-700/50 backdrop-blur-sm mt-8">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Leaf className="text-emerald-400" /> Natur & Naturschutz
                      </h3>
                      <p className="text-emerald-100 text-base">
                        Mir ist eine tiefe Verbindung zur Natur und aktiver Naturschutz extrem wichtig. 
                        Mein zukünftiges Zuhause in Próspera soll sich harmonisch in die tropische Umgebung einfügen, 
                        sodass ich meine Arbeit an Zahlenrätseln in absoluter Ruhe und im Einklang mit der Umwelt fortsetzen kann.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-5 mt-12 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="https://picsum.photos/seed/junglehouse/400/400" alt="Naturnahes Wohnen" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="https://picsum.photos/seed/roatanbeach/400/600" alt="Roatan Natur" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="https://picsum.photos/seed/conservation/400/600" alt="Naturschutz" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="https://picsum.photos/seed/mathnature/400/400" alt="Mathematik in der Natur" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </motion.div>
              </div>
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
                Die Schnittstelle zwischen komplexen Zahlenrätseln, Kryptografie und einem naturnahen Leben in der Zukunft.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://vibehacker88.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">VibeHacker88 GitHub</a></li>
                <li><a href="https://de.wikipedia.org/wiki/Clifford_A._Pickover" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Clifford A. Pickover (Wiki)</a></li>
                <li><a href="https://de.wikipedia.org/wiki/Pr%C3%B3spera" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Próspera (Wiki)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <p className="text-sm mb-2">Für Austausch über Rätsel, Mathematik oder Próspera:</p>
              <a href="https://vibehacker88.github.io" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 text-sm font-medium">
                Besuche meine Hauptseite
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} VibeHacker88. Alle Rechte vorbehalten.</p>
            <p className="mt-2 md:mt-0 text-stone-500">
              Inspiriert von der Struktur klassischer Vereinsseiten, neu interpretiert für die Welt der Zahlen.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
