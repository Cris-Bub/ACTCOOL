import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const sogaMigos = localFont({
  src: "./fonts/SogaMigos.ttf", // Ensure the path to your Soga Migos font file is correct
  variable: "--font-soga-migos",
  weight: "400 700", // Updated weight to a more standard range
});
const futura = localFont({
  src: "./fonts/FuturaXBlkBT.ttf", // Ensure the path to your Futura font file is correct
  variable: "--font-futura-XBlkBT",
  weight: "400 900", // Adjusted weight to include a broader range
});
const comixoRegular = localFont({
  src: "./fonts/Comixo-Regular.otf", // Ensure the path to your Comixo font file is correct
  variable: "--font-comixo-regular",
  weight: "400", // Standard weight for regular fonts
});

export const metadata = {
  title: "ACTCOOL",
  description: "creative agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${futura.variable} ${sogaMigos.variable} ${geistSans.variable} ${geistMono.variable} ${comixoRegular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
