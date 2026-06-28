"use client";

import styled from "styled-components";
import { metrics } from "@/entities/system-integration";
import { Section, SectionHead, SoftPanel } from "@/shared/ui";

export function MaturityMetrics() {
  return (
    <Section aria-labelledby="metrics-title">
      <SectionHead>
        <span>02</span>
        <h2 id="metrics-title">Operational maturity</h2>
      </SectionHead>
      <MetricsGrid>
        {metrics.map((metric) => (
          <Metric key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.detail}</small>
          </Metric>
        ))}
        <ProofCard>
          <b>Delivery proof</b>
          <p>Architecture, rollout, documentation, and support live in one accountable chain.</p>
        </ProofCard>
      </MetricsGrid>
    </Section>
  );
}

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(210px, auto);
  gap: 22px;

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled(SoftPanel)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 210px;
  transition:
    transform 260ms ease,
    border-color 260ms ease;

  &:hover {
    border-color: rgba(0, 168, 181, 0.42);
    transform: translateY(-4px);
  }

  &:first-child {
    grid-row: span 2;
    background:
      linear-gradient(145deg, rgba(0, 168, 181, 0.12), rgba(255, 255, 255, 0.72)),
      var(--surface);
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: #123848;
    font-size: 72px;
    line-height: 1;
  }

  span {
    color: #2f4355;
    line-height: 1.45;
    font-weight: 700;
  }

  small {
    margin-top: 20px;
    color: var(--muted);
    line-height: 1.45;
  }

  @media (max-width: 640px) {
    &:first-child {
      grid-row: span 1;
    }
  }

  @media (max-width: 760px) {
    strong {
      font-size: 56px;
    }
  }

  @media (max-width: 420px) {
    strong {
      font-size: 44px;
    }
  }
`;

const ProofCard = styled(SoftPanel)`
  display: grid;
  align-content: end;
  min-height: 210px;
  background:
    linear-gradient(145deg, rgba(20, 48, 64, 0.94), rgba(0, 111, 123, 0.88)),
    #143040;
  transition:
    transform 260ms ease,
    border-color 260ms ease;

  &:hover {
    border-color: rgba(0, 168, 181, 0.42);
    transform: translateY(-4px);
  }

  b {
    color: #effbff;
    font-size: 28px;
  }

  p {
    margin-top: 14px;
    color: rgba(239, 251, 255, 0.76);
  }
`;
