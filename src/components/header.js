import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "./header.module.css"

export function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`font-sans antialiased ${styles.header}`}>
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img alt="logo" src={'/logo.png'} />
            <span className="font-semibold text-xl tracking-tight">adinda.ch</span>
        </div>
        <div className="block sm:hidden">
          <button onClick={() => setOpen(!open)} className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`w-full flex-grow sm:flex sm:items-center sm:w-auto ${open ? 'block' : 'hidden'}`}>
          <div className="text-sm sm:flex-grow">
            <Link className="no-underline block mt-4 sm:inline-block sm:mt-0 text-white mr-4 hover:text-pink-500" to="/">
              Home
            </Link>
            <Link className="no-underline block mt-4 sm:inline-block sm:mt-0 text-white mr-4 hover:text-pink-500" to="/ueber-mich/">
              Über mich
            </Link>
            <Link className="no-underline block mt-4 sm:inline-block sm:mt-0 text-white mr-4 hover:text-pink-500" to="/kontakt/">
              Kontakt
            </Link>
            <Link className="no-underline block mt-4 sm:inline-block sm:mt-0 text-white mr-4 hover:text-pink-500" to="/gruesse/">
              Grüsse
            </Link>
          </div>
        </div>
      </nav>
      {props.pageName && (<div className="text-center p-24">
        <h1 className="text-4xl uppercase font-extrabold text-white">{props.pageName}</h1>
      </div>)
      }
    </div>
  );
}
