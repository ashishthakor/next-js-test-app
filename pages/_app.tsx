// import '../styles/globals.css'
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href={"/server"}>Server</Link>&nbsp;&nbsp;
      <Link href={"/client"}>Client</Link><br/><br/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
