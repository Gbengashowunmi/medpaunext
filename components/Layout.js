import Head from "next/head";
import React from "react";
import HeadFoot from "./HeadFoot/HeadFoot/HeadFoot";

export default function Layout({title, description, children}) {
  return (
    <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- //googlefont --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        {/* slick carousel */}
        <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
        {/* <link
      href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Heebo:wght@100;400;500&display=swap"
      rel="stylesheet"
    /> */}

        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=K2D" /> */}

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        {/* <script
      src="https://kit.fontawesome.com/7f65e75164.js"
      crossorigin="anonymous"
    ></script> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      </Head>
        <main>{children}</main>
    </>
  );
}
