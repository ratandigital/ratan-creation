import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import '../public/assets/css/skins/blue.css'
import '../public/assets/css/skins/green.css'
import '../public/assets/css/skins/yellow.css'
import '../public/assets/css/skins/blueviolet.css'
import '../public/assets/css/skins/goldenrod.css'
import '../public/assets/css/skins/magenta.css'
import '../public/assets/css/skins/orange.css'
import '../public/assets/css/skins/purple.css'
import '../public/assets/css/skins/red.css'
import '../public/assets/css/skins/yellowgreen.css'
import '../public/assets/css/styleswitcher.css'
import '../public/assets/css/circle.css'
import '../public/assets/css/font-awesome.min.css'
import '../public/assets/css/component.css'
import '../public/assets/css/style.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
      <Script src="assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive"></Script>
      <Script src="../assets/js/styleswitcher.js"></Script> 
      <Script src="../assets/js/imagesloaded.pkgd.min.js"></Script>
      <Script src="../assets/js/masonry.pkgd.min.js"></Script>
      <Script src="../assets/js/classie.js"></Script>
      <Script src="../assets/js/main.js"></Script>
      <Script src="../assets/js/cbpGridGallery.js"></Script>
      <Script src="../assets/js/jquery.hoverdir.js"></Script> 
      <Script src="../assets/js/menu.js"></Script> 
      <Script src="../assets/js/custom.js"></Script> 
      <Script src="../assets/js/modernizr.min.js"></Script> 

    </html>
  );
}
