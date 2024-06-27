// app/layout.js or pages/_app.js (depending on your Next.js version)
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FootBar from "./components/FooterBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Customize as needed
});

export const metadata = {
  title: "Kora",
  description: "Kora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#F8F8F8]">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <FootBar />
      </body>
    </html>
  );
}
