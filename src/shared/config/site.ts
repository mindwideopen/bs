const fallbackSiteUrl = "https://balticstyle.ru";

function createSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export const siteConfig = {
  name: "Балтик Стайл",
  title: "Балтик Стайл - системная интеграция и инфраструктурные ИТ-решения",
  description:
    "Системная интеграция, поставка, модернизация и сопровождение технологической инфраструктуры предприятий.",
  url: createSiteUrl(),
  locale: "ru_RU",
  lang: "ru",
  email: "info@balticstyle.ru",
  phone: "+74012 99-11-99",
  keywords: [
    "Балтик Стайл",
    "системная интеграция",
    "ИТ-инфраструктура",
    "слаботочные сети",
    "поставка оборудования",
    "ИТ-аудит",
    "ИТ-аутсорсинг",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
