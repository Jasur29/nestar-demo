import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT -PAGE ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" /> {/* protocol*/}
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        {/*search engine bilan ishlash mantigi (index qilib webpageni ol va undagi linklarnga follow bol)*/}
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/* SEO : Searching engine optimazation*/}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullsteak"}
        />
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere anytime in South Korea. | " +
            "Покупайте и продавайте недвижимость где угодно и в любое время в Южной Корее. | " +
            "언제 어디서나 한국에서 부동산을 사고 파세요."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
