import React, { useState } from 'react'
import styles from "../../styles/blog.module.css";
import * as fs from "fs";
import Head from 'next/head'

const Slug = (props) => {

    // console.log(props)
    const [blogs, setBlogs] = useState(props.data);


    return (
        <>
            <Head>
                <title>Hunting Coder || Blog</title>
                <meta name="description" content="Learn free online course by Hanting Coders" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.grid}>
                    {
                        blogs && <a className={styles.card}>
                            <h1>{blogs.title}</h1>
                            <p>{blogs.desc}</p>
                        </a>
                    } </div>
            </main>
        </>
    )
}


export async function getStaticPaths() {
    let allBlog = await fs.promises.readdir("blogpost");
    allBlog = allBlog.map((item) => {
        return { params: { slug: item.split(".")[0] } }
    });
    return {
        paths: allBlog,
        fallback: true // false or 'blocking'
    };
}


export async function getStaticProps(context) {


    const { slug } = context.params;

    let myBlog = await fs.promises.readFile(`blogpost/${slug}.json`, 'utf-8');
    return {
        props: { data: JSON.parse(myBlog) },
    }
};


export default Slug