import Meta from "@/components/Main/Meta";
import App from "./App"

import "@/lib/app.scss"
import "@/lib/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import metadata from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={metadata.lang}>

      <Meta />

      <App />

    </html>
  );
}

