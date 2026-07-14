import "./BlogDetails.css";

export default function BlogTwo() {
  return (
    <div className="blog-details">

      {/* HERO */}

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

      {/* ARTICLE */}

      <div className="blog-container">

        <p className="intro">
          We often hear the phrase <strong>"Healthy Work-Life Balance"</strong>,
          but what does it truly mean? It is about creating harmony between
          your professional responsibilities and your personal well-being.
        </p>

        <p>
          A healthy balance allows you to grow in your career while still
          taking care of your health, relationships, and happiness.
        </p>

        <blockquote>
          "Success becomes meaningful only when your career and personal life grow together."
        </blockquote>

        {/* Professional */}

        <h2>Professional Life Includes</h2>

        <p>
          Your professional life is the part of your journey that focuses on
          building your career, achieving goals, and becoming the best version
          of yourself at work.
        </p>

        <ul>
          <li>Career ambitions</li>
          <li>Professional growth</li>
          <li>Meeting goals</li>
          <li>Learning new skills</li>
          <li>Improving productivity</li>
        </ul>

        {/* Personal */}

        <h2>Personal Life Includes</h2>

        <p>
          Personal life is equally important because it helps you stay mentally,
          emotionally, and physically healthy.
        </p>

        <ul>
          <li>Physical health</li>
          <li>Mental wellness</li>
          <li>Family time</li>
          <li>Friends and relationships</li>
          <li>Hobbies & leisure</li>
          <li>Spiritual growth</li>
        </ul>

        {/* Healthy Balance */}

        <h2>What Does a Healthy Work-Life Balance Look Like?</h2>

        <p>
          A healthy work-life balance doesn't mean dividing your time equally.
          It means giving enough attention to both your work and your personal
          life so that neither suffers.
        </p>

        <ul>
          <li>Complete work without constant stress.</li>
          <li>Sleep peacefully every night.</li>
          <li>Enjoy vacations without worrying about work.</li>
          <li>Spend quality time with your family.</li>
          <li>Exercise regularly.</li>
          <li>Feel mentally calm and emotionally balanced.</li>
        </ul>

        {/* Poor Balance */}

        <h2>Signs of Poor Work-Life Balance</h2>

        <p>
          An unhealthy work-life balance often leads to burnout, anxiety, and
          poor relationships. Recognizing these signs early can help you make
          positive changes.
        </p>

        <ul>
          <li>Constant stress</li>
          <li>Working long hours every day</li>
          <li>Working during weekends</li>
          <li>Poor sleep quality</li>
          <li>Feeling exhausted all the time</li>
          <li>Family relationships suffering</li>
          <li>No personal time</li>
        </ul>

        {/* Tips */}

        <h2>How to Improve Your Work-Life Balance</h2>

        <h3>1. Pause & Reflect</h3>

        <p>
          Ask yourself what is causing stress and what changes you need to make.
        </p>

        <h3>2. Prioritize What Matters</h3>

        <p>
          Focus on important tasks instead of trying to do everything at once.
        </p>

        <h3>3. Stop Procrastinating</h3>

        <p>
          Taking action is the first step toward building a healthier life.
        </p>

        <h3>4. Build Healthy Daily Habits</h3>

        <ul>
          <li>Exercise regularly.</li>
          <li>Meditate every day.</li>
          <li>Drink enough water.</li>
          <li>Take regular breaks while working.</li>
          <li>Use the Pomodoro Technique.</li>
          <li>Learn to say "No" when necessary.</li>
        </ul>

        <blockquote>
          "Balance isn't about dividing your time equally—it's about giving each part of your life the attention it deserves."
        </blockquote>

        {/* Conclusion */}

        <h2>Final Thoughts</h2>

        <p>
          A healthy work-life balance isn't about working less—it's about
          working smarter while protecting your physical, emotional, and mental
          well-being.
        </p>

        <p>
          Remember, your health, happiness, and relationships are just as
          valuable as your career. When you nurture both sides of life,
          success becomes truly meaningful.
        </p>

        <p>
          Small daily habits create long-term balance. Start with one positive
          change today and continue building a lifestyle that supports both
          your personal happiness and professional success.
        </p>

        <blockquote>
          "Your career is a part of your life—not your entire life."
        </blockquote>

        <p>
          If you need guidance in creating a healthier and more fulfilling
          lifestyle, don't hesitate to reach out.
        </p>

        <a
          href="https://pages.razorpay.com/heal1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Book a Session
        </a>

        <p
          style={{
            marginTop: "35px",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Cheers and have a wonderful day! 🌿
        </p>

      </div>

    </div>
  );
}