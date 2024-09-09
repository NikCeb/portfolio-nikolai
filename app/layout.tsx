import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"]
  // src: "./fonts/GeistVF.woff",
  // variable: "--font-geist-sans",
  // weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nikolai's Portfolio",
  description: "Nikolai's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >{children}
        </ThemeProvider>

      </body>
    </html>
  );
}
