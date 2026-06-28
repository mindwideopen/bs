"use client";

import styled from "styled-components";
import { cases } from "@/entities/system-integration";
import { Section, SectionHead, SoftPanel } from "@/shared/ui";

export function CasesShowcase() {
  return (
    <Section id="cases" aria-labelledby="cases-title">
      <SectionHead>
        <span>06</span>
        <h2 id="cases-title">Typical projects</h2>
      </SectionHead>
      <CaseGrid>
        {cases.map((item) => (
          <CaseCard key={item.title}>
            <Result>{item.result}</Result>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </CaseCard>
        ))}
      </CaseGrid>
    </Section>
  );
}

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 22px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const CaseCard = styled(SoftPanel)`
  min-height: 250px;
  display: grid;
  align-content: space-between;

  &:first-child {
    background:
      linear-gradient(145deg, rgba(0, 168, 181, 0.12), rgba(255, 255, 255, 0.74)),
      var(--surface);
  }
`;

const Result = styled.span`
  width: fit-content;
  margin-bottom: 34px;
  padding: 10px 12px;
  border-radius: 999px;
  color: var(--accent-strong);
  background: var(--accent-soft);
  font-size: 13px;
  font-weight: 800;
`;
