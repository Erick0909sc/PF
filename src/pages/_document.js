import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/c7641e270a.js"
          crossOrigin="anonymous"
        ></script>{" "}
      </Head>
      <body className=" h-screen w-screen m-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
