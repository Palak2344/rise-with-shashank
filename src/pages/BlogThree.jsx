import "./BlogDetails.css";

export default function BlogThree() {
  return (
    <div className="blog-details">

      {/* HERO */}
<section
  className="blog-hero"
  style={{
    backgroundImage: "url('/images/resolutions.webp')",
  }}
></section>

<div className="blog-header">

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
      {/* ARTICLE */}

      <div className="blog-container">

        <p className="intro">
          We have completed two weeks of 2022 and most of us have already
          set New Year resolutions. The challenge is that as the weeks
          pass, the same motivation fades and we are back to square one.
        </p>

        <p>
          In order to keep oneself motivated, I have drafted six life
          hacks which shall keep you motivated and change your life upside
          down if you are aligned to them.
        </p>

        <blockquote>
          "Success is not built on motivation alone—it's built on consistent action."
        </blockquote>

        {/* Goal Setting */}

        <h2> Set Tangible Goals</h2>

        <p>
          Most of us procrastinate setting goals, or we are not aware of
          what we want from life. Even if we are aware, there is self-doubt
          about whether we will be able to achieve them.
        </p>

        <p>Do this:</p>

        <ul>
          <li>Write the Top 10 goals you wish to achieve by next year.</li>
          <li>Prioritise the Top 3 goals you wish to achieve by next quarter.</li>
          <li>Do a Life Audit – Where do you currently stand on these goals?</li>
          <li>Analyse what needs to be done to achieve those goals.</li>
        </ul>

        {/* Gratitude */}

        <h2>Practice Gratitude for Goals</h2>

        <p>
          Practice as if you are already living those goals and give
          timelines to them.
        </p>

        <ul>
          <li>
            I am grateful to live in my new home by March 2022.
            (Put as many details as possible.)
          </li>

          <li>
            I am grateful to have this new job as an Assistant Manager in
            XYZ Corporation by December 2022.
          </li>

          <li>
            I am grateful to have a beach body by February 2022.
          </li>
        </ul>

        <p>
          Visualise as if you are already living that goal and truly feel it.
        </p>

        {/* Health */}

        <h2> Prioritise Your Health</h2>

        <ul>
          <li>Eat well (right and quantified nutrition).</li>
          <li>Exercise at least three times a week.</li>
          <li>Meditate.</li>
          <li>Sleep well.</li>
          <li>Take time to relax.</li>
        </ul>

        {/* Focus */}

        <h2> Focus</h2>

        <p>
          Avoid distractions.
        </p>

        <p>
          Grabbing that snack, scrolling social media, and checking
          unnecessary notifications are all distractions.
        </p>

        <p>
          We need to resist these impulses and focus on the goals we have
          set.
        </p>

        <p>
          Use the Pomodoro Technique to avoid all distractions and improve
          your productivity.
        </p>

        {/* Consistency */}

        <h2>Consistency</h2>

        <p>
          Whether or not we get the desired results, make sure we remain
          consistent with our efforts. For some reason, results might be
          delayed, but they are bound to happen, so never lose hope.
        </p>

        <p>
          Show up every time. Do not give up.
        </p>

        {/* Growth */}

        <h2>Investing in Yourself is Investing in Growth</h2>

        <p>
          You cannot figure out everything on your own every time.
          Invest in books, invest time watching educational videos,
          invest in mentors, and invest in seminars.
        </p>

        <p>
          Basically, invest in everything you intuitively feel will lead
          to growth.
        </p>

        <p>
          Seek help when you feel you are stuck.
        </p>

        <blockquote>
          "If you sacrifice your goals temporarily, your goals will sacrifice you permanently."
        </blockquote>

        {/* Conclusion */}

        <h2>Final Thoughts</h2>

        <p>
          These six things can change your life upside down in just one
          year. Be consistent, trust the process, and keep showing up
          every single day.
        </p>

        <p>
          Small actions repeated consistently create extraordinary
          results. Believe in yourself and never stop investing in your
          growth.
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
          Go Nail It ❤️
        </p>

      </div>

    </div>
  );
}