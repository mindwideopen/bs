"use client";

import styled from "styled-components";
import { securityItems } from "@/entities/system-integration";
import { Band, SectionHead, SoftPanel } from "@/shared/ui";

export function SecuritySection() {
  return (
    <Band aria-labelledby="security-title">
      <SectionHead>
        <span>07</span>
        <h2 id="security-title">Security is built in</h2>
      </SectionHead>
      <SecurityPanel>
        <p>
          We segment access, harden the perimeter, and configure logs before
          production workloads go live.
        </p>
        <SecurityList>
          {securityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </SecurityList>
      </SecurityPanel>
    </Band>
  );
}

const SecurityPanel = styled(SoftPanel)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.72fr);
  gap: 28px;
  align-items: center;

  > p {
    font-size: 34px;
    line-height: 1.2;
    color: #14212c;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;

    > p {
      font-size: 28px;
    }
  }

  @media (max-width: 420px) {
    > p {
      font-size: 23px;
    }
  }
`;

const SecurityList = styled.ul`
  display: grid;
  gap: 14px;
  list-style: none;

  li {
    padding: 16px 18px;
    border-radius: 16px;
    color: #173f4b;
    background:
      linear-gradient(90deg, var(--accent-soft), rgba(255, 255, 255, 0.58)),
      var(--surface);
    box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
    font-weight: 700;
  }
`;
