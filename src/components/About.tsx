
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/3 reveal">
            <div className="rounded-lg bg-primary/10 p-8 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <User size={48} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Данияр</h2>
              <p className="text-muted-foreground text-center">Full-Stack Разработчик</p>
            </div>
          </div>
          
          <div className="md:w-2/3 reveal">
            <h2 className="section-title">О себе</h2>
            <p className="text-lg mb-6">
              Я Данияр, самоучка full-stack разработчик из Казахстана. Я начал программировать в 12 лет и с тех пор создаю реальные проекты.
            </p>
            <p className="text-lg mb-6">
              Мой фокус — создание влиятельных и масштабируемых продуктов, особенно в области образования и продуктивности. Я закончил Астана IT University и сейчас руковожу проектами EduHub, QuasarGroup, а также работаю над стартапом в области здравоохранения, совмещая технические навыки с лидерством для внедрения инноваций.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">12+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Стартапа</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
