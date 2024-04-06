"use client";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Provider } from "react-redux";
import Navigation from "@/components/navigation";
import { store } from "@/stores/store";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header>
            <Navigation />
          </Header>
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
