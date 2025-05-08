
import { Github, Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-secondary/40 to-secondary/20 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {currentYear} Данияр. Все права защищены.
            </p>
            <div className="mt-2 text-sm text-muted-foreground">
              <p>Danson7a@gmail.com</p>
              <p>+7775 7325630</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6 md:mb-0">
            <div>
              <h4 className="text-sm font-medium mb-3">Быстрые ссылки</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О себе</a>
                <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Опыт</a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Навыки</a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Проекты</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">EduHub</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">QuasarGroup</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">EduHubLive</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Социальные сети</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/daniyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://t.me/Dakedancho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="inline-flex items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.9 8.1l-1.6 7.7c-.1.6-.5.8-1 .5l-2.8-2.1-1.4 1.3c-.2.1-.3.3-.6.3l.2-2.9 5.3-4.8c.2-.2 0-.3-.3-.2l-6.6 4.2-2.8-.9c-.6-.2-.6-.6.1-.9l11-4.2c.5-.2 1 .1.8.9z"></path>
                    </svg>
                  </span>
                </a>
                <a
                  href={`mailto:Danson7a@gmail.com`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={`tel:+77757325630`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>Сайт создан с использованием React, TypeScript и Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
