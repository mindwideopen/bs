import { ImageResponse } from "next/og";
import { siteConfig } from "@/shared/config/site";

export const socialImageAlt = "Лендинг Балтик Стайл: системная интеграция";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          color: "#14212c",
          background:
            "linear-gradient(135deg, #f6f9fc 0%, #e6eef6 52%, #dce7ef 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <div
            style={{
          width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 22,
              color: "#f8fcff",
              background: "#007783",
            }}
          >
            БС
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              alignSelf: "flex-start",
              padding: "14px 22px",
              borderRadius: 999,
              color: "#006f7b",
              background: "rgba(0, 168, 181, 0.16)",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Системная интеграция
          </div>
          <div
            style={{
              maxWidth: 900,
              fontSize: 74,
              lineHeight: 0.96,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            Оптимальные IT-решения
          </div>
        </div>
        <div style={{ maxWidth: 860, color: "#435566", fontSize: 28, lineHeight: 1.35 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    socialImageSize,
  );
}
