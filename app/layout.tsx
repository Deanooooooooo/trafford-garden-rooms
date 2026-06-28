import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/trafford-garden-rooms"),
  title: "Trafford Garden Rooms | Bespoke Garden Rooms Manchester",
  description:
    "Bespoke SIPs panel garden rooms, offices, studios and leisure rooms from Trafford Garden Rooms in Manchester and the North West.",
  robots: "index, follow",
  alternates: {
    canonical: "https://deanooooooooo.github.io/trafford-garden-rooms/",
  },
  openGraph: {
    type: "website",
    title: "Trafford Garden Rooms | Bespoke Garden Rooms Manchester",
    description:
      "Made-to-measure garden offices, studios and leisure rooms for homes across Manchester and the North West.",
    url: "https://deanooooooooo.github.io/trafford-garden-rooms/",
    images: ["/assets/trafford-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trafford Garden Rooms | Bespoke Garden Rooms Manchester",
    description:
      "Bespoke SIPs panel garden rooms from Trafford Garden Rooms in Manchester.",
    images: ["/assets/trafford-hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
