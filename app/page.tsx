'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, Leaf, Binary, BrainCircuit, MapPin, Github, Heart } from 'lucide-react';

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
    { name: 'Über mich', href: '#about' },
    { name: 'Meine Idole', href: '#idols' },
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
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-50 via-stone-50 to-teal-50"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wider mb-6">
                WILLKOMMEN AUF MEINER SEITE
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 tracking-tight mb-8">
                Ich bin <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
                  VibeHacker88
                </span>
              </h1>
              <p className="mt-4 text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Ein leidenschaftlicher Fan von Mathematik, Philosophie und den großen Denkern unserer Zeit. 
                Hier teile ich meine Bewunderung für <strong>Clifford A. Pickover</strong>, <strong>Nick Bostrom</strong>, 
                und meine Lieblings-YouTuber <strong>Kuchen TV</strong>, <strong>Herr Kuchen</strong>, <strong>Shurjoka</strong> und <strong>Tomatolix</strong>.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://github.com/vibehacker88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <Github className="mr-2 h-5 w-5" /> Mein GitHub
                </a>
                <a
                  href="#idols"
                  className="inline-flex items-center justify-center px-8 py-3 border border-stone-300 text-base font-medium rounded-md text-stone-700 bg-white hover:bg-stone-50 transition-colors shadow-sm"
                >
                  Meine Idole entdecken <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                  <Heart className="text-emerald-600" size={32} />
                  Über mich
                </h2>
                <div className="prose prose-lg prose-stone text-stone-600">
                  <p>
                    Hallo! Ich bin <strong>VibeHacker88</strong> und diese Website ist meine persönliche Hommage an die Menschen, 
                    die mein Denken und meine Interessen geprägt haben.
                  </p>
                  <p>
                    Ich bin ein riesiger Fan von <strong>Clifford A. Pickover</strong> und seinen faszinierenden mathematischen Rätseln, 
                    sowie von <strong>Nick Bostrom</strong> und seinen tiefgründigen philosophischen Überlegungen zu KI und der Zukunft der Menschheit.
                  </p>
                  <p>
                    Aber auch im Bereich Unterhaltung habe ich meine absoluten Favoriten: <strong>Kuchen TV</strong> und <strong>Herr Kuchen</strong> 
                    begeistern mich mit ihrem einzigartigen Humor, <strong>Shurjoka</strong> mit ihrer kreativen Energie, 
                    und <strong>Tomatolix</strong> mit seinen spannenden Einblicken in verschiedene Themen.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-10 lg:mt-0 relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[400px] bg-emerald-100 flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-emerald-700 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">V88</span>
                  </div>
                  <p className="text-stone-700 font-medium text-lg">VibeHacker88</p>
                  <p className="text-stone-500">Mathematik • Philosophie • YouTube</p>
                  <a 
                    href="https://github.com/vibehacker88" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    <Github size={20} /> github.com/vibehacker88
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Idols Section */}
        <section id="idols" className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Meine Idole</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Diese brillanten Köpfe aus Wissenschaft, Philosophie und Unterhaltung inspirieren mich täglich.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Clifford A. Pickover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative bg-stone-200">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Clifford_A._Pickover.jpg/440px-Clifford_A._Pickover.jpg"
                    alt="Clifford A. Pickover"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-1">Clifford A. Pickover</h3>
                  <p className="text-sm font-medium text-emerald-600 mb-4">Mathematiker & Wissenschaftsautor</p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Ein produktiver Autor und Erfinder, der die Art und Weise, wie wir über Mathematik, Muster und das Universum denken, 
                    maßgeblich geprägt hat. Besonders seine Zahlenrätsel und die Entdeckung der <strong>Vampirzahlen</strong> faszinieren mich.
                  </p>
                </div>
              </motion.div>

              {/* Nick Bostrom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative bg-stone-200">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nick_Bostrom_-_Future_of_Life_Institute_-_2015_%28cropped%29.jpg/440px-Nick_Bostrom_-_Future_of_Life_Institute_-_2015_%28cropped%29.jpg"
                    alt="Nick Bostrom"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-1">Nick Bostrom</h3>
                  <p className="text-sm font-medium text-emerald-600 mb-4">Philosoph & Direktor FHI Oxford</p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Ein schwedischer Professor für Philosophie an der Oxford University und Direktor des 
                    <strong>Future of Humanity Institute</strong>. Seine Arbeiten zur Simulationstheorie und den Risiken 
                    künstlicher Intelligenz sind bahnbrechend.
                  </p>
                </div>
              </motion.div>

              {/* Kuchen TV / Herr Kuchen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative bg-stone-200">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
                    alt="Kuchen TV & Herr Kuchen"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-1">Kuchen TV & Herr Kuchen</h3>
                  <p className="text-sm font-medium text-emerald-600 mb-4">YouTuber & Entertainer</p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Ein dynamisches Duo der deutschen YouTube-Szene. Mit ihrem einzigartigen Humor und kreativen Content 
                    haben sie eine riesige Fangemeinde aufgebaut. Ihre Videos sind immer unterhaltsam und oft überraschend tiefgründig.
                  </p>
                </div>
              </motion.div>

              {/* Shurjoka */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative bg-stone-200">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
                    alt="Shurjoka"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-1">Shurjoka</h3>
                  <p className="text-sm font-medium text-emerald-600 mb-4">YouTuberin & Content Creator</p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Eine kreative Persönlichkeit der deutschen YouTube-Szene. Mit ihrer einzigartigen Energie und ihrem 
                    authentischen Stil begeistert sie ihre Zuschauer und schafft es, komplexe Themen auf unterhaltsame Weise zu vermitteln.
                  </p>
                </div>
              </motion.div>

              {/* Tomatolix */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1"
              >
                <div className="h-64 relative bg-stone-200">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
                    alt="Tomatolix"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-1">Tomatolix</h3>
                  <p className="text-sm font-medium text-emerald-600 mb-4">YouTuber & Dokumentarfilmer</p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Bekannt für seine spannenden Einblicke in verschiedene Themen und seine dokumentarischen Formate. 
                    Seine Videos bieten faszinierende Perspektiven auf Technologie, Gesellschaft und digitale Kultur.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prospera Section */}
        <section id="prospera" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-br from-emerald-800 to-teal-900"></div>
          
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
                  className="bg-emerald-800/30 p-6 rounded-2xl border border-emerald-700/50"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BrainCircuit className="text-emerald-400" /> Warum Próspera?
                  </h3>
                  <ul className="space-y-3 text-emerald-100">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-emerald-400 mt-1 shrink-0" size={16} />
                      <span>Innovative Governance-Modelle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-emerald-400 mt-1 shrink-0" size={16} />
                      <span>Naturverbundenes Leben auf Roatán</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-emerald-400 mt-1 shrink-0" size={16} />
                      <span>Internationale Community von Thinkern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-emerald-400 mt-1 shrink-0" size={16} />
                      <span>Freiheit für kreative und mathematische Arbeit</span>
                    </li>
                  </ul>
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
                Die Schnittstelle zwischen Mathematik, Philosophie und Unterhaltung. 
                Ein Fan von Pickover, Bostrom, Kuchen TV, Herr Kuchen, Shurjoka und Tomatolix.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/vibehacker88" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Mein GitHub Profil</a></li>
                <li><a href="https://de.wikipedia.org/wiki/Clifford_A._Pickover" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Clifford A. Pickover (Wiki)</a></li>
                <li><a href="https://de.wikipedia.org/wiki/Nick_Bostrom" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Nick Bostrom (Wiki)</a></li>
                <li><a href="https://de.wikipedia.org/wiki/Pr%C3%B3spera" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Próspera (Wiki)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <p className="text-sm mb-2">Für Austausch über Mathematik, Philosophie oder Próspera:</p>
              <a href="https://github.com/vibehacker88" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 text-sm font-medium">
                Besuche mein GitHub Profil
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} VibeHacker88. Alle Rechte vorbehalten.</p>
            <p className="mt-2 md:mt-0 text-stone-500">
              Inspiriert von Clifford A. Pickover, Nick Bostrom, Kuchen TV, Herr Kuchen, Shurjoka und Tomatolix.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
