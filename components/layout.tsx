import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <nav className="bg bg-secondary ">
          <ul className="nav justify-content-center ">
            <li className="nav-item ">
              <Link href="/">
                <a className="nav-link active text-white">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/joke/categories">
                <a className="nav-link active text-white">
                  categories of jokes
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/joke/category">
                <a className="nav-link text-white">
                joke from a given category
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

        <main>
            <article className="container">{children}</article>
        </main>
       
    </>
  );
};
export default Layout;