import "./Book.css";
import { FaAmazon } from "react-icons/fa";


function Book() {
  return (
    <section className="books" id="books">
      <div className="container">

        <div className="books-header">
          <span className="section-tag">
            Best Selling Book
          </span>

          <h2 className="section-title">
            Read the Book That Can
            <span> Transform Your Life</span>
          </h2>

          <p className="section-description">
            Discover practical techniques to build better habits,
            improve your mindset, reduce stress, and create
            an extraordinary lifestyle.
          </p>
        </div>

        <div className="book-card">

          <div className="book-image">
            <img
              src="/images/book.jpg"
              alt="The Amazing Lifestyle"
            />
          </div>

          <div className="book-content">

            <span className="book-tag">
              Amazon Best Seller
            </span>

            <h3>The Amazing Lifestyle</h3>

            <p>
              This book is your practical guide to creating lasting
              positive habits, mastering your mind, improving
              productivity, reducing stress, and living a peaceful,
              purpose-driven life.
            </p>

            <ul>
              <li>✔ Build Powerful Daily Habits</li>
              <li>✔ Improve Focus & Productivity</li>
              <li>✔ Reduce Stress & Anxiety</li>
              <li>✔ Learn Meditation Techniques</li>
              <li>✔ Create a Meaningful Lifestyle</li>
            </ul>

            <a
              href="https://www.amazon.in/dp/9361854015"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-btn"
            >
              <FaAmazon />
              <span>Buy on Amazon</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Book;