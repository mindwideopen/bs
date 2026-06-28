"use client";

import styled, { css } from "styled-components";

const pressableShadow = css`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    content: "";
    pointer-events: none;
    transition: opacity 300ms ease;
  }

  &::before {
    opacity: 1;
  }

  &::after {
    opacity: 0;
  }

  &:hover::before {
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active::before {
    opacity: 0;
    transition-duration: 90ms;
  }

  &:active::after {
    opacity: 1;
    transition-duration: 90ms;
  }
`;

const raisedLightButton = css`
  &::before {
    box-shadow: 10px 10px 20px var(--shadow-dark), -10px -10px 20px var(--shadow-light);
  }

  &::after {
    box-shadow: inset 4px 4px 8px #c5cdd7, inset -4px -4px 8px var(--shadow-light);
  }

  &:active::after {
    box-shadow: inset 10px 10px 18px #bac4cf, inset -10px -10px 18px var(--shadow-light);
  }
`;

const controlBaseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  max-width: 100%;
  min-height: 52px;
  padding: 0 22px;
  border: 0;
  border-radius: 18px;
  font: inherit;
  font-weight: 700;
  overflow-wrap: anywhere;
  text-align: center;
  cursor: pointer;
  ${pressableShadow}
  transition:
    transform 300ms ease,
    color 300ms ease,
    background 300ms ease;

  &:hover {
    transform: translateY(1px);
  }

  &:active {
    transform: translateY(2px);
    transition-duration: 90ms;
  }
`;

const LinkBase = styled.a`
  ${controlBaseStyles}
`;

const ButtonBase = styled.button`
  ${controlBaseStyles}
`;

export const PrimaryLink = styled(LinkBase)`
  color: #f7fbff;
  background: linear-gradient(145deg, var(--accent), #17445c 70%);

  &::before {
    box-shadow: 10px 10px 20px #bac4cf, -10px -10px 20px var(--shadow-light);
  }

  &::after {
    box-shadow: inset 4px 4px 8px #123447, inset -4px -4px 8px #28c1cb;
  }

  &:active::after {
    box-shadow: inset 10px 10px 18px #102d3d, inset -10px -10px 18px #35c7d1;
  }
`;

export const SecondaryLink = styled(LinkBase)`
  color: #173f4b;
  background: var(--surface);
  ${raisedLightButton}
`;

export const PrimaryButton = styled(ButtonBase)`
  color: #f7fbff;
  background: linear-gradient(145deg, var(--accent), #17445c 70%);

  &::before {
    box-shadow: 10px 10px 20px #bac4cf, -10px -10px 20px var(--shadow-light);
  }

  &::after {
    box-shadow: inset 4px 4px 8px #123447, inset -4px -4px 8px #28c1cb;
  }

  &:active::after {
    box-shadow: inset 10px 10px 18px #102d3d, inset -10px -10px 18px #35c7d1;
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: #173f4b;
  background: var(--surface);
  ${raisedLightButton}
`;
