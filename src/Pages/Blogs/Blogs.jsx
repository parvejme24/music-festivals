import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Music Festival | Blog</title>
      </Helmet>
      {/* Blogs Header */}
      <header className="bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-center bg-cover bg-no-repeat pt-40 -mt-24 pb-10 text-white py-6">
        <div data-aos="zoom-in" className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Blogs</h1>
          <p className="mt-2">
            Explore our latest articles and updates about the festival.
          </p>
        </div>
      </header>

      {/* Blog Cards */}
      <section className="py-12 bg-[#0F2441]">
        <div className="container mx-4 w-fit md:mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <div
                data-aos="fade-up"
                key={blog.id}
                className="bg-[#0F1839] rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-orange-600">
                    {blog.title}
                  </h2>
                  <p className="text-gray-300 text-sm">{blog.date}</p>
                  <p className="text-gray-400 mt-2">{blog.excerpt}</p>
                  <a
                    href={`/blog/${blog.id}`}
                    className="block mt-4 text-indigo-600 hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
