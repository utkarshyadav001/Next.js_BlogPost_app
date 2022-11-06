import React, { useState } from 'react'
import Head from 'next/head'
import style from "../styles/Contact.module.css";

const contact = () => {
  

  const [contactDetail, setContactDetail] = useState({name: "", phoneNo: "", email : "", password: "", desc: ""});

  const formSubmit = async (e) => {
    e.preventDefault()
    // console.log("i am runnig");

    let request = await fetch(`http://localhost:3000/api/postcontact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactDetail)
    });


    const response = await request.json();
    console.log(response)
    
  }

  const onChange = (e)=>{
    setContactDetail({...contactDetail, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Head>
        <title>Hunting Coder || Contact us</title>
        <meta name="description" content="Hunting coder Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <h1 className={style.textCenter}>Contact us</h1>
        <form onSubmit={formSubmit} className={style.form}>
          <label htmlFor="name" className={style.label}>Enter your name</label>
          <input type="text" name="name" id="name" required className={style.input} onChange={onChange} />

          <label htmlFor="phoneNo" className={style.label} >Enter Your phone number</label>
          <input type="number" name="phoneNo" id="phoneNo" required className={style.input} onChange={onChange} />

          <label htmlFor="email" className={style.label} >Enter your email</label>
          <input type="email" name="email" id="email" required className={style.input} onChange={onChange} />

          <label htmlFor="password" className={style.label} >Enter a password</label>
          <input type="password" name="password" id="password" required className={style.input} onChange={onChange} />

          <textarea name="desc" id="desc" required className={style.textarea} placeholder="Enter a review here" onChange={onChange} />
          <input type="submit" value="Submit" className="btn" />
        </form>
      </main>
    </>
  )
}

export default contact