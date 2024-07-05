import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-primary-bg">
      <nav className="flex justify-between items-center mx-20 py-1">
        <h1 className="text-primary-txt text-2xl font-Chelon">DIVINE DROPS</h1>
        <ul className="flex justify-center space-x-6 p-4">
          <li>
            <Link to="/" className="text-primary-txt font-bold font-Bona">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/add" className="text-primary-txt font-bold font-Bona">
              SHOP
            </Link>
          </li>
          <li>
            <Link
              to="/pokemon"
              className="text-primary-txt font-bold font-Bona"
            >
              COMMUNITY
            </Link>
          </li>
          <li>
            <Link
              to="/pokemon"
              className="text-primary-txt font-bold font-Bona"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              to="/pokemon"
              className="text-primary-txt font-bold font-Bona"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="/pokemon"
              className="text-primary-txt font-bold font-Bona"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-primary-txt h-[0.5px]">{""}</div>
    </div>
  );
}

export default Navbar;
