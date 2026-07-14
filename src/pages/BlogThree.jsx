import "./BlogDetails.css";

export default function BlogThree() {
  return (
    <div className="blog-details">

      {/* Hero */}

      <section
        className="blog-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('/images/resolutions.webp')",
        }}
      >
        <div className="overlay">

          <span className="category">
            Personal Growth
          </span>

          <h1>New Year Resolutions and How to Nail It</h1>

          <div className="meta">
            <span>Published by Shashank Lalwani</span>
            <span>Jan 09, 2022</span>
            <span>6 min read</span>
          </div>

        </div>
      </section>

      <div className="blog-container">

        {/* Introduction */}

        <section className="intro-card">

          <h2>Every New Year is a New Beginning</h2>

          <p>
            Every new year begins with excitement, hope, and a fresh list of
            resolutions. Unfortunately, motivation fades quickly for many
            people, and old habits return.
          </p>

          <blockquote>
            "Success is not built on motivation alone—it's built on consistent action."
          </blockquote>

          <p>
            If you're determined to make this year different, these six
            powerful habits will help you stay committed and achieve your goals.
          </p>

        </section>

        {/* Goal Setting */}

        <section className="blog-card">

          <h2>1. Set Clear & Tangible Goals</h2>

          <p>
            Goals provide direction. Instead of keeping them in your mind,
            write them down and create a realistic action plan.
          </p>

          <ul>
            <li>Write your Top 10 yearly goals.</li>
            <li>Select your Top 3 priorities.</li>
            <li>Perform a Life Audit.</li>
            <li>Create a monthly action plan.</li>
          </ul>

        </section>

        {/* Gratitude */}

        <section className="blog-card">

          <h2>2. Practice Gratitude</h2>

          <p>
            Instead of waiting for success, feel grateful as though you've
            already achieved your dreams.
          </p>

          <ul>
            <li>I'm grateful for my dream job.</li>
            <li>I'm grateful for a healthy body.</li>
            <li>I'm grateful for financial abundance.</li>
            <li>I'm grateful for inner peace.</li>
          </ul>

        </section>

        {/* Health */}

        <section className="highlight-box">

          <h2>Your Health is Your Greatest Investment</h2>

          <ul>
            <li>Eat nutritious food.</li>
            <li>Exercise consistently.</li>
            <li>Meditate daily.</li>
            <li>Sleep 7–8 hours.</li>
            <li>Relax and recharge regularly.</li>
          </ul>

        </section>

        {/* Focus */}

        <section className="blog-card">

          <h2>4. Stay Focused</h2>

          <p>
            Modern distractions steal your time and energy. Protect your focus
            every single day.
          </p>

          <ul>
            <li>Avoid endless social media scrolling.</li>
            <li>Turn off unnecessary notifications.</li>
            <li>Work on your highest priorities first.</li>
            <li>Use the Pomodoro Technique.</li>
          </ul>

        </section>

        {/* Consistency */}

        <section className="blog-card">

          <h2>5. Stay Consistent</h2>

          <p>
            Progress isn't always visible immediately, but every small step
            moves you closer to success.
          </p>

          <ul>
            <li>Show up every day.</li>
            <li>Trust the process.</li>
            <li>Never quit too early.</li>
            <li>Celebrate small wins.</li>
          </ul>

        </section>

        {/* Self Investment */}

        <section className="blog-card">

          <h2>6. Invest in Yourself</h2>

          <p>
            The best investment you'll ever make is in your own growth.
          </p>

          <ul>
            <li>Read inspiring books.</li>
            <li>Attend workshops.</li>
            <li>Learn from mentors.</li>
            <li>Develop new skills.</li>
            <li>Seek coaching when needed.</li>
          </ul>

        </section>

        {/* Quote */}

        <section className="quote-card">

          <blockquote>
            "If you sacrifice your goals temporarily, your goals will sacrifice you permanently."
          </blockquote>

        </section>

        {/* Conclusion */}

        <section className="conclusion">

          <h2>Final Thoughts</h2>

          <p>
            These six habits can completely transform your life if practiced
            consistently. Real change doesn't happen overnight—it happens
            through small actions repeated every day.
          </p>

          <p>
            Believe in yourself, stay disciplined, and never stop learning.
            Your future is created by the choices you make today.
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
            Go Nail It ❤️
          </p>

        </section>

      </div>

    </div>
  );
}