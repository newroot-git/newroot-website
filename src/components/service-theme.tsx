"use client";

interface ServiceThemeProps {
  color: string;
  colorLight: string;
  colorDark: string;
  children: React.ReactNode;
}

export default function ServiceTheme({
  color,
  colorLight,
  colorDark,
  children,
}: ServiceThemeProps) {
  return (
    <div
      style={
        {
          "--accent": color,
          "--accent-light": colorLight,
          "--accent-dark": colorDark,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
