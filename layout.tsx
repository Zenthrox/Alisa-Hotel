import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alisa Hotel | Accra, Ghana",
  description: "A refined stay in North Ridge, shaped by Ghanaian hospitality.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
