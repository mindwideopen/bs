"use client";

import styled from "styled-components";
import { BalticStyleLanding } from "@/widgets/baltic-style-landing";

export function LandingPage() {
  return (
    <Page id="main-content">
      <BalticStyleLanding />
    </Page>
  );
}

const Page = styled.main`
  min-height: 100vh;
  background:
    linear-gradient(115deg, var(--ambient-accent) 0%, transparent 38%),
    linear-gradient(180deg, var(--surface-strong) 0%, var(--background) 42%, var(--background-end) 100%);
  color: var(--foreground);
`;
