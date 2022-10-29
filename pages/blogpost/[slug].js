import React, { useState } from 'react'
import styles from "../../styles/blog.module.css";


const Slug = (props) => {

    // console.log(props)
    const [blogs, setBlogs] = useState(props.data.blogData);

    return (
        <main>
            <div className={styles.grid}>
                {
                    blogs && <a className={styles.card}>
                        <h1>{blogs.title}</h1>
                        <p>{blogs.desc}</p>
                    </a> || <a className={styles.card}>
                        <h1>404, Bad request</h1>
                        <p>{props.data.error}</p>
                    </a>
                } </div>
        </main>
    )
}

export async function getServerSideProps(context) {
    // console.log(context)
    const { slug } = context.query;
    // console.log(`http://localhost:3000/api/blog?slug=${slug}`)
    let fetchData = await fetch(`http://localhost:3000/api/blog?slug=${slug}`);
    let data = await fetchData.json();

    return {
        props: { data }
    }
}
export default Slug