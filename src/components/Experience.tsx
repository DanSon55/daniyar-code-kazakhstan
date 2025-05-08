
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "EduHub — Основатель и разработчик",
    period: "Январь 2025 – настоящее время",
    description: "Разработал образовательное приложение для подготовки к IELTS/SAT с использованием Kotlin и Jetpack Compose. Интегрировал Firebase, push-уведомления и отслеживание достижений. Руководил командой волонтёров-разработчиков.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Лидерство"],
  },
  {
    title: "QuasarGroup — Основатель и ведущий разработчик",
    period: "2023 – настоящее время",
    description: "Организовал технологическую группу, ориентированную на фриланс и стартапы. Разработал AI-инструменты, Telegram-ботов, панели управления и приложения для отслеживания задач.",
    tags: ["AI", "Telegram", "Dashboard", "Task tracking"],
  },
  {
    title: "Фриланс-разработчик",
    period: "2022 – настоящее время",
    description: "Создавал индивидуальные вебсайты и мобильные приложения для клиентов. Разработал панели управления, образовательные инструменты и портфолио-сайты с полным циклом разработки.",
    tags: ["Web", "Mobile", "Fullstack"],
  },
  {
    title: "Голосовой ассистент для врачей — Основатель и ведущий разработчик",
    period: "2024 – настоящее время",
    description: "Разработал голосового ассистента для врачей с использованием AI, который записывает и анализирует разговоры между врачами и пациентами, структурируя медицинскую информацию и предлагая диагнозы и лечение.",
    tags: ["AI", "Voice", "Healthcare"],
  },
  {
    title: "EduHubLive — Основатель и разработчик",
    period: "2024 – настоящее время",
    description: "Запустил интерактивную платформу для студентов университетов, которая сочетает в себе живые лекции, сессии вопросов и ответов, а также совместную работу над проектами в реальном времени.",
    tags: ["Real-time", "Education", "Collaboration"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Briefcase className="text-primary" size={28} />
          <h2 className="section-title">Опыт работы</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <div className="text-sm text-muted-foreground mb-4">{exp.period}</div>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
