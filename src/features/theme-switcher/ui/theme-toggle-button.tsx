"use client";

import { useEffect, useSyncExternalStore } from "react";
import styled from "styled-components";
import {
  defaultThemeMode,
  getNextThemeMode,
  isThemeMode,
  themeModeLabels,
  type ThemeMode,
} from "../model/theme-mode";

const storageKey = "baltic-style-theme";
const listeners = new Set<() => void>();

function applyTheme(themeMode: ThemeMode) {
  document.documentElement.dataset.theme = themeMode;
}

function readStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return defaultThemeMode;
  }

  const savedThemeMode = window.localStorage.getItem(storageKey);

  return isThemeMode(savedThemeMode) ? savedThemeMode : defaultThemeMode;
}

function subscribeToThemeChanges(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function updateStoredTheme(themeMode: ThemeMode) {
  applyTheme(themeMode);
  window.localStorage.setItem(storageKey, themeMode);
  listeners.forEach((listener) => listener());
}

export function ThemeToggleButton() {
  const themeMode = useSyncExternalStore(
    subscribeToThemeChanges,
    readStoredTheme,
    () => defaultThemeMode,
  );
  const nextThemeMode = getNextThemeMode(themeMode);

  useEffect(() => {
    applyTheme(themeMode);
  }, [themeMode]);

  const handleClick = () => {
    updateStoredTheme(nextThemeMode);
  };

  return (
    <ToggleButton
      type="button"
      onClick={handleClick}
      aria-label={`Переключить тему на ${themeModeLabels[nextThemeMode].toLowerCase()}`}
    >
      <Swatch aria-hidden="true" />
      <span>{themeModeLabels[nextThemeMode]} тема</span>
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  max-width: 100%;
  padding: 0 16px;
  border: 0;
  border-radius: 18px;
  color: #f7fbff;
  background: rgba(255, 255, 255, 0.08);
  box-shadow:
    8px 8px 18px rgba(0, 0, 0, 0.22),
    -8px -8px 18px rgba(255, 255, 255, 0.04);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  transition:
    box-shadow 300ms ease,
    transform 300ms ease,
    background 300ms ease;

  &:hover {
    transform: translateY(1px);
    background: rgba(255, 255, 255, 0.12);
    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.22),
      inset -4px -4px 8px rgba(255, 255, 255, 0.06);
  }

  &:active {
    transform: translateY(2px);
    box-shadow:
      inset 8px 8px 16px rgba(0, 0, 0, 0.28),
      inset -8px -8px 16px rgba(255, 255, 255, 0.08);
    transition-duration: 90ms;
  }

  span {
    overflow-wrap: anywhere;
  }
`;

const Swatch = styled.i`
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.68);
  border-radius: 50%;
  background: var(--accent);
`;
