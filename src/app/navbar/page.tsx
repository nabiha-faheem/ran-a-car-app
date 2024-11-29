'use client'



import React from 'react';
import Link from 'next/link';
import '../globals.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Rent A Car</h1>
      <ul className="items">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/catalog">Catalogue</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>


      </ul>
    </nav>
  );
};

export default Navbar;
























