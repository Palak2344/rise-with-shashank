import { Link } from "react-router-dom";
import { FaArrowRight, FaClock } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Stagger, StaggerItem } from "../ui/Motion";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "Self Love: The four ways",
    category: "Mindfulness",
    readTime: "5 min read",
    image: "/images/self.jpg",
    description:
      "Self-love is the foundation of a happier and healthier life. Discover the four essential pillars of self-care—physical, emotional, social, and mental—and learn simple daily practices to nurture yourself and create lasting inner well-being.",
    path: "/blog/self-love",
  },
  {
    id: 2,
    title: "Healthy Work Life Balance",
    category: "Meditation",
    readTime: "4 min read",
    image: "/images/balance.webp",
    description:
      "Achieving a healthy work-life balance isn't about dividing your time equally—it's about creating harmony between your professional responsibilities and personal well-being.",
    path: "/blog/meditation",
  },
  {
    id: 3,
    title: "New Year Resolutions",
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
        <SectionHead eyebrow="Latest Articles" title="Insights on Mindfulness, Meditation &" highlight="Personal Growth">
          Read articles written by Shashank Lalwani to inspire self-awareness,
          mindfulness, and personal transformation.
        </SectionHead>

        <Stagger className="blog-grid" stagger={0.15}>
          {blogs.map((blog) => (
            <StaggerItem key={blog.id}>
              <Link to={blog.path} className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                  <span className="blog-category">{blog.category}</span>
                </div>

                <div className="blog-body">
                  <span className="blog-time">
                    <FaClock /> {blog.readTime}
                  </span>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>

                  <span className="blog-link">
                    Read Full Article <FaArrowRight />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Blog;
