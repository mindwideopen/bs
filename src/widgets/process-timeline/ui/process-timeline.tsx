"use client";

import styled from "styled-components";
import { timeline } from "@/entities/system-integration";
import { Section, SectionHead } from "@/shared/ui";

export function ProcessTimeline() {
  return (
    <Section aria-labelledby="process-title">
      <SectionHead>
        <span>08</span>
        <h2 id="process-title">Transparent process</h2>
      </SectionHead>
      <Timeline>
        {timeline.map((item) => (
          <TimelineItem key={item.term}>
            <b>{item.term}</b>
            <span>{item.text}</span>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

const Timeline = styled.div`
  display: grid;
  gap: 18px;
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 24px;
  align-items: center;
  padding: 24px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: var(--surface);
  box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light);

  b {
    color: var(--accent-strong);
  }

  span {
    color: #5d6874;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;
