import React, { useState } from 'react'
import styles from "../styles/blog.module.css"
import Link from 'next/link'
import Head from 'next/head'
import * as fs from "fs";

const Blog = (props) => {

  const [blogs, setBlogs] = useState(props.blogs);

  

  return (
    <div>
      <Head>
        <title>Hunting Coder || Blogs</title>
        <meta name="description" content="Hunting coder is a blog for Beginners to start coding junery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.grid}>
          <h1>Learn free online course by Hanting Coders</h1>



          {
            blogs && blogs.map(blog => {
              // console.log(blog);
              return <Link href={`/blogpost/${blog.slug}`} key={blog.slug}>
                <a className={styles.card}>
                  <h2>{blog.title}</h2>
                  <p>{blog.metadesc.substr(0, 200)}...</p>
                </a>
              </Link>
            })
          }



          <Link href="/blog">
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>

          <Link href="/blog">
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}


export async function getStaticProps(context) {

  // let fetchBlogsData = await fetch("/api/blogs");
  // let data = await fetchBlogsData.json()

  let fileNameArray;
  let blogs = []

  fileNameArray = await fs.promises.readdir("blogpost");

  // console.log(fileNameArray,"e");

  for (let index = 0; index < fileNameArray.length; index++) {
    const fileName = fileNameArray[index];
    // console.log(fileName)
    await fs.promises.readFile(`blogpost/${fileName}`, "utf-8").then((e)=>{
      let { title, author, slug, metadesc} = JSON.parse(e);
      let metaBlog = { title, author, slug, metadesc};
      blogs.push( metaBlog)
    });
  }
  

  return {
    props: { blogs: blogs }, // will be passed to the page component as props
  }
}

export default Blog