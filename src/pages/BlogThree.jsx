import "./BlogDetails.css";

export default function BlogThree() {
  return (
    <div className="blog-details">

      {/* Hero Section */}
     <section
  className="blog-hero"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/images/resolutions.webp')",
  }}
>
        <div className="overlay">
          <span className="category">Personal Growth</span>

          <h1>New Year Resolutions and How to Nail It</h1>

          <div className="meta">
            <span>Published by Shashank Lalwani</span>
            <span>Jan 09, 2022</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <div className="blog-container">

        <p className="intro">
          Every new year begins with excitement, hope, and a fresh list of
          resolutions. However, as the weeks pass, motivation often fades and
          many of us return to our old habits.
        </p>

        <blockquote>
          "Success is not built on motivation alone—it's built on consistent
          action."
        </blockquote>

        <p>
          If you're determined to make this year different, these six simple
          life hacks can help you stay committed and achieve your goals.
        </p>

        {/* Goal Setting */}

        <section className="blog-card">
          <h2>1. Set Tangible Goals</h2>

          <p>
            Many people either postpone setting goals or struggle because they
            aren't sure what they truly want. Even when they know their goals,
            self-doubt often gets in the way.
          </p>

          <h3>Here's what you can do:</h3>

          <ul>
            <li>Write down your Top 10 goals for the year.</li>
            <li>Choose your Top 3 priorities for the next quarter.</li>
            <li>Perform a Life Audit to understand where you currently stand.</li>
            <li>Create a practical action plan to achieve those goals.</li>
          </ul>
        </section>

        {/* Gratitude */}

        <section className="blog-card">
          <h2>2. Practice Gratitude for Your Goals</h2>

          <p>
            Instead of waiting for success, begin living with gratitude as if
            you've already achieved your goals.
          </p>

          <h3>Examples:</h3>

          <ul>
            <li>I'm grateful to move into my new home by March.</li>
            <li>I'm grateful to receive my dream job.</li>
            <li>I'm grateful to have a healthy and fit body.</li>
          </ul>

          <p>
            Visualize your success every day and experience the emotions
            associated with achieving it.
          </p>
        </section>

        {/* Health */}

        <section className="blog-card">
          <h2>3. Prioritize Your Health</h2>

          <p>
            Your health is your greatest investment. Without it, achieving your
            dreams becomes much more difficult.
          </p>

          <ul>
            <li>Eat healthy and balanced meals.</li>
            <li>Exercise at least three times a week.</li>
            <li>Meditate regularly.</li>
            <li>Get enough sleep.</li>
            <li>Take time to relax and recharge.</li>
          </ul>
        </section>

        {/* Focus */}

        <section className="blog-card">
          <h2>4. Stay Focused</h2>

          <p>
            Modern distractions constantly compete for our attention and reduce
            our productivity.
          </p>

          <ul>
            <li>Avoid unnecessary social media scrolling.</li>
            <li>Limit distractions from notifications.</li>
            <li>Stay committed to your priorities.</li>
            <li>Use the Pomodoro Technique to improve productivity.</li>
          </ul>
        </section>

        {/* Consistency */}

        <section className="blog-card">
          <h2>5. Be Consistent</h2>

          <p>
            Results may not appear immediately, but consistency always pays off.
            Every small effort moves you closer to your goal.
          </p>

          <ul>
            <li>Keep showing up every day.</li>
            <li>Don't quit when progress feels slow.</li>
            <li>Trust the process.</li>
          </ul>
        </section>

        {/* Growth */}

        <section className="blog-card">
          <h2>6. Invest in Yourself</h2>

          <p>
            Personal growth requires continuous learning and guidance.
          </p>

          <ul>
            <li>Read inspiring books.</li>
            <li>Watch educational videos.</li>
            <li>Attend seminars and workshops.</li>
            <li>Learn from mentors and coaches.</li>
            <li>Seek help whenever you feel stuck.</li>
          </ul>
        </section>

        {/* Conclusion */}

        <section className="conclusion">

          <h2>Final Thoughts</h2>

          <p>
            These six habits can completely transform your life within a year if
            you remain committed and consistent.
          </p>

          <blockquote>
            "If you sacrifice your goals temporarily, your goals will sacrifice
            you permanently."
          </blockquote>

          <p>
            Believe in yourself, stay disciplined, and never stop growing.
          </p>

          <a
            href="https://pages.razorpay.com/heal1"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Book a Session
          </a>

          <p style={{ marginTop: "30px", fontWeight: "600" }}>
            Go Nail It ❤️
          </p>

        </section>

      </div>

    </div>
  );
}