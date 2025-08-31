import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  section: string;
}

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', section: 'hero' },
    { id: 'about', label: 'About', section: 'about' },
    { id: 'what-we-do', label: 'What We Do', section: 'what-we-do' },
    { id: 'members', label: 'Members', section: 'members' },
    { id: 'why-join', label: 'Why Join', section: 'why-join' },
    { id: 'how-we-operate', label: 'How We Operate', section: 'how-we-operate' },
    { id: 'membership', label: 'Membership', section: 'membership' },
    { id: 'application', label: 'Application', section: 'application' },
    { id: 'contact', label: 'Contact', section: 'contact' }
  ];

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      setIsVisible(false);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true);
      }, 150);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.section));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsExpanded(false);
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 -translate-y-2'
      }`}
    >
      {/* Compact Navigation */}
      <div
        className="bg-quantum-deep-blue/80 backdrop-blur-md border border-accent/20 rounded-full px-6 py-3 shadow-lg transition-all duration-500 ease-out"
        style={{
          borderRadius: '50px',
          padding: isExpanded ? '24px' : '12px 24px',
          minWidth: isExpanded ? '600px' : 'auto',
          transform: isExpanded ? 'scale(1.05)' : 'scale(1)'
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {!isExpanded ? (
          // Compact view
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">
                {navItems.find(item => item.id === activeSection)?.label || 'Navigation'}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-accent animate-bounce" />
          </div>
        ) : (
          // Expanded view
          <div className="grid grid-cols-4 gap-2 min-w-max">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.section)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-accent text-primary shadow-md'
                    : 'text-white hover:bg-white/10 hover:text-accent'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Progress indicator */}
      <div className="mt-2 mx-auto w-16 h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{
            width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default FloatingNavigation;
