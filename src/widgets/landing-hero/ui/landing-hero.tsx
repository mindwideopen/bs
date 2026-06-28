"use client";

import Image from "next/image";
import styled from "styled-components";
import { hero, trustSignals } from "@/entities/system-integration";
import { smoothScrollToAnchor } from "@/features/smooth-anchor-navigation";
import { PrimaryButton, SecondaryButton } from "@/shared/ui";

export function LandingHero() {
  return (
    <Hero id="top">
      <HeroCopy>
        <Kicker>{hero.kicker}</Kicker>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <Actions>
          {hero.actions.map((action) =>
            action.variant === "primary" ? (
              <PrimaryButton
                type="button"
                key={action.href}
                onClick={() => smoothScrollToAnchor(action.href.slice(1))}
              >
                {action.label}
              </PrimaryButton>
            ) : (
              <SecondaryButton
                type="button"
                key={action.href}
                onClick={() => smoothScrollToAnchor(action.href.slice(1))}
              >
                {action.label}
              </SecondaryButton>
            ),
          )}
        </Actions>
        <TrustStrip aria-label="Trust signals">
          {trustSignals.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </TrustStrip>
      </HeroCopy>
      <HeroVisual>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          sizes="(max-width: 900px) 100vw, 48vw"
          preload
        />
        <MapOverlay aria-hidden="true">
          <Node className="core">Core</Node>
          <Node className="cloud">Cloud</Node>
          <Node className="sec">SOC</Node>
          <Node className="edge">Edge</Node>
          <FlowLine className="a" />
          <FlowLine className="b" />
        </MapOverlay>
      </HeroVisual>
    </Hero>
  );
}

const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  gap: 44px;
  align-items: center;
  width: min(1180px, calc(100% - 32px));
  min-height: calc(100vh - 84px);
  margin: 0 auto;
  padding: 44px 0 76px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const HeroCopy = styled.div`
  display: grid;
  gap: 24px;

  h1 {
    max-width: 720px;
    font-size: 82px;
    line-height: 0.98;
    letter-spacing: 0;
    color: #121b25;
  }

  p {
    max-width: 600px;
    color: #3f5162;
    font-size: 22px;
    line-height: 1.55;
  }

  @media (max-width: 980px) {
    h1 {
      font-size: 64px;
    }
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 46px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 40px;
    }
  }
`;

const Kicker = styled.span`
  width: fit-content;
  padding: 12px 18px;
  border-radius: 999px;
  color: var(--accent-strong);
  background: linear-gradient(145deg, #f4f8fb, var(--surface));
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
  font-size: 14px;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const TrustStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;

  span {
    padding: 10px 12px;
    border: 1px solid rgba(0, 111, 123, 0.18);
    border-radius: 999px;
    color: #254c59;
    background: rgba(255, 255, 255, 0.52);
    font-size: 13px;
    font-weight: 700;
  }
`;

const HeroVisual = styled.div`
  display: flex;
  position: relative;
  min-height: clamp(360px, 42vw, 590px);
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.78);
  background: var(--surface);
  box-shadow: 24px 24px 48px var(--shadow-dark), -24px -24px 48px var(--shadow-light);

  img {
    object-fit: cover;
  }

  &::after {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(232, 238, 244, 0.28), transparent 32%),
      linear-gradient(180deg, transparent 55%, rgba(12, 27, 38, 0.18));
    content: "";
    pointer-events: none;
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  inset: 24px;
  z-index: 1;
  pointer-events: none;
`;

const Node = styled.span`
  position: absolute;
  display: grid;
  min-width: 82px;
  min-height: 46px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.84);
  border-radius: 18px;
  color: #103644;
  background: rgba(246, 250, 252, 0.78);
  box-shadow: 10px 10px 22px rgba(43, 55, 68, 0.18), -8px -8px 18px rgba(255, 255, 255, 0.78);
  font-size: 13px;
  font-weight: 800;
  backdrop-filter: blur(14px);

  &.core {
    right: 18%;
    top: 34%;
    color: #f7fbff;
    background: rgba(0, 111, 123, 0.84);
  }

  &.cloud {
    right: 4%;
    top: 12%;
  }

  &.sec {
    left: 12%;
    bottom: 18%;
  }

  &.edge {
    right: 10%;
    bottom: 14%;
  }
`;

const FlowLine = styled.span`
  position: absolute;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.72;

  &.a {
    right: 18%;
    top: 28%;
    width: 42%;
    transform: rotate(17deg);
  }

  &.b {
    right: 16%;
    bottom: 30%;
    width: 58%;
    transform: rotate(-12deg);
  }
`;
