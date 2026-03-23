import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weiqi An — Software Engineer",
  description:
    "Senior Staff Software Engineer at Pinterest. Building AI-native systems, LLM applications, and agent systems at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
