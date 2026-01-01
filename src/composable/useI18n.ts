import { ref, watch } from 'vue';

type Language = 'pt' | 'en';

const currentLanguage = ref<Language>((localStorage.getItem('language') as Language) || 'pt');

const translations = {
  pt: {
    nav: {
      home: 'Home',
      skills: 'Tech Stack',
      projects: 'Projetos',
      contact: 'Contato'
    },
    hero: {
      available: 'Disponível para novos projetos',
      greeting: 'Olá, eu sou Gabriel',
      description: 'Sou um desenvolvedor Full Stack com mais de 8 anos de experiência, especializado em criar experiências digitais excepcionais que são rápidas, acessíveis, visualmente atraentes e responsivas. Minha paixão por desenvolvimento web continua crescendo a cada projeto, sempre buscando as melhores práticas e tecnologias mais modernas.',
      location: 'Fortaleza-CE, Brasil',
      fullStack: 'Full Stack',
      years: '8 anos'
    },
    skills: {
      title: 'Tech Stack',
      subtitle: 'Tecnologias e Ferramentas',
      description: 'As tecnologias, ferramentas e linguagens que domino e utilizo no meu dia a dia:'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns dos meus projetos',
      description: 'Uma seleção dos projetos mais relevantes que desenvolvi:',
      viewOnGitHub: 'Ver no GitHub'
    },
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato',
      description: 'Está procurando um desenvolvedor? Tem alguma dúvida ou quer apenas conversar? Fique à vontade para entrar em contato!',
      email: 'Email',
      phone: 'Telefone',
      findMe: 'Você também pode me encontrar nestas plataformas:'
    },
    footer: {
      developed: 'Desenvolvido com',
      by: 'por'
    }
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Tech Stack',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      available: 'Available for new projects',
      greeting: "Hi, I'm Gabriel",
      description: "I'm a Full Stack developer with over 8 years of experience, specialized in creating exceptional digital experiences that are fast, accessible, visually appealing and responsive. My passion for web development continues to grow with each project, always seeking the best practices and most modern technologies.",
      location: 'Fortaleza-CE, Brazil',
      fullStack: 'Full Stack',
      years: '8 years'
    },
    skills: {
      title: 'Tech Stack',
      subtitle: 'Technologies and Tools',
      description: 'The technologies, tools and languages I master and use in my daily work:'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of my projects',
      description: 'A selection of the most relevant projects I have developed:',
      viewOnGitHub: 'View on GitHub'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch',
      description: 'Looking for a developer? Have a question or just want to chat? Feel free to get in touch!',
      email: 'Email',
      phone: 'Phone',
      findMe: 'You can also find me on these platforms:'
    },
    footer: {
      developed: 'Developed with',
      by: 'by'
    }
  }
};

export function useI18n() {
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage.value];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
  };

  watch(currentLanguage, (newLang) => {
    localStorage.setItem('language', newLang);
  });

  return {
    t,
    currentLanguage,
    setLanguage
  };
}
