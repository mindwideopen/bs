"use client";

import styled from "styled-components";

export const Section = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 104px 0;

  @media (max-width: 720px) {
    padding: 72px 0;
  }

  @media (max-width: 420px) {
    width: min(1180px, calc(100% - 24px));
    padding: 56px 0;
  }
`;

export const Band = styled(Section)`
  width: 100%;
  padding-inline: max(16px, calc((100% - 1180px) / 2));
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.08)),
    rgba(255, 255, 255, 0.16);
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 30px;

  span {
    color: var(--accent-strong);
    font-family: var(--font-geist-mono), monospace;
    font-size: 14px;
    font-weight: 700;
  }

  h2 {
    max-width: 760px;
    font-size: 52px;
    line-height: 1;
    text-align: right;
    color: #16202b;
  }

  @media (max-width: 720px) {
    align-items: start;
    flex-direction: column;

    h2 {
      font-size: 40px;
      text-align: left;
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 32px;
    }
  }
`;

export const SoftPanel = styled.article`
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(222, 232, 241, 0.72)),
    var(--surface);
  box-shadow: 16px 16px 32px var(--shadow-dark), -16px -16px 32px var(--shadow-light);
  padding: 28px;

  h3 {
    margin-bottom: 12px;
    font-size: 24px;
    color: #16202b;
  }

  p {
    color: var(--muted);
    line-height: 1.65;
  }

  @media (max-width: 520px) {
    padding: 22px;
  }
`;
