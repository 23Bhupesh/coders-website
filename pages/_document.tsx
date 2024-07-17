import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-custom-bg bg-cover bg-center bg-no-repeat bg-[#000000] ">
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
