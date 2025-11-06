import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indian Micro Brands - Creative Inspiration Gallery",
  description: "Curated collection of creative posts and carousels from lesser-known Indian micro brands for design inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
