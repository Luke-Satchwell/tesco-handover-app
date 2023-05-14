import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Handover App",
  description: "Create and Share detailed handovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Provider>
          <Nav />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
