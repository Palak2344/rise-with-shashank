import "./BlogDetails.css";

export default function BlogOne() {
  return (
    <div className="blog-details">
<section
  className="blog-hero"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/images/self.jpg')",
  }}
>
        <div className="overlay">
          <span className="category">Self Love</span>

          <h1>Self Love: The Four Ways</h1>

          <div className="meta">
            <span>Published by Shashank Lalwani</span>
            <span>Dec 27, 2022</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      <div className="blog-container">

        <p className="intro">
          Self Love has been the most important part of everyone's life and yet
          ignored largely.
        </p>

        <p>
          It is the one to be prioritized and taken care of well.
        </p>

        <p>
          There are four important areas of self-care that help us build a
          healthier and happier life.
        </p>

        {/* Physical Self Care */}

        <section className="blog-card">
          <h2>1. Physical Self-Care</h2>

          <p>
            Anything related to your physical body and health, including regular
            stretching and movement.
          </p>

          <h3>Some ways to practice Physical Self-Care:</h3>

          <ul>
            <li>Take a walk.</li>
            <li>Drink more water.</li>
            <li>Exhaust yourself physically. Do whatever helps you feel fatigued.</li>
            <li>Get a massage.</li>
            <li>Spend 10 minutes under the sun.</li>
            <li>Go for a bike ride.</li>
            <li>Go hiking, camping, or backpacking.</li>
            <li>Go to bed early.</li>
          </ul>
        </section>

        {/* Emotional Self Care */}

        <section className="blog-card">
          <h2>2. Emotional Self-Care</h2>

          <p>
            Emotional self-love helps us manage emotions during both good and
            difficult times.
          </p>

          <h3>Some ways to practice Emotional Self-Care:</h3>

          <ul>
            <li>Learn to say "No".</li>
            <li>Schedule "Me Time".</li>
            <li>Reward yourself for small achievements.</li>
            <li>Learn something new.</li>
            <li>Create a relaxing evening routine.</li>
            <li>Allow yourself to express your feelings.</li>
            <li>Practice mindfulness.</li>
            <li>Try adult coloring to reduce stress.</li>
            <li>Write a gratitude list.</li>
            <li>Accept your emotions without judgment.</li>
            <li>Stop being your harshest critic.</li>
            <li>Allow yourself to make mistakes.</li>
          </ul>
        </section>

        {/* Social Self Care */}

        <section className="blog-card">
          <h2>3. Social Self-Care</h2>

          <p>
            Social self-care is about maintaining healthy relationships and
            avoiding negativity.
          </p>

          <h3>Some ways to practice Social Self-Care:</h3>

          <ul>
            <li>Ask for help whenever needed.</li>
            <li>Call a trusted friend or family member.</li>
            <li>Choose your company wisely.</li>
            <li>Spend time with positive people.</li>
            <li>Reconnect with someone you've lost touch with.</li>
            <li>Join a support group.</li>
            <li>Plan a regular date night.</li>
            <li>Take a road trip with your siblings.</li>
          </ul>
        </section>

        {/* Mental Self Care */}

        <section className="blog-card">
          <h2>4. Mental Self-Care</h2>

          <p>
            Mental self-care is about mindfulness and living in the present
            moment.
          </p>

          <h3>Some ways to practice Mental Self-Care:</h3>

          <ul>
            <li>Meditate every day.</li>
            <li>Practice a 5-minute body scan.</li>
            <li>Do something kind for someone secretly.</li>
            <li>Donate to a charity.</li>
            <li>Help someone in need.</li>
            <li>Use your strengths more often.</li>
          </ul>
        </section>

        {/* Conclusion */}

        <section className="conclusion">

          <h2>Final Thoughts</h2>

          <p>
            Self-love is all about prioritizing yourself. When you take care of
            your physical, emotional, social, and mental well-being, every other
            pillar of life—including relationships, career, and financial
            growth—begins to fall into place.
          </p>

          <blockquote>
            "If you are willing to transform into your true self, prioritize
            yourself."
          </blockquote>

          <p>
            In case of any help, do reach out.
          </p>

          <a
            href="https://www.fitmind.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit FitMind
          </a>

          <p style={{ marginTop: "30px", fontWeight: "600" }}>
            Have a great day! 😊
          </p>

        </section>

      </div>
    </div>
  );
}