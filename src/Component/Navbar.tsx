import React from 'react';
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className=' text-white mt-6 flex justify-center gap-3'>
        <NavLink to="/" className="hover:bg-zinc-700 bg-zinc-900 px-6 py-1">Home</NavLink>
        <NavLink to="/create-user" className="hover:bg-yellow-600 bg-yellow-800 p-1">CREATE USER</NavLink>
    </nav>
  );
}
