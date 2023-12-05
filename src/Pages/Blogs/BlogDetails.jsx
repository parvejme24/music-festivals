import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlogs] = useState([]);
  const { id } = useParams();
  const blogs = useLoaderData();
  useEffect(() => {
    let findBlog = blogs?.find((blog) => blog.id == id);
    setBlogs(findBlog);
  }, [blogs, id]);

  if (!blog) {
    return <div className="text-center">Blog not found</div>;
  }

  return (
    <div className="bg-[#0F2441]">
      <Helmet>
        <title>Music Festival | Blog Details</title>
      </Helmet>
      {/* Blog Details Header */}
      <header className="bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-center bg-cover bg-no-repeat pt-40 -mt-24 pb-10 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <p className="mt-2">{blog.date}</p>
        </div>
      </header>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="bg-[#0F1839] rounded-lg shadow-md p-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover mb-6"
            />
            <div className="text-gray-200">{blog.content}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
