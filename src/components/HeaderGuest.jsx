import React from "react";
import { Link, NavLink } from "react-router-dom"

// const menuClass = ({ isActive }) =>
//     `flex cursor-pointer items-center rounded-xl p-4  space-x-2
//     ${isActive ?
//         "text-hitam bg-black font-extrabold" :
//         "hover:text-yellow-400"
//     }`
export default function HeaderGuest() {
 return (
    <header className="w-full flex justify-between items-center px-8 py-6 text-white absolute top-0 left-0 z-10">
      <h1 className="text-3xl font-bold">Sedap <b id="logo-dot" className="text-hijau">.</b></h1>
      <nav className="space-x-6 hidden md:flex">
        <NavLink to="/home" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-100"}>Home</NavLink>
        <NavLink to="/produk" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-100"}>Produk</NavLink>
        <NavLink to="/aboutguest" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-100"}>About</NavLink>
      </nav>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded">Reservation</button>
    </header>
  );
}
