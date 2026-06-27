import React, { useState, useEffect } from 'react';
import { 
  Menu, X, BookOpen, Users, Award, Calendar, 
  ArrowRight, Phone, Mail, MapPin, ChevronRight, 
  GraduationCap, ShieldCheck, Heart, ExternalLink,
  Sparkles, Quote, Trophy, Clock, CheckCircle2, Send,
  User, Check, Layers, Image as ImageIcon
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('semua');
  const [scrolled, setScrolled] = useState(false);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  // State untuk mengurus aliran persekolahan yang dipilih (Modal)
  const [selectedStream, setSelectedStream] = useState(null);

  // Kesan tatalan untuk bar navigasi yang dinamik & minimalis
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data Pengumuman & Berita Terkini SMK Asajaya
  const announcements = [
    {
      id: 1,
      date: "26 Jun 2026",
      category: "akademik",
      title: "Pendaftaran Sesi Libat Urus Ibu Bapa & Guru Tingkatan 5",
      description: "Semua ibu bapa/penjaga pelajar Tingkatan 5 diwajibkan hadir di Dewan Permata bagi membincangkan persediaan SPM secara holistik.",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-100"
    },
    {
      id: 2,
      date: "22 Jun 2026",
      category: "kokurikulum",
      title: "SMK Asajaya Juara Kejohanan Balapan & Padang Peringkat Daerah",
      description: "Tahniah diucapkan kepada kontinjen sukan sekolah atas pencapaian cemerlang merangkul juara keseluruhan dengan rekod 12 pingat emas.",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-100"
    },
    {
      id: 3,
      date: "15 Jun 2026",
      category: "pembangunan",
      title: "Gotong-Royong Perdana 'Asajaya Bersih, Komuniti Ceria'",
      description: "Program usahasama bersama PIBG untuk menceriakan kawasan bilik darjah abad ke-21 dan membaik pulih taman herba sekolah.",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
    },
    {
      id: 4,
      date: "10 Jun 2026",
      category: "akademik",
      title: "Pelancaran Program Tuisyen Pintar Asajaya 2026",
      description: "Sesi bimbingan intensif percuma pada setiap hari Sabtu khusus untuk subjek teras bagi membantu melonjakkan prestasi pelajar.",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-100"
    },
    {
      id: 5,
      date: "05 Jun 2026",
      category: "kokurikulum",
      title: "Pentauliahan Khas Kadet Polis SMK Asajaya",
      description: "Istiadat perbarisan agung tamat latihan dan pemakaian pangkat bagi skuad kadet baharu disempurnakan oleh Ketua Polis Daerah.",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-100"
    }
  ];

  // Data Spesifik Aliran Persekolahan berserta Gambar Profil (Avatar) & Gambar Aktiviti
  const streamDetails = {
    perdana: {
      title: "Aliran Perdana",
      sub: "Tingkatan 1 hingga Tingkatan 5",
      desc: "Menyediakan pendidikan standard berkualiti tinggi berpandukan Kurikulum Standard Sekolah Menengah (KSSM) merangkumi bidang sains tulen, sastera, dan aliran vokasional.",
      motto: "Peneraju Ilmu & Kecemerlangan Akademik",
      structure: {
        penyelaras: { 
          nama: "Cikgu Ahmad Fauzi bin Razali", 
          jawatan: "Penyelaras Aliran Perdana",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
        },
        setiausaha: { 
          nama: "Cikgu Dayang Mastura binti Awang", 
          jawatan: "Setiausaha Kurikulum",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
        },
        jawatankuasa: [
          { 
            nama: "Cikgu Zunika binti Ali", 
            peranan: "Ketua Bidang Bahasa",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
          },
          { 
            nama: "Cikgu Mohd Jeffrey bin Salleh", 
            peranan: "Ketua Bidang Sains & Matematik",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
          },
          { 
            nama: "Cikgu Norhayati binti Hassan", 
            peranan: "Ketua Bidang Sains Sosial",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
          },
          { 
            nama: "Cikgu Robert anak James", 
            peranan: "Ketua Bidang Teknikal & Vokasional",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
          }
        ]
      },
      images: [
        { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800", caption: "Bilik Darjah Pembelajaran Abad Ke-21 (PAK21)" },
        { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", caption: "Sesi Eksperimen Amali di Makmal Kimia Sekolah" },
        { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", caption: "Penerapan Pembelajaran Kolaboratif Kumpulan" }
      ]
    },
    prau: {
      title: "Aliran Pra-Universiti",
      sub: "Tingkatan 6 (Sains & Sastera)",
      desc: "Mempersiapkan pelajar lepasan SPM untuk melangkah ke institusi pengajian tinggi melalui peperiksaan Sijil Tinggi Persekolahan Malaysia (STPM) dengan bimbingan pensyarah berpengalaman.",
      motto: "Gerbang Emas Menuju Menara Gading",
      structure: {
        penyelaras: { 
          nama: "Cikgu Dr. Hajah Noraini binti Ahmad", 
          jawatan: "Penyelaras Tingkatan 6",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
        },
        setiausaha: { 
          nama: "Cikgu Wong Siew Ling", 
          jawatan: "Setiausaha Peperiksaan STPM",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
        },
        jawatankuasa: [
          { 
            nama: "Cikgu Abang Zulkifli bin Abang Ismail", 
            peranan: "Ketua Unit Hal Ehwal Murid (HEM)",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150"
          },
          { 
            nama: "Cikgu Sarimah binti Bujang", 
            peranan: "Ketua Unit Kokurikulum Tingkatan 6",
            avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150"
          },
          { 
            nama: "Cikgu Tan Kok Wee", 
            peranan: "Ketua Unit Kerja Kursus & Penyelidikan",
            avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150"
          }
        ]
      },
      images: [
        { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800", caption: "Dewan Kuliah & Sesi Pembentangan Akademik" },
        { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", caption: "Kajian Lapangan Kerja Kursus Geografi & Sejarah" },
        { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", caption: "Majlis Graduasi Pra-Universiti SMK Asajaya" }
      ]
    },
    ppki: {
      title: "Program Pendidikan Khas Integrasi",
      sub: "PPKI Asajaya",
      desc: "Menyediakan sokongan dan rancangan pendidikan berorientasikan kemahiran hidup dan pengurusan kendiri bagi membolehkan murid berkeperluan pendidikan khas (MBPK) berdikari.",
      motto: "Keupayaan Di Sebalik Kelainan",
      structure: {
        penyelaras: { 
          nama: "Cikgu Fatimah binti Ibrahim", 
          jawatan: "Penyelaras Utama PPKI",
          avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=150"
        },
        setiausaha: { 
          nama: "Cikgu Mohd Syazwan bin Hadi", 
          jawatan: "Setiausaha Kebajikan MBPK",
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150"
        },
        jawatankuasa: [
          { 
            nama: "Cikgu Siti Aminah binti Yusuf", 
            peranan: "Penyelia Bengkel Kemahiran Hidup",
            avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=150"
          },
          { 
            nama: "Puan Catherine anak Jamil", 
            peranan: "Pembantu Pengurusan Murid (PPM)",
            avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=150"
          },
          { 
            nama: "Puan Norizan binti Seman", 
            peranan: "Pembantu Pengurusan Murid (PPM)",
            avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150"
          }
        ]
      },
      images: [
        { url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", caption: "Sesi Pembelajaran Terapi Seni & Motor Kasar" },
        { url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800", caption: "Projek Kebun Integrasi & Keusahawanan Tani PPKI" },
        { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", caption: "Latihan Kemahiran Memasak & Pengurusan Domestik" }
      ]
    }
  };

  const filteredAnnouncements = activeTab === 'semua' 
    ? announcements 
    : announcements.filter(item => item.category === activeTab);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() !== '') {
      setEmailSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setEmailSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans text-slate-900 flex flex-col antialiased">
      
      {/* 1. NAVBAR - Ultra-Sleek Glassmorphism */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-4 border-b border-slate-800/40' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Nama Sekolah - Diperbaharui dengan Logo Imej & Fallback */}
            <div className="flex items-center space-x-3.5 group cursor-pointer">
              <div className="relative w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 p-1 rounded-2xl border border-slate-700 shadow-lg shadow-amber-500/5 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo-smk-asajaya.png" 
                  alt="Logo SMK Asajaya" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Jika fail logo tiada, sorokkan imej dan tunjukkan lencana fallback di bawah
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center text-amber-400 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-xl p-1.5 text-slate-950">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg md:text-xl tracking-wide block text-white group-hover:text-amber-400 transition-colors">
                  SEK.MEN.KEB ASAJAYA
                </span>
                <span className="text-[9px] text-amber-500 font-semibold block tracking-widest uppercase">
                  ASAL DARI ANAK BENIH BAIK
                </span>
              </div>
            </div>

            {/* Navigasi Utama Skrin Besar */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#utama" className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors duration-200 relative py-1">Utama</a>
              <a href="#profil" className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors duration-200 relative py-1">Profil</a>
              <a href="#perutusan" className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors duration-200 relative py-1">Perutusan</a>
              <a href="#berita" className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors duration-200 relative py-1">Berita</a>
              <a href="#hubungi" className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors duration-200 relative py-1">Hubungi</a>
              
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2 active:scale-95">
                <span>Portal Guru</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Butang Menu Mobil */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-amber-400 p-2 rounded-xl focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobil Terbuka */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-t border-slate-900 px-6 pt-4 pb-8 space-y-3 shadow-2xl">
            <a href="#utama" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 text-slate-300 hover:bg-slate-900 hover:text-amber-400 text-sm font-bold uppercase tracking-wider rounded-xl transition duration-200">Utama</a>
            <a href="#profil" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 text-slate-300 hover:bg-slate-900 hover:text-amber-400 text-sm font-bold uppercase tracking-wider rounded-xl transition duration-200">Profil</a>
            <a href="#perutusan" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 text-slate-300 hover:bg-slate-900 hover:text-amber-400 text-sm font-bold uppercase tracking-wider rounded-xl transition duration-200">Perutusan</a>
            <a href="#berita" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 text-slate-300 hover:bg-slate-900 hover:text-amber-400 text-sm font-bold uppercase tracking-wider rounded-xl transition duration-200">Berita</a>
            <a href="#hubungi" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 text-slate-300 hover:bg-slate-900 hover:text-amber-400 text-sm font-bold uppercase tracking-wider rounded-xl transition duration-200">Hubungi</a>
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg text-center">
                Portal Guru
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION - Editorial Style Dark Aesthetics */}
      <header id="utama" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-40 pb-32 md:pt-48 md:pb-40 border-b border-slate-900">
        
        {/* Kesan Pencahayaan Minimalis (Ambient Glows) */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Fine grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:32px_32px] opacity-70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Teks Penerangan Hero */}
          <div className="space-y-8 lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-800/40 px-4 py-2 rounded-full text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
              <span>Institusi Pendidikan Pilihan</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-100">
              Membangun Legasi, <br />
              Menginspirasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-extrabold">
                Generasi Bestari
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              SMK Asajaya komited dalam melestarikan ekosistem pembelajaran yang berkualiti, membentuk keperibadian luhur, dan memupuk daya inovasi pelajar bertaraf global.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a href="#profil" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/10 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Profil Korporat</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#berita" className="bg-slate-900/60 hover:bg-slate-900 text-slate-300 px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider border border-slate-800 hover:border-slate-700 transition-all duration-300 text-center backdrop-blur-sm">
                Berita & Makluman
              </a>
            </div>
          </div>

          {/* Kolum Gambar Potret Estetik */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-emerald-600/10 rounded-3xl transform rotate-2 scale-102 opacity-40 blur-sm"></div>
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" 
                alt="Suasana Pendidikan SMK Asajaya" 
                className="w-full h-80 md:h-96 object-cover opacity-85 hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              {/* Motto Banner Minimalis */}
              <div className="absolute bottom-0 inset-x-0 p-8 text-center bg-slate-950/70 backdrop-blur-sm border-t border-slate-900">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">Motto Utama</span>
                <p className="text-slate-100 font-extrabold text-lg tracking-widest">BERAZAM • BERUSAHA • BERJAYA</p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 3. SECTION STATISTIK - Clean Monochrome */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] p-8 md:p-10 border border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 divide-x-0 sm:divide-x sm:divide-slate-100">
            {[
              { label: "Jumlah Pelajar", value: "1,200+", sub: "Tingkatan 1 - 6", color: "text-slate-950" },
              { label: "Tenaga Pengajar", value: "90+", sub: "Pendidik Berdedikasi", color: "text-slate-950" },
              { label: "Aliran Persekolahan", value: "3 Kategori", sub: "Perdana | Pra-U | PPKI", color: "text-slate-950" },
              { label: "Pencapaian SPM", value: "2025", sub: "5.30", color: "text-emerald-700" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-2 first:pt-2 sm:pt-2">
                <span className={`text-3xl font-black ${stat.color} tracking-tight`}>
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION VISI, MISI & PIAGAM - Premium Editorial Layout */}
      <section id="profil" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-[10px] text-emerald-800 font-bold uppercase tracking-widest mb-3">
            <span>Profil Korporat</span>
          </div>
          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl leading-tight">
            Teras Penggerak Integriti & Akademik
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kad Visi */}
          <div className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100/80 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>
            <div className="space-y-6">
              <div className="bg-emerald-50 p-4 rounded-xl w-fit text-emerald-700 shadow-sm group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-slate-950">Visi Sekolah</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                Pendidikan Berkualiti Insan Terdidik Negara Sejahtera. Kami berdedikasi tinggi dalam melahirkan kepemimpinan dan pembangunan modal insan cemerlang.
              </p>
            </div>
            <div className="pt-8 flex items-center text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
              <span>Standard Kementerian</span>
            </div>
          </div>

          {/* Kad Misi */}
          <div className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100/80 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>
            <div className="space-y-6">
              <div className="bg-amber-50 p-4 rounded-xl w-fit text-amber-600 shadow-sm group-hover:bg-amber-600 group-hover:text-slate-950 transition-all duration-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-slate-950">Misi Sekolah</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                Melestarikan Sistem Pendidikan Yang Berkualiti Untuk Membangunkan Potensi Individu Bagi Memenuhi Aspirasi Negara bertaraf global.
              </p>
            </div>
            <div className="pt-8 flex items-center text-[10px] font-bold text-amber-600 uppercase tracking-widest">
              <span>Hala Tuju Lestari</span>
            </div>
          </div>

          {/* Kad Piagam Pelanggan */}
          <div className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100/80 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-500/5 rounded-bl-full pointer-events-none"></div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl w-fit text-slate-700 shadow-sm group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-slate-950">Piagam Pelanggan</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                Memastikan semua stakeholders menerima khidmat profesional yang telus, adil, cekap, mesra, dan tepat demi kepuasan komuniti sekolah sepenuhnya.
              </p>
            </div>
            <div className="pt-8 flex items-center text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              <span>Komitmen Berintegriti</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEKSYEN ALIRAN PERSEKOLAHAN (PERDANA, PRA-U, PPKI) INTERAKTIF */}
      <section className="py-24 bg-slate-100/60 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-[10px] text-amber-800 font-bold uppercase tracking-widest mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>Struktur Pengajian</span>
            </div>
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl leading-tight">
              Aliran Persekolahan SMK Asajaya
            </h2>
            <p className="text-sm text-slate-500 mt-3 font-light">
              Klik pada mana-mana aliran di bawah untuk meneroka **Carta Organisasi Jawatankuasa** serta galeri gambar aktiviti masing-masing.
            </p>
            <div className="h-1 w-12 bg-emerald-800 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. KAD ALIRAN PERDANA */}
            <div 
              onClick={() => setSelectedStream('perdana')}
              className="group bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl w-fit group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">Aliran Perdana</h3>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mt-1">Tingkatan 1 - Tingkatan 5</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
                  Menawarkan kurikulum perdana KSSM merangkumi aliran Sains Tulen, Sastera Sosial, dan mata pelajaran kemahiran berdaya saing tinggi.
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between text-xs font-bold text-emerald-800 uppercase tracking-widest">
                <span>Teroka Carta & Galeri</span>
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. KAD ALIRAN PRA-U */}
            <div 
              onClick={() => setSelectedStream('prau')}
              className="group bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl w-fit group-hover:bg-amber-600 group-hover:text-slate-950 transition-all duration-300">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-500 transition-colors">Pra-Universiti</h3>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mt-1">Tingkatan 6 (Sains & Seni)</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
                  Persediaan mantap ke peringkat menara gading berlandaskan sistem modular peperiksaan STPM dan modul kokurikulum yang berimpak tinggi.
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between text-xs font-bold text-emerald-800 uppercase tracking-widest">
                <span>Teroka Carta & Galeri</span>
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. KAD PPKI */}
            <div 
              onClick={() => setSelectedStream('ppki')}
              className="group bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="bg-slate-50 text-slate-700 p-4 rounded-2xl w-fit group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">Program Pendidikan Khas (PPKI)</h3>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mt-1">Pendidikan Khas Integrasi</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
                  Peneraju sokongan holo-terapeutik dan program keusahawanan tani berciri inklusif bagi mendidik murid berkeperluan khas secara kendiri.
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between text-xs font-bold text-emerald-800 uppercase tracking-widest">
                <span>Teroka Carta & Galeri</span>
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL INTERAKTIF: CARTA ORGANISASI DENGAN GAMBAR PROFIL & GALERI ALIRAN */}
      {selectedStream && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-200/80 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Modal Header */}
            <div className="bg-slate-950 text-white p-6 sm:p-8 border-b border-slate-900 flex justify-between items-start">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-1">Pusat Maklumat Aliran</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{streamDetails[selectedStream].title}</h3>
                <p className="text-xs text-slate-400 font-medium mt-1 italic">"{streamDetails[selectedStream].motto}"</p>
              </div>
              <button 
                onClick={() => setSelectedStream(null)}
                className="bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white p-2 rounded-xl border border-slate-800 transition-colors focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[70vh] space-y-10">
              
              {/* Penerangan Ringkas */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/50">
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {streamDetails[selectedStream].desc}
                </p>
              </div>

              {/* Carta Organisasi Visual dengan Gambar Profil */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-slate-950 border-b border-slate-100 pb-3">
                  <Users className="h-5 w-5 text-emerald-800" />
                  <h4 className="font-bold text-base uppercase tracking-wider">Carta Organisasi Pengurusan</h4>
                </div>

                <div className="flex flex-col items-center space-y-6 pt-4">
                  
                  {/* Penyelaras (Peringkat Teratas) */}
                  <div className="bg-slate-950 border-2 border-amber-500 rounded-2xl p-5 w-full max-w-xs text-center shadow-lg relative flex flex-col items-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full">
                      Penyelaras
                    </div>
                    {/* Gambar Profil Penyelaras */}
                    <div className="w-16 h-16 rounded-full border-2 border-amber-500 overflow-hidden mb-3 bg-slate-800 shadow-md">
                      <img 
                        src={streamDetails[selectedStream].structure.penyelaras.avatar} 
                        alt={streamDetails[selectedStream].structure.penyelaras.nama}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full flex items-center justify-center text-slate-400 bg-slate-800">
                        <User className="h-6 w-6" />
                      </div>
                    </div>
                    <span className="font-extrabold text-sm text-slate-100 block">
                      {streamDetails[selectedStream].structure.penyelaras.nama}
                    </span>
                    <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider block mt-0.5">
                      {streamDetails[selectedStream].structure.penyelaras.jawatan}
                    </span>
                  </div>

                  {/* Garis Penghubung Tengah */}
                  <div className="h-6 w-0.5 bg-slate-200"></div>

                  {/* Setiausaha */}
                  <div className="bg-emerald-950 border border-emerald-800 rounded-2xl p-5 w-full max-w-xs text-center shadow-md relative flex flex-col items-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full">
                      Setiausaha
                    </div>
                    {/* Gambar Profil Setiausaha */}
                    <div className="w-16 h-16 rounded-full border-2 border-emerald-600 overflow-hidden mb-3 bg-slate-800 shadow-md">
                      <img 
                        src={streamDetails[selectedStream].structure.setiausaha.avatar} 
                        alt={streamDetails[selectedStream].structure.setiausaha.nama}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full flex items-center justify-center text-slate-400 bg-slate-800">
                        <User className="h-6 w-6" />
                      </div>
                    </div>
                    <span className="font-bold text-sm text-slate-100 block">
                      {streamDetails[selectedStream].structure.setiausaha.nama}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mt-0.5">
                      {streamDetails[selectedStream].structure.setiausaha.jawatan}
                    </span>
                  </div>

                  <div className="h-6 w-0.5 bg-slate-200"></div>

                  {/* Anggota Jawatankuasa Grid */}
                  <div className="w-full">
                    <div className="text-center mb-6">
                      <span className="text-[10px] bg-slate-100 text-slate-500 font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-slate-200/50">
                        Jawatankuasa Pelaksana
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {streamDetails[selectedStream].structure.jawatankuasa.map((jk, i) => (
                        <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center space-x-4 shadow-sm hover:border-amber-500 hover:shadow-md transition-all duration-300">
                          {/* Gambar Profil Ahli Jawatankuasa */}
                          <div className="w-12 h-12 rounded-full border border-slate-200 overflow-hidden shrink-0 bg-slate-50 shadow-inner">
                            <img 
                              src={jk.avatar} 
                              alt={jk.nama}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="hidden w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                              <User className="h-4 w-4" />
                            </div>
                          </div>
                          <div>
                            <span className="font-bold text-xs text-slate-950 block">{jk.nama}</span>
                            <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider block mt-0.5">{jk.peranan}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Galeri Gambar Aktiviti Terkini */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-2 text-slate-950 border-b border-slate-100 pb-3">
                  <ImageIcon className="h-5 w-5 text-emerald-800" />
                  <h4 className="font-bold text-base uppercase tracking-wider">Galeri Gambar & Aktiviti</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {streamDetails[selectedStream].images.map((img, i) => (
                    <div key={i} className="group overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm">
                      <div className="h-40 overflow-hidden relative">
                        <img 
                          src={img.url} 
                          alt={img.caption} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 bg-white border-t border-slate-100">
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setSelectedStream(null)}
                className="bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition shadow-md active:scale-95"
              >
                Tutup Maklumat
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. SECTION PERUTUSAN PENGETUA - Editorial Portrait Layout */}
      <section id="perutusan" className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Potret Pengetua Premium */}
          <div className="lg:col-span-5 relative max-w-sm mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-2xl transform rotate-3 scale-102 opacity-30 blur-sm"></div>
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Pengetua SMK Asajaya" 
                className="w-full h-[400px] object-cover opacity-90 object-top hover:scale-101 transition duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 text-center">
                <h4 className="text-slate-100 font-extrabold text-base">REMY SYARMILA BINTI MOHAMED SEBLI</h4>
                <p className="text-[10px] text-amber-500 font-semibold uppercase tracking-wider mt-1">Pengetua SMK Asajaya</p>
              </div>
            </div>
          </div>

          {/* Mesej/Petikan Ucapan */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 bg-emerald-950/60 border border-emerald-800/40 px-3.5 py-1.5 rounded-full text-[10px] text-emerald-400 font-semibold uppercase tracking-widest mb-2">
              <Quote className="h-3 w-3 text-amber-500" />
              <span>Perutusan Ulung</span>
            </div>
            
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-slate-100">
              Menjana Kecemerlangan, <br className="hidden sm:block" />
              Merealisasikan Potensi Pelajar
            </h2>
            
            <div className="relative">
              <span className="absolute -top-6 -left-4 text-slate-800 text-7xl font-serif select-none pointer-events-none">“</span>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light italic pl-4 relative z-10">
                Pendidikan adalah asas utama dalam pembentukan sahsiah dan kepemimpinan masa depan. Di SMK Asajaya, kami bukan sekadar memindahkan teori akademik, tetapi turut menggilap daya fikir kreatif, nilai empati tinggi, dan ketahanan diri pelajar bagi melahirkan generasi yang bersedia menghadapi lanskap global yang mencabar.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block">Wawasan Akademik</span>
                <span className="text-slate-300 text-xs block font-medium mt-0.5">"Pendidikan Inklusif, Kecemerlangan Merentas Sempadan"</span>
              </div>
              <div className="bg-slate-900 text-amber-500 border border-slate-800 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Pendidikan Berkualiti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION PENGUMUMAN & BERITA */}
      <section id="berita" className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Berita */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aktiviti & Info</span>
              <p className="text-3xl font-black text-slate-950 mt-2">Pusat Berita & Pengumuman</p>
              <div className="h-1 w-12 bg-amber-500 mt-3 rounded-full mx-auto md:mx-0"></div>
            </div>
            
            {/* Penapis Berita (Tabs) - Minimalist Outlines */}
            <div className="flex flex-wrap gap-1.5 mt-8 md:mt-0 justify-center">
              {['semua', 'akademik', 'kokurikulum', 'pembangunan'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-extrabold uppercase tracking-wider transition-all duration-200 border ${
                    activeTab === tab 
                      ? 'bg-slate-950 text-amber-400 border-slate-950 shadow-sm' 
                      : 'bg-transparent text-slate-500 border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Kad Berita Grid Minimalis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnnouncements.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-slate-100/90 flex flex-col justify-between"
              >
                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-medium flex items-center space-x-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full font-extrabold tracking-widest uppercase border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-slate-950 text-sm md:text-base leading-snug hover:text-emerald-800 cursor-pointer transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
                
                <div className="px-7 py-4 bg-slate-50/50 border-t border-slate-100/50 flex justify-end">
                  <button className="text-slate-900 font-bold text-xs flex items-center space-x-1 group hover:text-emerald-800 transition-colors">
                    <span>Baca Lanjut</span>
                    <ChevronRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredAnnouncements.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <span className="text-slate-400 text-sm">Tiada maklumat di bawah kategori ini buat masa sekarang.</span>
            </div>
          )}

        </div>
      </section>

      {/* 7. SECTION INTERAKTIF NEWSLETTER - Premium Contrast Section */}
      <section className="bg-slate-950 text-white py-20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-3 py-1 rounded-full text-[9px] text-amber-500 font-black uppercase tracking-widest mb-2">
            <span>Langganan Buletin</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100">Dapatkan Makluman Peperiksaan & Pekeliling</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
            Daftar e-mel anda untuk menerima takwim peperiksaan, pekeliling semasa, dan pencapaian aktiviti sekolah terus ke peti mel anda.
          </p>
          
          {!emailSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input 
                type="email" 
                placeholder="Alamat e-mel anda" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="px-5 py-3.5 rounded-xl bg-slate-900/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 w-full text-xs font-semibold border border-slate-800"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center space-x-2 shrink-0 active:scale-95"
              >
                <span>Hantar</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          ) : (
            <div className="bg-slate-900 p-4 rounded-xl max-w-md mx-auto flex items-center justify-center space-x-2 border border-slate-800">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span className="font-bold text-xs">E-mel berjaya didaftarkan! Terima kasih.</span>
            </div>
          )}
        </div>
      </section>

      {/* 8. FOOTER - Minimalist, High-Contrast & Elegant */}
      <footer id="hubungi" className="bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Penerangan Sekolah */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-2 rounded-xl text-slate-950 font-bold">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-lg tracking-wider text-slate-100">SMK ASAJAYA</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Mendidik dengan keikhlasan, membimbing dengan kepakaran, melahirkan barisan pemimpin masa depan berintegriti untuk nusa dan bangsa.
            </p>
            <div className="pt-2">
              <span className="bg-slate-900 border border-slate-800 text-amber-500 font-mono text-[10px] px-3.5 py-2 rounded-lg font-bold tracking-widest">
                KOD SEKOLAH: YEA8101
              </span>
            </div>
          </div>

          {/* Pautan Pantas */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-slate-100 uppercase tracking-widest border-b border-slate-900 pb-3">Pautan Utama</h3>
            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li><a href="#utama" className="hover:text-amber-400 flex items-center space-x-1 transition-colors"><span>›</span> <span>Laman Utama</span></a></li>
              <li><a href="#profil" className="hover:text-amber-400 flex items-center space-x-1 transition-colors"><span>›</span> <span>Profil Korporat</span></a></li>
              <li><a href="#perutusan" className="hover:text-amber-400 flex items-center space-x-1 transition-colors"><span>›</span> <span>Perutusan Pengetua</span></a></li>
              <li><a href="#berita" className="hover:text-amber-400 flex items-center space-x-1 transition-colors"><span>›</span> <span>Pusat Berita & Aktiviti</span></a></li>
              <li><button className="hover:text-amber-400 flex items-center space-x-1 transition-colors text-left focus:outline-none"><span>›</span> <span>e-Sumbangan PIBG</span></button></li>
            </ul>
          </div>

          {/* Hubungi Sekolah */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-slate-100 uppercase tracking-widest border-b border-slate-900 pb-3">Hubungi Kami</h3>
            <ul className="space-y-4 text-xs text-slate-400 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Jalan SMK Asajaya, 94600 Asajaya, Sarawak, Malaysia.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span>+60 82-828 236</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span>yea8101@moe.edu.my</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="bg-slate-950 border-t border-slate-900/60 py-8 text-center text-[10px] text-slate-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SMK Asajaya. Hak Cipta Terpelihara.</p>
          <p className="flex items-center space-x-1">
            <span className="font-medium">Reka bentuk web menggunakan React & Tailwind CSS</span>
            <Heart className="h-3 w-3 text-red-600 fill-red-600" />
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;