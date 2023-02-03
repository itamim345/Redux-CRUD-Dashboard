import React from 'react';
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className='bg-zinc-600 text-white py-2 flex justify-center gap-3'>
        <NavLink to="/" className="hover:bg-slate-400 p-1">HOME</NavLink>
        <NavLink to="/create-user" className="hover:bg-slate-400 p-1">CREATE USER</NavLink>
    </nav>
  );
}
