import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step1: Collect all files from blogdata directory
//Step2: Iterate and Display them

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/blogs");
  const allBlogs = await data.json();

  return { props: { allBlogs } };
};

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>{blogitem.metadesc}...</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
