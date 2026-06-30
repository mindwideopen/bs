import { absoluteUrl, siteConfig } from "@/shared/config/site";

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/favicon.ico"),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",
        addressLocality: "Калининград",
        addressRegion: "Калининградская обл",
        postalCode: "236029",
        addressCountry: "RU",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#local-business"),
      name: siteConfig.name,
      url: absoluteUrl("/"),
      image: absoluteUrl("/favicon.ico"),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      priceRange: "$$$",
      areaServed: "Калининградская область",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",
        addressLocality: "Калининград",
        addressRegion: "Калининградская обл",
        postalCode: "236029",
        addressCountry: "RU",
      },
      parentOrganization: {
        "@id": absoluteUrl("/#organization"),
      },
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/#systems-integration-service"),
      name: "Системная интеграция",
      serviceType: "Проектирование, интеграция, ИТ-аудит, поставки, сервис и ИТ-аутсорсинг",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: "Калининградская область",
      url: absoluteUrl("/#baltic-directions"),
      description: siteConfig.description,
    },
  ],
};

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
