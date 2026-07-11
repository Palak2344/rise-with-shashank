import "./BlogDetails.css";

export default function BlogTwo() {
  return (
    <div className="blog-details">

      {/* Hero Section */}
   <section
  className="blog-hero"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/images/balance.webp')",
  }}
>
        <div className="overlay">
          <span className="category">Work-Life Balance</span>

          <h1>Healthy Work Life Balance</h1>

          <div className="meta">
            <span>Published by Shashank Lalwani</span>
            <span>Dec 16, 2022</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <div className="blog-container">

        <p className="intro">
          We often hear the phrase <strong>"Healthy Work-Life Balance"</strong>,
          but what does it truly mean? A healthy work-life balance is about
          creating harmony between your professional responsibilities and your
          personal well-being so that neither is neglected.
        </p>

        <blockquote>
          "Success becomes meaningful only when your career and personal life
          grow together."
        </blockquote>

        {/* Understanding Work-Life Balance */}

        <section className="blog-card">
          <h2>What is Work-Life Balance?</h2>

          <p>
            Balance means maintaining stability between two important parts of
            life—your professional journey and your personal life. Sometimes
            this balance may be equal, while at other times one side may demand
            more attention than the other.
          </p>

          <p>
            Research suggests that more than 60% of working professionals
            experience stress due to an unhealthy work-life balance.
          </p>

          <h3>Professional Life includes:</h3>

          <ul>
            <li>Career ambitions</li>
            <li>Professional growth</li>
            <li>Meeting goals</li>
            <li>Learning new skills</li>
          </ul>

          <h3>Personal Life includes:</h3>

          <ul>
            <li>Physical health</li>
            <li>Mental wellness</li>
            <li>Family time</li>
            <li>Hobbies & leisure</li>
            <li>Spiritual growth</li>
          </ul>
        </section>

        {/* Healthy Balance */}

        <section className="blog-card">
          <h2>What Does a Healthy Work-Life Balance Look Like?</h2>

          <p>
            A healthy work-life balance doesn't mean splitting your time equally
            between work and life. It means feeling fulfilled and peaceful in
            both areas.
          </p>

          <ul>
            <li>Complete your work without constant stress.</li>
            <li>Have enough time for hobbies and personal interests.</li>
            <li>Get proper sleep and eat peacefully.</li>
            <li>Enjoy vacations without worrying about work.</li>
            <li>Spend quality time with your spouse, children, and parents.</li>
            <li>Maintain your mental and physical health.</li>
          </ul>
        </section>

        {/* Signs */}

        <section className="blog-card">
          <h2>Signs Your Work-Life Balance is Unhealthy</h2>

          <ul>
            <li>You constantly feel stressed before starting work.</li>
            <li>You don't get enough sleep.</li>
            <li>You work long hours every day.</li>
            <li>You fear missing out (FOMO) and never take breaks.</li>
            <li>You continue working during weekends.</li>
            <li>Your work affects your family life.</li>
            <li>Your sleep schedule is disturbed due to different time zones.</li>
          </ul>
        </section>

        {/* Improve */}

        <section className="blog-card">
          <h2>How to Improve Your Work-Life Balance</h2>

          <h3>1. Pause & Reflect</h3>

          <p>Ask yourself:</p>

          <ul>
            <li>What is causing me stress?</li>
            <li>How is it affecting my life?</li>
            <li>How am I feeling?</li>
            <li>What needs to change?</li>
          </ul>

          <h3>2. Prioritize</h3>

          <p>
            Focus first on the areas that require immediate attention, whether
            in your career or personal life.
          </p>

          <h3>3. Stop Procrastinating</h3>

          <p>
            Action creates change. Don't delay important improvements.
          </p>

          <h3>4. Build Healthy Habits</h3>

          <ul>
            <li>Take regular breaks at work.</li>
            <li>Drink plenty of water.</li>
            <li>Exercise regularly.</li>
            <li>Meditate every day.</li>
            <li>Use the Pomodoro Technique to stay productive.</li>
            <li>Learn to say "No" when necessary.</li>
          </ul>
        </section>

        {/* Conclusion */}

        <section className="conclusion">

          <h2>Final Thoughts</h2>

          <p>
            A healthy work-life balance is not about working less—it is about
            working smarter while also making time for yourself and your loved
            ones.
          </p>

          <p>
            Acknowledge your emotions before they lead to burnout. Speak up
            whenever necessary and remember that your mental health is just as
            important as your career.
          </p>

          <blockquote>
            "Balance isn't about dividing your time equally—it's about giving
            each part of your life the attention it deserves."
          </blockquote>

          <p>
            If you are unable to achieve this on your own, don't hesitate to
            seek support from an expert.
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
            Cheers and have a lovely day! 😊
          </p>

        </section>

      </div>
    </div>
  );
}