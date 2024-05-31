import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: "Shahad.dev",
  authors: {
    name: "shahad",
  },

  description:
    "Based in India, I'm a Front-end React developer passionate about buliding modern web application that users love.",
  openGraph: {
    title: "Daily Vote",
    description:
      "Based in India, I'm a Front-end React developer passionate about buliding modern web application that users love..",
    url: "https://next-supabase-vote.vercel.app/",
    siteName: "shahad",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "shahad", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
