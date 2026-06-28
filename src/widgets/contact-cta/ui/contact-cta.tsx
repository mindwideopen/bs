"use client";

import styled from "styled-components";
import { contact } from "@/entities/system-integration";
import { PrimaryLink, SecondaryLink, Section, SectionHead, SoftPanel } from "@/shared/ui";

export function ContactCta() {
  return (
    <Contact id="contact" aria-labelledby="contact-title">
      <SectionHead>
        <span>09</span>
        <h2 id="contact-title">Start with diagnostics</h2>
      </SectionHead>
      <ContactPanel>
        <div>
          <h3>Tell us what must work more reliably</h3>
          <p>
            We will suggest the first zones to inspect and outline a roadmap
            without unnecessary procurement.
          </p>
        </div>
        <ContactActions>
          <PrimaryLink href={`mailto:${contact.email}`}>{contact.email}</PrimaryLink>
          <SecondaryLink href={contact.phoneHref}>{contact.phone}</SecondaryLink>
        </ContactActions>
      </ContactPanel>
    </Contact>
  );
}

const Contact = styled(Section)`
  padding-bottom: 120px;
`;

const ContactPanel = styled(SoftPanel)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  border-color: rgba(0, 168, 181, 0.3);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(0, 168, 181, 0.1)),
    var(--surface);

  h3 {
    font-size: 48px;
    line-height: 1.05;
  }

  p {
    max-width: 640px;
  }

  @media (max-width: 860px) {
    align-items: stretch;
    flex-direction: column;

    h3 {
      font-size: 38px;
    }
  }

  @media (max-width: 420px) {
    h3 {
      font-size: 30px;
    }
  }
`;

const ContactActions = styled.div`
  display: grid;
  gap: 14px;
  min-width: min(100%, 320px);
`;
