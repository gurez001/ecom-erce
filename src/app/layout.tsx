import { getBaseURL } from "@/lib/util/env"
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/modules/layout/templates/nav";
import Footer from "@/modules/layout/templates/footer";


export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
      <Nav />
        <main className="relative">{props.children}</main>
      <Footer />
      </body>
    </html>
  )
}
