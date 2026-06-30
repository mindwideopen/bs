import type { Metadata } from "next";
import { siteConfig } from "@/shared/config/site";
import { JsonLd, siteJsonLd } from "@/shared/seo/json-ld";
import { BalticStyleShell } from "@/widgets/baltic-style-landing";
import { StyledComponentsRegistry } from "./_providers/styled-components-registry";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url.toString() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.lang}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <JsonLd data={siteJsonLd} />
        <StyledComponentsRegistry>
          <BalticStyleShell>{children}</BalticStyleShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
