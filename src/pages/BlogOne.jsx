import "./BlogDetails.css";

export default function BlogOne() {
  return (
    <div className="blog-details">

      {/* HERO */}
   <section
  className="blog-hero"
  style={{
    backgroundImage: "url('/images/self.jpg')",
  }}
>
        <div className="overlay">

          <span className="category">
            Self Love
          </span>

          <h1>Self Love: The Four Ways</h1>

          <div className="meta">
            <span>Published by Shashank Lalwani</span>
            <span>Dec 27, 2022</span>
            <span>5 min read</span>
          </div>

        </div>
      </section>

      {/* ARTICLE */}

      <div className="blog-container">

        <p className="intro">
          Self Love has been the most important part of everyone's life and yet
          ignored largely.
        </p>

        <p>
          It is the one to be prioritized and taken care of well.
        </p>

        <p>
          There are four types of care that need to be taken care of in
          Self Love.
        </p>

        {/* Physical */}

        <h2>1. Physical Self-Care</h2>

        <p>
          Anything related to your physical body and health or doing stretching
          exercises. Taking care of your body improves your energy, confidence,
          and overall well-being.
        </p>

        <p>Some ways of Physical Self-Care include:</p>

        <ul>
          <li>Take a walk.</li>
          <li>Drink more water.</li>
          <li>Stretch your body daily.</li>
          <li>Get a massage.</li>
          <li>Spend 10 minutes under the sun.</li>
          <li>Go for a bike ride.</li>
          <li>Go hiking, camping or backpacking.</li>
          <li>Sleep early every night.</li>
        </ul>

        {/* Emotional */}

        <h2>2. Emotional Self-Care</h2>

        <p>
          Emotional self-love helps us manage emotions during both good and bad
          times. It teaches us to accept ourselves and become emotionally
          stronger.
        </p>

        <p>Practice Emotional Self-Care by:</p>

        <ul>
          <li>Learning to say "No".</li>
          <li>Scheduling "Me Time".</li>
          <li>Rewarding yourself.</li>
          <li>Learning something new.</li>
          <li>Creating a relaxing evening routine.</li>
          <li>Writing a gratitude journal.</li>
          <li>Accepting your emotions.</li>
          <li>Practicing mindfulness.</li>
        </ul>

        {/* Social */}

        <h2>3. Social Self-Care</h2>

        <p>
          Social self-care focuses on creating healthy relationships and
          spending time with people who inspire positivity.
        </p>

        <p>Some ideas include:</p>

        <ul>
          <li>Call a close friend.</li>
          <li>Reconnect with old friends.</li>
          <li>Spend quality time with family.</li>
          <li>Ask for help whenever needed.</li>
          <li>Join a support group.</li>
          <li>Take a road trip with loved ones.</li>
        </ul>

        {/* Mental */}

        <h2>4. Mental Self-Care</h2>

        <p>
          Mental self-care means taking care of your thoughts, reducing stress,
          and training your mind to remain calm and focused.
        </p>

        <p>Practice Mental Self-Care through:</p>

        <ul>
          <li>Meditating every day.</li>
          <li>Breathing exercises.</li>
          <li>Reading inspiring books.</li>
          <li>Helping someone in need.</li>
          <li>Doing acts of kindness.</li>
          <li>Using your strengths every day.</li>
        </ul>

        {/* Quote */}

        <blockquote>
          "If you are willing to transform into your true self,
          prioritize yourself."
        </blockquote>

        {/* Conclusion */}

        <h2>Final Thoughts</h2>

        <p>
          Self-love is not selfish—it is essential. When you begin taking care
          of yourself physically, emotionally, socially, and mentally, every
          other part of life starts becoming healthier and more meaningful.
        </p>

        <p>
          Your relationship with yourself determines the quality of your
          relationships with others. The more you love and respect yourself,
          the more confident, peaceful, and fulfilled your life becomes.
        </p>

        <p>
          Start with one small habit today. Small daily improvements create
          extraordinary transformations over time.
        </p>

        <blockquote>
          "The journey towards a better life begins with the way you treat
          yourself."
        </blockquote>

        <p>
          In case of any help, feel free to reach out.
        </p>

        <a
          href="https://www.fitmind.in"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Visit FitMind
        </a>

        <p
          style={{
            marginTop: "35px",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Have a peaceful day. 🌿
        </p>

      </div>

    </div>
  );
}