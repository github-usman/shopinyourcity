import type { Metadata } from "next";
import "../public/assets/styles/main.scss";
import FooterProductLinks from "@/components/footer/Footer";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "Shop In Your City | shopinyourcity",
  description: "Shop In Your City | shopinyourcity no more flipkart , Amazon and other E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head />
      <body>
        <Header />
        <main>{children}</main>
        <div className="footer"> <FooterProductLinks /> </div>
      </body>
   
    </html>
  );
}
