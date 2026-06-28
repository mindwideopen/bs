"use client";

import styled from "styled-components";
import { brand } from "@/entities/system-integration";
import { smoothScrollToAnchor } from "@/features/smooth-anchor-navigation";

export function SiteHeader() {
  return (
    <Header>
      <Brand
        type="button"
        aria-label={`${brand.name}: back to top`}
        onClick={() => smoothScrollToAnchor("top")}
      >
        <BrandMark>{brand.initials}</BrandMark>
        <span>{brand.name}</span>
      </Brand>
      <Nav aria-label="Main navigation">
        {brand.navItems.map((item) => (
          <button
            type="button"
            key={item.href}
            onClick={() => smoothScrollToAnchor(item.href.slice(1))}
          >
            {item.label}
          </button>
        ))}
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 18px 0;
  backdrop-filter: blur(18px);

  @media (max-width: 720px) {
    align-items: stretch;
    flex-direction: column;
    gap: 14px;
    padding: 14px 0;
  }
`;

const Brand = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

const BrandMark = styled.span`
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 14px;
  color: #2d465e;
  background: #e9eef4;
  transition: transform 300ms ease;

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
    box-shadow: 8px 8px 18px #c5cbd3, -8px -8px 18px #ffffff;
    opacity: 1;
  }

  &::after {
    box-shadow: inset 4px 4px 8px #cbd1d8, inset -4px -4px 8px #ffffff;
    opacity: 0;
  }

  ${Brand}:hover & {
    transform: translateY(1px);
  }

  ${Brand}:hover &::before {
    opacity: 0;
  }

  ${Brand}:hover &::after {
    opacity: 1;
  }

  ${Brand}:active & {
    transform: translateY(2px);
    transition-duration: 90ms;
  }

  ${Brand}:active &::before {
    opacity: 0;
    transition-duration: 90ms;
  }

  ${Brand}:active &::after {
    box-shadow: inset 9px 9px 18px #bcc4cd, inset -9px -9px 18px #ffffff;
    opacity: 1;
    transition-duration: 90ms;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  border-radius: 999px;
  background: #e9eef4;
  box-shadow: 8px 8px 18px #c5cbd3, -8px -8px 18px #ffffff;

  button {
    position: relative;
    padding: 10px 16px;
    border: 0;
    border-radius: 999px;
    color: #4c5866;
    background: #e9eef4;
    font: inherit;
    font-size: 14px;
    cursor: pointer;
    transition:
      transform 300ms ease,
      color 300ms ease;

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
      box-shadow: 6px 6px 12px #cbd1d8, -6px -6px 12px #ffffff;
      opacity: 1;
    }

    &::after {
      box-shadow: inset 3px 3px 7px #cbd1d8, inset -3px -3px 7px #ffffff;
      opacity: 0;
    }

    &:hover {
      transform: translateY(1px);
    }

    &:hover::before {
      opacity: 0;
    }

    &:hover::after {
      opacity: 1;
    }

    &:active {
      transform: translateY(2px);
      color: #24394d;
      transition-duration: 90ms;
    }

    &:active::before {
      opacity: 0;
      transition-duration: 90ms;
    }

    &:active::after {
      box-shadow: inset 7px 7px 14px #bcc4cd, inset -7px -7px 14px #ffffff;
      opacity: 1;
      transition-duration: 90ms;
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    border-radius: 24px;

    button {
      flex: 1 1 92px;
      min-width: 0;
      padding: 10px 12px;
    }
  }
`;
