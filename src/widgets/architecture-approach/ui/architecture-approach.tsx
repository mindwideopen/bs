"use client";

import styled from "styled-components";
import { architectureSteps } from "@/entities/system-integration";
import { Band, SectionHead, SoftPanel } from "@/shared/ui";

export function ArchitectureApproach() {
  return (
    <Band id="approach" aria-labelledby="approach-title">
      <SectionHead>
        <span>04</span>
        <h2 id="approach-title">Architecture first</h2>
      </SectionHead>
      <Split>
        <SoftPanel>
          <h3>Design before procurement</h3>
          <p>
            We begin with an audit, dependency map, and target model so the
            final system does not become a pile of unrelated boxes.
          </p>
          <ArchitectureMap aria-hidden="true">
            <span>Audit</span>
            <i />
            <span>Target model</span>
            <i />
            <span>Runbook</span>
          </ArchitectureMap>
        </SoftPanel>
        <Steps>
          {architectureSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </Steps>
      </Split>
    </Band>
  );
}

const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 24px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Steps = styled.ol`
  display: grid;
  gap: 16px;
  list-style: none;

  li {
    padding: 22px 24px;
    border-radius: 20px;
    color: #4f5e6c;
    background: #e9eef4;
    box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light);
  }
`;

const ArchitectureMap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 10px;
  align-items: center;
  margin-top: 28px;

  span {
    display: grid;
    min-height: 54px;
    place-items: center;
    border-radius: 18px;
    color: #173f4b;
    background: rgba(255, 255, 255, 0.58);
    font-size: 13px;
    font-weight: 800;
    text-align: center;
  }

  i {
    width: 22px;
    height: 2px;
    border-radius: 999px;
    background: var(--accent);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;

    i {
      width: 2px;
      height: 18px;
      justify-self: center;
    }
  }
`;
