import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRAKON Fitness — Built in Fire. Refined in Iron.",
  description:
    "DRAKON Fitness is an elite training destination offering premium equipment, expert coaching, and transformative programs. Join Geeta Colony's most exclusive gym.",
  keywords: "gym, fitness, personal training, strength training, Geeta Colony, Delhi, DRAKON",
  openGraph: {
    title: "DRAKON Fitness — Built in Fire. Refined in Iron.",
    description:
      "Elite training destination with premium equipment, expert coaches, and transformative programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0a] text-[#d0d0d0] antialiased">
        {children}
      </body>
    </html>
  );
}
