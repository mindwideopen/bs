"use client";

import styled from "styled-components";
import { stack } from "@/entities/system-integration";
import { Section, SectionHead } from "@/shared/ui";

export function TechnologyContour() {
  return (
    <Section aria-labelledby="stack-title">
      <SectionHead>
        <span>05</span>
        <h2 id="stack-title">Technology contour</h2>
      </SectionHead>
      <StackGrid>
        {stack.map((item) => (
          <StackItem key={item}>{item}</StackItem>
        ))}
      </StackGrid>
    </Section>
  );
}

const StackItem = styled.div`
  display: grid;
  min-height: 96px;
  place-items: center;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  color: #173f4b;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(225, 234, 242, 0.78)),
    var(--surface);
  box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light);
  font-weight: 800;

  &:nth-child(2),
  &:nth-child(6) {
    color: #f6fbff;
    background: linear-gradient(145deg, var(--accent), #17445c);
  }
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 18px;

  ${StackItem} {
    grid-column: span 2;
  }

  ${StackItem}:nth-child(2),
  ${StackItem}:nth-child(6) {
    grid-column: span 3;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);

    ${StackItem},
    ${StackItem}:nth-child(2),
    ${StackItem}:nth-child(6) {
      grid-column: span 1;
    }
  }
`;
