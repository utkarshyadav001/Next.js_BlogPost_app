import React from 'react'
import Head from 'next/head'
import styles from "../styles/About.module.css"

const about = () => {
  return (
    <>
      <Head>
        <title>Hunting Coder || About Us</title>
        <meta name="description" content="Hunting coder about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContainer}>
        <h1>About Hunter Coder</h1>
        <section className={styles.container}>
          <h2>Introduction</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, et. Dolor sequi dolore voluptas temporibus atque ipsam consequuntur quae nam dolorem amet eius neque, adipisci sed ut? Deleniti quis minima incidunt facere amet debitis quaerat totam corrupti natus provident, reiciendis accusamus odio officia omnis pariatur magnam sapiente aspernatur mollitia tempore. Magni molestiae esse cum distinctio id, pariatur aspernatur nisi nemo laboriosam vitae veritatis culpa minima, non perferendis possimus reiciendis cumque? Natus minima cumque provident deserunt!</p>
        </section>
        <section className={styles.container}>
          <h2>Services Offered </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati molestias aliquid odio fugit optio, dolore libero quam fugiat veritatis nihil iure, dolores numquam! Dicta blanditiis sint repellendus autem nesciunt?Lorem ipsum dolor.
          </p>
          <br />
          <p>We offer the following services:</p>
          <br />
          <ul className={styles.list}>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li>
            <li>Service 7</li>
            <li>Service 8</li>
          </ul>
        </section>
        <section className={styles.container}>
          <h2>Contact us </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illo nemo consequuntur deleniti voluptate, tempore, ipsa tenetur ducimus blanditiis culpa unde laudantium in dolorum ex delectus porro quo perferendis exercitationem explicabo non numquam vel omnis quasi minima. Eum, ipsa consequuntur quaerat labore alias assumenda iusto dolorem. </p>
        </section>
      </main>
    </>
  )
}

export default about