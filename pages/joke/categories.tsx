import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const categories = await response.json();

    return {
        props: {
           categories: categories
            }
    }
}

type CategoriesProps = {
    categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {

    return (
    <Layout>
        <div className="container">
        <h2>Category of joke :</h2>
        {categories.map((element) => {
          return (
              <li>
            <Link href={`/joke/categories/${element}`}>
              <a>{element}</a>
            </Link>
            </li>
          );
        })}
        </div>
    </Layout>
        
    )
}

export default Categories;

