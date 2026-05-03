import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GifDrop – Turn Screen Recordings into Optimized Product GIFs",
  description: "Automatically crop, compress and caption your screen recordings for stunning product demos. Built for SaaS marketers and indie hackers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4219885a-08e5-44ef-bdce-2ebd76363123"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
