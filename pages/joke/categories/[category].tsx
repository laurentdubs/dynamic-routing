import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../../../components/layout";



export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context);
    
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${context.params.category}`);
    const joke = await response.json();

    const category = context.params.category;
    console.log(context.params.category);
    
    
    return {
        props: {
            joke: joke.value, 
            category: category,
        }
    };
};

    type CategoryJokeProps = {
        joke: string;
        category: string[];
    }

    const Category: React.FC<CategoryJokeProps> = ({ joke, category }) => {

        return (
        <Layout>
            <div className="container">
               <p>{joke}</p>      
            </div>
        </Layout>
            
        );
    };
    
    export default Category;
    
    