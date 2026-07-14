import { Link } from "react-router-dom";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "The Power of Mindfulness",
    category: "Mindfulness",
    readTime: "5 min read",
    image: "/images/self.jpg",
    description:
      "Self-love is the foundation of a happier and healthier life. Discover the four essential pillars of self-care—physical, emotional, social, and mental—and learn simple daily practices to nurture yourself and create lasting inner well-being.",
    path: "/blog/self-love",
  },
  {
    id: 2,
    title: "Meditation & Emotional Well-being",
    category: "Meditation",
    readTime: "4 min read",
    image: "/images/balance.webp",
    description:
      "Achieving a healthy work-life balance isn't about dividing your time equally—it's about creating harmony between your professional responsibilities and personal well-being.",
    path: "/blog/meditation",
  },
  {
    id: 3,
    title: "Finding Peace Within Yourself",
    category: "Self Growth",
    readTime: "6 min read",
    image: "/images/resolutions.webp",
    description:
      "Success isn't built on resolutions alone—it's built on consistent action. Learn practical strategies to stay motivated and achieve your goals.",
    path: "/blog/finding-peace",
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="container">

        <div className="section-header">
          <span>Latest Articles</span>

          <h2>
            Insights on Mindfulness,
            <br />
            Meditation & Personal Growth
          </h2>

          <p>
            Read articles written by Shashank Lalwani to inspire
            self-awareness, mindfulness, and personal transformation.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>

              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-body">

                <span className="blog-category">
                  {blog.category}
                </span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <div className="blog-footer">

                  <span>{blog.readTime}</span>

                 <Link to={blog.path}>
  Read Full Article →
</Link> 
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;