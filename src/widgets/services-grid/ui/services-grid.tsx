"use client";

import styled from "styled-components";
import { services } from "@/entities/system-integration";
import { Section, SectionHead, SoftPanel } from "@/shared/ui";

export function ServicesGrid() {
  return (
    <Section id="services" aria-labelledby="services-title">
      <SectionHead>
        <span>03</span>
        <h2 id="services-title">What we integrate</h2>
      </SectionHead>
      <CardsGrid>
        {services.map((service, index) => (
          <Card key={service.title}>
            <CardIndex>{String(index + 1).padStart(2, "0")}</CardIndex>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
}

const Card = styled(SoftPanel)`
  min-height: 230px;
  transition:
    transform 260ms ease,
    border-color 260ms ease;

  &:hover {
    border-color: rgba(0, 168, 181, 0.42);
    transform: translateY(-4px);
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 22px;

  ${Card} {
    grid-column: span 2;
  }

  ${Card}:first-child,
  ${Card}:nth-child(3) {
    grid-column: span 3;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);

    ${Card},
    ${Card}:first-child,
    ${Card}:nth-child(3) {
      grid-column: span 1;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CardIndex = styled.span`
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  margin-bottom: 28px;
  border-radius: 18px;
  color: var(--accent-strong);
  background: var(--surface);
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
  font-family: var(--font-geist-mono), monospace;
`;
