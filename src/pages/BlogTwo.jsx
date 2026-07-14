import "./BlogDetails.css";

export default function BlogTwo() {
  return (
    <div className="blog-details">

      {/* Hero */}

      <section
        className="blog-hero"
        style={{
          backgroundImage: "url('/images/balance.webp')",
        }}
      >
        <div className="overlay">

          <span className="category">
            Work-Life Balance
          </span>

          <h1>Healthy Work-Life Balance</h1>

          <div className="meta">
            <span>Published by Shashank Lalwani</span>
            <span>Dec 16, 2022</span>
            <span>6 min read</span>
          </div>

        </div>
      </section>

      <div className="blog-container">

        {/* Intro */}

        <section className="intro-card">

          <h2>
            What is Work-Life Balance?
          </h2>

          <p>
            Work-life balance is about maintaining harmony between your
            professional responsibilities and your personal well-being.
            Success becomes meaningful when both your career and your
            personal life grow together.
          </p>

          <blockquote>
            "Success becomes meaningful only when your career and personal life grow together."
          </blockquote>

        </section>

        {/* Card */}

        <section className="blog-card">

          <h2>Professional Life Includes</h2>

          <ul>
            <li>Career ambitions</li>
            <li>Professional growth</li>
            <li>Meeting goals</li>
            <li>Learning new skills</li>
            <li>Improving productivity</li>
          </ul>

        </section>

        {/* Card */}

        <section className="blog-card">

          <h2>Personal Life Includes</h2>

          <ul>
            <li>Physical health</li>
            <li>Mental wellness</li>
            <li>Family time</li>
            <li>Friends and relationships</li>
            <li>Hobbies & leisure</li>
            <li>Spiritual growth</li>
          </ul>

        </section>

        {/* Card */}

        <section className="blog-card">

          <h2>
            What Does a Healthy Balance Look Like?
          </h2>

          <ul>
            <li>Complete work without constant stress.</li>
            <li>Sleep peacefully every night.</li>
            <li>Enjoy vacations without worrying about work.</li>
            <li>Spend quality time with family.</li>
            <li>Exercise regularly.</li>
            <li>Feel mentally calm and emotionally balanced.</li>
          </ul>

        </section>

        {/* Highlight */}

        <section className="highlight-box">

          <h2>
            Signs of Poor Work-Life Balance
          </h2>

          <ul>
            <li>Constant stress.</li>
            <li>Long working hours.</li>
            <li>Weekend work.</li>
            <li>Poor sleep.</li>
            <li>Burnout.</li>
            <li>Family relationships suffering.</li>
            <li>No time for yourself.</li>
          </ul>

        </section>

        {/* Tips */}

        <section className="blog-card">

          <h2>How to Improve Your Balance</h2>

          <h3>1. Pause & Reflect</h3>

          <p>
            Identify what is creating stress and what needs to change.
          </p>

          <h3>2. Prioritize</h3>

          <p>
            Focus on the things that truly matter instead of trying to do everything.
          </p>

          <h3>3. Stop Procrastinating</h3>

          <p>
            Action creates positive change.
          </p>

          <h3>4. Build Healthy Habits</h3>

          <ul>
            <li>Exercise daily</li>
            <li>Meditate every morning</li>
            <li>Drink enough water</li>
            <li>Take regular breaks</li>
            <li>Use the Pomodoro Technique</li>
            <li>Learn to say No</li>
          </ul>

        </section>

        {/* Quote */}

        <section className="quote-card">

          <blockquote>
            "Balance isn't about dividing your time equally—it's about giving each part of your life the attention it deserves."
          </blockquote>

        </section>

        {/* Conclusion */}

        <section className="conclusion">

          <h2>Final Thoughts</h2>

          <p>
            A healthy work-life balance isn't about working less—it's about
            working smarter while protecting your physical, emotional, and
            mental well-being.
          </p>

          <p>
            Remember, your health, happiness, and relationships are just as
            valuable as your career. When you nurture both sides of life,
            success becomes truly meaningful.
          </p>

          <a
            href="https://pages.razorpay.com/heal1"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Book a Session
          </a>

          <p className="ending">
            Cheers and have a wonderful day! 🌿
          </p>

        </section>

      </div>

    </div>
  );
}