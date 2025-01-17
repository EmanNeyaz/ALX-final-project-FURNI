import React, { useState } from "react";
import "./BlogPage.css";
import blogTrends from "../../../assets/blog-trends.jpg";
import blogSofa from "../../../assets/blog-sofa.jpg";
import blogEco from "../../../assets/blog-eco.jpg";




const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Top Furniture Trends for 2025",
      description: "Discover the latest styles and designs making waves this year.",
      fullContent:
        "Furniture trends in 2025 are all about sustainability, modern aesthetics, and multifunctional designs. Explore eco-friendly materials, bold colors, and minimalist styles to enhance your living space.",
      image: blogTrends,
      date: "January 6, 2025",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Sofa",
      description: "Tips to help you pick a sofa that fits your style and comfort.",
      fullContent:
        "Choosing the perfect sofa involves considering factors like size, material, color, and functionality. Learn how to measure your space, choose the right fabric, and match your sofa to your decor.",
      image: blogSofa,
      date: "December 28, 2024",
    },
    {
      id: 3,
      title: "5 Tips for Maintaining Wooden Furniture",
      description: "Keep your wooden furniture looking like new with these simple tips.",
      fullContent:
        "Maintaining wooden furniture requires regular dusting, polishing, and protection from moisture. Discover easy steps to preserve the beauty and longevity of your wooden pieces.",
      image: blogEco,
      date: "December 15, 2024",
    },
  ];

  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleReadMore = (id) => {
    setExpandedBlogId((prevId) => (prevId === id ? null : id)); // Toggle content
  };

  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-date">{blog.date}</p>
              {expandedBlogId === blog.id && (
                <p className="blog-full-content">{blog.fullContent}</p>
              )}
              <button
                className="read-more"
                onClick={() => handleReadMore(blog.id)}
              >
                {expandedBlogId === blog.id ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;