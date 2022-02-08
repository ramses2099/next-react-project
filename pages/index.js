import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home(props) {
  const posts = props.data;
  return (
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Home</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ol>
                {posts.map((post) => (
                  <li key={post.id}>
                    <Link href={{ pathname: "/[id]", query: { id: post.id } }}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { data: res.data.slice(0, 10) },
  };
};
