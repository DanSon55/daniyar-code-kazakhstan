
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "О себе", target: "#about" },
    { name: "Опыт", target: "#experience" },
    { name: "Навыки", target: "#skills" },
    { name: "Контакты", target: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">
          Данияр
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Связаться</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background shadow-md transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target}
              className="text-foreground hover:text-primary transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="mt-4">
            <a href="#contact" onClick={toggleMenu}>
              Связаться
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
