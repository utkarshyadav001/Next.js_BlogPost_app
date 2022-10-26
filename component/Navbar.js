import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
        <ul>
          <Link href="/"><a><li>Home</li></a></Link>
          <Link href="/about"><a><li>About</li></a></Link>
          <Link href="/blog"><a><li>Blog's</li></a></Link>
          <Link href="/contact"><a><li>Contact us</li></a></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar