"use client"
import { Meta, meta } from "@/components/Main/Meta";
import { App } from "./App"

import "@/lib/app.scss"
import "@/lib/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={meta.lang}>

      <Meta />

      <App />

    </html>
  );
}

