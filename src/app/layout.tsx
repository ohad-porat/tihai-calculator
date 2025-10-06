import type { Metadata } from "next";
import "../styles/main.scss";
import TopBar from "./components/TopBar";
import "@fortawesome/fontawesome-free/css/all.css";


export const metadata: Metadata = {
  title: "Tihai Calculator",
  description: "Musical rhythm calculator for Tihai and Meshuggah patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
