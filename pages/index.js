import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={`${styles.container} ${styles.container}`}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Hunting coder is a blog for Beginners to start coding junery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global >
        {`

        `}
      </style>

      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
          Get started to hunt coding errors
        </p>

        <div className={styles.blogs}>


          <h2>Top tranding blog's</h2>
          <div className={styles.grid}>
          <Link href="http://localhost:3000/blog">
            <a className={styles.card}>
              <h2>How to learn javaScript &rarr;</h2>
              <p>Find in-depth information about Next.js features and APINext.js features and API.</p>
            </a>
            </Link>
            <Link href="http://localhost:3000/blog">
            <a className={styles.card}>
              <h2>How to learn Python &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            </Link>
            <Link href="http://localhost:3000/blog">
            <a className={styles.card}>
              <h2>How to learn Nodejs &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            </Link>
            <Link href="http://localhost:3000/blog">
            <a className={styles.card}>
              <h2>How to learn Nextjs  &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            </Link>
            <Link href="http://localhost:3000/blog">
            <a className={styles.card}>
              <h2>How to learn C++  &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            </Link>
            <Link href="http://localhost:3000/blog">
            <a className={styles.card}>
              <h2>How to learn Java  &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            </Link>
          </div>
        </div>
      </main >

      <footer className={styles.footer}>
        <Link href="http://localhost:3000/blog">
            <a 
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
            </Link>
      </footer>
    </div >
  )
}
