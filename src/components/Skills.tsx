
import { useEffect, useRef, useState } from "react";
import { Code } from "lucide-react";

const skills = [
  {
    category: "Языки",
    items: [
      { name: "Java", level: 90 },
      { name: "Kotlin", level: 95 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "SQL", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    category: "Фреймворки",
    items: [
      { name: "Jetpack Compose", level: 90 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
    ],
  },
  {
    category: "Инструменты для разработки",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 95 },
      { name: "GitLab", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Firebase", level: 85 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    category: "Прочее",
    items: [
      { name: "REST API", level: 85 },
      { name: "Clean Architecture", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Agile", level: 70 },
      { name: "UI/UX (Figma)", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, isVisible }: { name: string; level: number; isVisible: boolean }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: isVisible ? `${level}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Code className="text-primary" size={28} />
          <h2 className="section-title">Навыки</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((category, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div>
                {category.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
