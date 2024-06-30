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
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
