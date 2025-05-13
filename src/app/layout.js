import { Newsreader } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const NewsreaderFont = Newsreader({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Rami Alshaar's Portfolio",
  description: "The best animated portfolio page",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-b from-blue-100 to-red-200 ${NewsreaderFont.className}`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
