import Head from "next/head";
import Image from "next/image";
import Board from "@/components/board";
import Score from "@/components/score";
import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.twenty48} style={{ backgroundColor: 'black', color: 'white' }}>
      <Head>
        <title>MMXLVIII</title>
        <meta
          name="description"
          content="Fully-functional 2048 game built in NextJS and TypeScript. Including animations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="ccla.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="ccla.svg"
        />
      </Head>
      <header>
        <h1>MMXLVIII</h1>
        <Score />
      </header>
      <main>
        
        <Board /> 
      </main>
    </div>
  );
}
