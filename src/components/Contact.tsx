
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за обращение! Я свяжусь с вами как можно скорее.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Danson7a@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+7775 7325630",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "@Dakedancho",
      link: "https://t.me/Dakedancho",
    },
    {
      icon: <Github className="w-5 h-5" />,
      text: "GitHub",
      link: "https://github.com/daniyar",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center">Связаться со мной</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6">Отправить сообщение</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  required
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Ваш email"
                  required
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Тема"
                  required
                  className="contact-input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  required
                  className="contact-input min-h-32"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить"}
              </Button>
            </form>
          </div>

          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold mb-4">Интересуют ваши проекты</h4>
              <p className="text-muted-foreground">
                Открыт для обсуждения новых проектов и возможностей сотрудничества. Если у вас есть интересная идея, не стесняйтесь связаться со мной.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
