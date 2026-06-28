export const themeModes = ["turquoise", "orange"] as const;

export type ThemeMode = (typeof themeModes)[number];

export const defaultThemeMode: ThemeMode = "turquoise";

export const themeModeLabels: Record<ThemeMode, string> = {
  turquoise: "Бирюзовая",
  orange: "Оранжевая",
};

export function getNextThemeMode(themeMode: ThemeMode): ThemeMode {
  return themeMode === "turquoise" ? "orange" : "turquoise";
}

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === "turquoise" || value === "orange";
}
