import React, { useState } from 'react'
import styles from "../styles/blog.module.css"
import Link from 'next/link'
import Head from 'next/head'
import * as fs from "fs";
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {

  const allCount = Number(props.allCount);
  const [blogs, setBlogs] = useState(props.blogs);
  const [count, setCount] = useState(4);

  let fetchData = async () => {
    let fetchBlogs = await fetch(`http://localhost:3000/api/blogs?count=${count}`);
    let data = await fetchBlogs.json();
    setBlogs(data.blogs);
    setCount(count + 2);
  };
  

  return (
    <div>
      <Head>
        <title>Hunting Coder | Blogs</title>
        <meta name="description" content="Hunting coder is a blog for Beginners to start coding junery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>Learn free online course by Hanting Coders</h1>
        <div className={styles.grid}>

          { 
            <InfiniteScroll
              dataLength={blogs.length} //This is important field to render the next data
              next={fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {blogs && blogs.map(blog => {
                // console.log(blog);
                return <div className={styles.card} key={blog.slug}>
                  <h2>{blog.title}</h2>
                  <p>{blog.metadesc}...</p>
                  <Link href={`/blogpost/${blog.slug}`} >
                    <button className="btn">Read More</button>
                  </Link>
                </div>
              })}
            </InfiniteScroll>
          }

          {/* {blogs && blogs.map(blog => {
            // console.log(blog);
            return <div className={styles.card} key={blog.slug}>
              <h2>{blog.title}</h2>
              <p>{blog.metadesc.substr(0, 200)}...</p>
              <Link href={`/blogpost/${blog.slug}`} >
                <button className="btn">Read More</button>
              </Link>
            </div>
          })} */}

        </div>
      </main>
    </div>
  )
}


export async function getStaticProps(context) {

  // let fetchBlogsData = await fetch("/api/blogs");
  // let data = await fetchBlogsData.json()

  let fileNameArray;
  let blogs = [];

  fileNameArray = await fs.promises.readdir("blogpost");
  let allCount = fileNameArray.length;

  // console.log(fileNameArray,"e");

  for (let index = 0; index < fileNameArray.length; index++) {
    const fileName = fileNameArray[index];
    // console.log(fileName)
    await fs.promises.readFile(`blogpost/${fileName}`, "utf-8").then((e) => {
      let { title, author, slug, metadesc } = JSON.parse(e);
      let metaBlog = { title, author, slug, metadesc };
      blogs.push(metaBlog)
    });
  }


  return {
    props: { blogs, allCount }, // will be passed to the page component as props
  }
}

export default Blog