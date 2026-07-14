import "./Book.css";
import { FaAmazon, FaHeadphones } from "react-icons/fa";

function Book() {
  return (
    <section className="books" id="books">
      <div className="container">

        {/* Header */}

        <div className="books-header">
          <span className="section-tag">
            Best Selling Book
          </span>

          <h2 className="section-title">
            Read or Listen to the Book That Can
            <span> Transform Your Life</span>
          </h2>

          <p className="section-description">
            Discover practical techniques to build better habits,
            improve your mindset, reduce stress, and create
            an extraordinary lifestyle through the book or audiobook.
          </p>
        </div>

        {/* Book Card */}

        <div className="book-card">

          <div className="book-image">
            <img
              src="/images/book.jpg"
              alt="The Amazing Lifestyle Book"
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

            {/* Buttons */}

            <div className="book-buttons">

              <a
                href="https://www.amazon.in/Awesomeness-Shashank-Lalwani-Sreejata-Mukherjee/dp/9361853392"
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn"
              >
                <FaAmazon />
                <span>Buy on Amazon</span>
              </a>

              <a
                href="https://www.amazon.in/30-Days-Mental-Well-being-Shashank/dp/B09YDPH1TL/ref=sr_1_1?crid=39TPUC0C9MMBR&dib=eyJ2IjoiMSJ9.B9rkrH9pCiq0KdS7Go4Thw8eS1lzjwWsxpGjlbA3yqU._pLdfvwyanW72agd4e6jCtyT77VU_OTmO93icjCEGuA&dib_tag=se&keywords=shashank+lalwani&qid=1784010311&sprefix=shashank+lalwani%2Caps%2C250&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="audible-btn"
              >
                <FaHeadphones />
                <span>Listen on Audible</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Book;