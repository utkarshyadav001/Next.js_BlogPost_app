import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/blog.module.css";


const Slug = () => {

    const [blogs, setBlogs] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        // console.log(`http://localhost:3000/api/blog?slug=${slug}`)
        fetch(`http://localhost:3000/api/blog?slug=${slug}`)
            .then((a) => {
                return a.json()
            }).then((data) => {
                setBlogs(data.blogData)
                if (data.error) setBlogs({ title: "404", desc: `Bad request, ${data.error}` })
            });

        // if (data.error) {
        //     console.log("I am running")
        // }

    }, [router.isReady])

    return (
        <main>
            <div className={styles.grid}>
                {
                    blogs && <a className={styles.card}>
                        <h1>{blogs.title}</h1>
                        <p>{blogs.desc}</p>
                    </a>
                } </div>
        </main>
    )
}

export default Slug