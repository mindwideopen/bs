export type ProjectIconName = "server" | "network" | "shield" | "cloud" | "support";

export const balticStyle = {
  company: {
    name: "Балтик Стайл",
    logoText: "БС",
    slogan: "Системная интеграция и инфраструктурные ИТ-решения",
    phone: "+74012 99-11-99",
    phoneHref: "tel:+74012991199",
    email: "info@balticstyle.ru",
  },
  navItems: [
    { label: "О компании", href: "/about", targetId: "baltic-about" },
    { label: "Продукты, технологии, услуги", href: "/products", targetId: "baltic-directions" },
    { label: "Партнёры", href: "/partners", targetId: "baltic-partners" },
    { label: "Новости", href: "/news", targetId: "baltic-news" },
    { label: "Контакты", href: "/contacts", targetId: "baltic-contact" },
  ],
  hero: {
    title: "Оптимальные IT-решения",
    subtitle: "От разработки стратегии до реализации",
  },
  about: {
    title: "Системная интеграция и инфраструктурные ИТ-решения",
    paragraphs: [
      "Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению технологической инфраструктуры предприятий. Наши компетенции включают проектирование систем, интеграцию оборудования и программных решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры. Надёжный технологический партнёр бизнеса более 30 лет.",

    ],
  },
  projectSliderItems: [
    { icon: "server", label: "ЦОД и серверная инфраструктура" },
    { icon: "network", label: "Слаботочные сети" },
    { icon: "shield", label: "Информационная безопасность" },
    { icon: "cloud", label: "Облачные сервисы" },
    { icon: "support", label: "Сервисная поддержка" },
  ] satisfies Array<{ icon: ProjectIconName; label: string }>,
  advantages: [
    { icon: "server", label: "30 лет в отрасли" },
    { icon: "support", label: "Опытный ИТ-персонал" },
    { icon: "cloud", label: "Оптимальные ИТ-решения" },
  ] satisfies Array<{ icon: ProjectIconName; label: string }>,
  directions: [
    {
      icon: "server",
      title: "Проектирование",
      description: "Разработка технической документации и архитектуры инфраструктуры.",
    },
    {
      icon: "network",
      title: "Интеграция и строительство",
      description: "Монтаж, пуско-наладка и ввод систем в эксплуатацию.",
    },
    {
      icon: "shield",
      title: "ИТ-аудит",
      description: "Экспертная оценка инфраструктуры и информационной безопасности.",
    },
    {
      icon: "cloud",
      title: "Поставки и сервис",
      description: "Оборудование, программное обеспечение и техническая поддержка.",
    },
    {
      icon: "support",
      title: "ИТ-аутсорсинг",
      description: "Профессиональное сопровождение сложных ИТ-решений.",
    },
  ] satisfies Array<{ icon: ProjectIconName; title: string; description: string }>,
  contact: {
    title: "Свяжитесь с нами удобным способом",
    intro: "Заполните форму и мы перезвоним",
    fields: {
      name: "Имя",
      phone: "Номер телефона",
      email: "e-mail",
      message: "Ваш текст",
      file: "Прикрепить файл",
      submit: "Отправить",
    },
  },
  footer: {
    copyright:
      "© 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей.",
    address:
      "Юридический адрес 236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",
    phones: "Телефоны +74012 99-11-99; +74012 99-11-98",
    requisites: "Реквизиты ИНН 3905017052, КПП 390601001, ОГРН 1023900773555",
    email: "Еmail: info@balticstyle.ru",
  },
};
