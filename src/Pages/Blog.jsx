import React from "react";
import useCustom from "../CustomHook/useCustom";
import App from "../App";
import { Link } from "react-router-dom";

function Blog() {
  const API = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData, isloading, setLoading] = useCustom(API);

  const truncate = (body, num) => {
    if (body.length > num) {
      return body.slice(0, num) + "...";
    } else {
      return body;
    }
  };

  return (
    <main className="">
      Blog posts
      <section className="grid grid-cols-2 gap-2">
        {data &&
          data.map((item) => {
            const { id, title, body } = item;

            return (
              <article
                className="bg-cyan-600 flex flex-col text-white p-5"
                key={id}
              >
                <h2 className="text-2xl font-bold">{title}</h2>
                <p>{truncate(body, 15)}</p>
                <Link to={title} state={{ id, title, body }}>
                  Learn More
                </Link>
              </article>
            );
          })}
      </section>
    </main>
  );
}

export default Blog;
