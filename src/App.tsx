import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Settings, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  ExternalLink,
  Cpu,
  Hammer,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Bubut Presisi',
      description: 'Pengerjaan komponen mesin dengan tingkat akurasi tinggi menggunakan mesin bubut industri.',
      icon: <Settings className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5f9c4739?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Las Konstruksi',
      description: 'Layanan pengelasan listrik, argon, dan karbit untuk berbagai kebutuhan konstruksi logam.',
      icon: <Hammer className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Fabrikasi Mesin',
      description: 'Perancangan dan pembuatan mesin-mesin industri kustom sesuai spesifikasi pelanggan.',
      icon: <Cpu className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Servis Komponen',
      description: 'Perbaikan suku cadang mesin yang aus atau rusak untuk mengembalikan fungsi optimal.',
      icon: <Wrench className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1513828742140-ccaa34f33253?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const features = [
    'Teknisi Berpengalaman 10+ Tahun',
    'Pengerjaan Cepat & Tepat Waktu',
    'Material Berkualitas Standar Industri',
    'Harga Kompetitif',
    'Garansi Hasil Pengerjaan'
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-lg shadow-lg shadow-orange-900/20">
              <Settings className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-display uppercase tracking-widest italic text-white">Harapan</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
            <a href="#hero" className="hover:text-orange-500 transition-colors">Beranda</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Layanan</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">Tentang</a>
            <a href="#contact" className="px-6 py-2.5 bg-orange-500 text-black hover:bg-orange-400 transition-all rounded-full flex items-center gap-2 font-black">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-black p-8 flex flex-col items-center justify-center gap-8 text-2xl font-black uppercase tracking-widest"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}>
              <X className="w-10 h-10" />
            </button>
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>Beranda</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Layanan</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Tentang Kami</a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-orange-500 text-black px-8 py-4 rounded-full"
            >
              Hubungi Kami
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540104680436-1215907409f8?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Workshop Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-orange-500 font-bold uppercase tracking-[0.4em] mb-6 text-[10px] border-l-2 border-orange-500 pl-4">
              Metalworking & Engineering Specialist
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black italic tracking-tighter leading-[1.1] mb-8 uppercase">
              <span className="text-white block opacity-90">BENGKEL LAS</span>
              <span className="text-orange-500 block">& BUBUT HARAPAN</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed font-light tracking-wide border-l-2 border-white/10 pl-6">
              Membangun solusi logam yang presisi dan tahan lama. Kami melayani kebutuhan Bubut, Las, dan Fabrikasi untuk industri dengan standar kualitas tertinggi di Jombang.
            </p>
            <div className="flex flex-wrap gap-5">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-orange-500 text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/10"
              >
                Mulai Diskusi Projek
              </a>
              <a 
                href="#services" 
                className="px-10 py-5 border border-white/10 font-black uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-all flex items-center gap-3 backdrop-blur-sm"
              >
                Lihat Layanan <ChevronRight className="w-4 h-4 text-orange-500" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 hidden lg:block opacity-20">
          <div className="w-full h-full border-t border-l border-white/10 rounded-tl-[100px]" />
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Tahun Pengalaman', val: '10+' },
            { label: 'Projek Selesai', val: '2500+' },
            { label: 'Teknisi Ahli', val: '15' },
            { label: 'Klien Puas', val: '100%' }
          ].map((stat, i) => (
            <div key={i} className="text-black text-center md:text-left">
              <p className="text-5xl font-black italic mb-1">{stat.val}</p>
              <p className="text-xs uppercase font-bold tracking-widest opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8 tracking-tight leading-none text-balance">
                LAYANAN <span className="text-orange-500">UNGGULAN KAMI.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Dari perbaikan komponen kecil hingga pengerjaan konstruksi skala besar, kami memiliki keahlian dan peralatan untuk menangani proyek Anda dengan presisi.
              </p>
            </div>
            <a href="#" className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 hover:text-white transition-colors py-2 border-b border-orange-500/20">
              SEMUA LAYANAN <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-[#151515] overflow-hidden rounded-2xl border border-white/5"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-orange-500/10 text-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase italic mb-4">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2 group-hover:text-orange-500 transition-colors">
                    Detail <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-[#111] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-[80px] opacity-20" />
             <div className="relative z-10 grid grid-cols-2 gap-4">
               <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl w-full h-64 object-cover rotate-[-2deg]"
                alt="Workshop 1"
               />
               <img 
                src="https://images.unsplash.com/photo-1544465544-1b714ef9df0c?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl w-full h-80 object-cover translate-y-8"
                alt="Workshop 2"
               />
             </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-10 tracking-tight leading-none text-balance">
              KUALITAS YANG <br /> <span className="text-orange-500">TERUJI DEKADE.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
              Selama lebih dari satu dekade, Bengkel Harapan telah menjadi mitra terpercaya bagi industri lokal di Jombang. Kami percaya bahwa setiap inci logam yang kami kerjakan adalah representasi dari komitmen kami terhadap kepuasan pelanggan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5 group hover:bg-orange-500/5 transition-colors">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-gray-400 group-hover:text-white transition-colors text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-orange-500 rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row gap-12 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
               <Settings className="w-96 h-96 -mr-20 -mt-20 text-black rotate-45" />
            </div>

            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-black text-5xl md:text-8xl font-display font-black uppercase italic leading-[0.9] mb-10 text-balance">
                DISKUSIKAN <br /> PROYEK ANDA.
              </h2>
              <p className="text-black/60 text-lg font-medium mb-16 max-w-md italic leading-snug">
                Hubungi kami hari ini untuk konsultasi gratis atau kunjungi workshop kami di Jombang.
              </p>

              <div className="grid gap-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="bg-black p-5 rounded-3xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-black/40 text-[10px] uppercase font-black tracking-[0.3em] mb-1">WhatsApp Business</p>
                    <p className="text-black text-2xl font-display tracking-tight">+62-812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="bg-black p-5 rounded-3xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-black/40 text-[10px] uppercase font-black tracking-[0.3em] mb-1">Lokasi Workshop</p>
                    <p className="text-black text-xl font-bold leading-tight">
                      Jl. Irian Jaya No.70, Tebuireng, <br /> Cukir, Diwek, Jombang
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative z-10">
              <div className="bg-black p-8 rounded-3xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black italic uppercase mb-8">Lokasi Workshop</h3>
                  <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden border-2 border-orange-500 shadow-2xl">
                    {/* Placeholder for Map UI */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                        alt="Map"
                      />
                      <div className="relative text-center p-6">
                        <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4 animate-bounce" />
                        <p className="font-black italic mb-2">Google Maps Area</p>
                        <p className="text-xs text-gray-500 tracking-widest uppercase">Mencari: Bengkel Las Bubut Harapan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-gray-500 text-sm mb-6">Gunakan tombol di bawah untuk petunjuk arah langsung ke lokasi kami.</p>
                  <button className="w-full py-5 bg-white text-black font-black uppercase text-sm tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-500 transition-all">
                    Buka Di Google Maps <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-black" />
              </div>
              <span className="text-lg font-black tracking-tighter uppercase italic">Harapan Bengkel</span>
            </div>
            
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Copyright 2026</a>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all cursor-pointer">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
