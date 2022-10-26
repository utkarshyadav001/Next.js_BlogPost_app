import React, { useEffect, useState } from 'react'
import styles from "../styles/blog.module.css"
import Link from 'next/link'
import Head from 'next/head'

const Blog = () => {

  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json()
      }).then((data) => {
        setBlogs(data.blogs)
      });

  }, [])


  return (
    <div>
      <Head>
        <title>Hunting Coder Blogs</title>
        <meta name="description" content="Hunting coder is a blog for Beginners to start coding junery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.grid}>
          <h1>Learn free online course by Hanting Coders</h1>



          {
            blogs && blogs.map(blog => {
              // console.log(blog);
              return <Link href={`http://localhost:3000/blogpost/${blog.slug}`} key={blog.slug}>
                            <a className={styles.card}>
                              <h2>{blog.title}</h2>
                              <p>{blog.desc.substr(0, 200)}...</p>
                            </a>
                          </Link>
            })
          }

          

          <Link href="http://localhost:3000/blog">
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>

          <Link href="http://localhost:3000/blog">
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

export default Blog