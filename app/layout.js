import "./globals.css";

export const metadata = {
  title: "TechNova Solutions | Digital Systems, Built to Move",
  description:
    "TechNova Solutions builds scalable digital products, web applications, cloud solutions and AI-powered experiences.",
  openGraph: {
    title: "TechNova Solutions",
    description:
      "Digital systems, built to move.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}