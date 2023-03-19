import Head from "next/head";
import Home from "./home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Modern Walk Store</title>
        <meta name="description" content="Simple e-commerce application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
