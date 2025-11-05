import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iran GeoJSON Map",
  description: "High resolution GeoJSON outline of Iran rendered on an interactive map."
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
