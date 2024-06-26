import { Kanit } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ['200', '400', '600', '800']
});

export const metadata = {
  title: "knoWhere",
  description: "Real Time Vehicle Tracking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
