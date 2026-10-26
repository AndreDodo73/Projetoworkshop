import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from './ui/Button';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* Top Institutional Bar */}
      <div className="bg-[#0A0A0A] text-[#6B6B6B] text-[10px] uppercase tracking-[0.15em] py-2 text-center border-b border-[#1E1E1E] hidden md:block">
        Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
      </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[#2A2A2A] top-0' : 'bg-transparent md:top-8 top-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tighter text-white">FORGEE</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-widest font-medium text-[#B0B0B0] hover:text-[#E8400A] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-xs uppercase tracking-widest font-medium text-[#B0B0B0] hover:text-white transition-colors">
                Sou Membro
              </Link>
              <Link to="/agendar">
                <Button variant="primary" className="py-3 px-6">Agendar Visita</Button>
              </Link>
            </div>

            {/* Mobile menu button (visual only for this demo) */}
            <div className="md:hidden flex items-center">
              <button className="text-white p-2">
                <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="font-display font-black text-3xl tracking-tighter text-white block mb-4">
                FORGEE
              </Link>
              <p className="text-[#6B6B6B] text-sm max-w-sm">
                BEYOND LIMITS KNOWN™
              </p>
              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-[#6B6B6B] hover:text-[#E8400A] transition-colors">
                  <iconify-icon icon="simple-icons:instagram" width="20" height="20"></iconify-icon>
                </a>
                <a href="#" className="text-[#6B6B6B] hover:text-[#E8400A] transition-colors">
                  <iconify-icon icon="simple-icons:whatsapp" width="20" height="20"></iconify-icon>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display uppercase text-sm font-bold text-white mb-6 tracking-wider">Academia</h4>
              <ul className="space-y-4">
                {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[#B0B0B0] hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-display uppercase text-sm font-bold text-white mb-6 tracking-wider">Legal & Redes</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#B0B0B0] hover:text-white text-sm transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-[#B0B0B0] hover:text-white text-sm transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#6B6B6B] text-xs uppercase tracking-widest text-center md:text-left">
              FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
            </p>
            <p className="text-[#6B6B6B] text-xs uppercase tracking-widest mt-4 md:mt-0">
              DESIGN SYSTEM © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}