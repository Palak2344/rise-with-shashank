import "./Testimonials.css";
import {
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Ranga Chaitanya",
    role: "Amazing Lifestyle Workshop Participant",
    review:
      "I am very happy that I joined the 7 Days Amazing Lifestyle Workshop. Waking up early was a dream for me, and after doing this course I now wake up at 5 AM without using any alarm. I have become more organized in both my personal and professional life. Thank you, Shashank. Keep up the good work!",
  },
  {
    name: "Kumari TV",
    role: "Amazing Lifestyle Workshop Participant",
    review:
      "It was truly a lifestyle change in just 7 days. From the very first meditation session I felt positive energy. The habit tracker and journaling helped me stay focused on my goals. Shashank is a wonderful life coach and his soothing voice made every meditation session peaceful.",
  },
  {
    name: "Upasana Dhingra",
    role: "Amazing Lifestyle Workshop Participant",
    review:
      "The workshop helped me clear my mind from unnecessary thoughts that I couldn't share with anyone. I developed the habit of waking up early, which gave me enough time to work on my personal goals every day.",
  },
  {
    name: "Anushree Suman",
    role: "Amazing Lifestyle Workshop Participant",
    review:
      "It was one of the best workshops I have attended. I highly recommend it to people dealing with stress and anxiety. These sessions bring peace, relaxation, self-love, and confidence.",
  },
  {
    name: "Neha Dixit",
    role: "Amazing Lifestyle Workshop Participant",
    review:
      "It was a wonderful experience. My favorite sessions were Self Love and Physical Health. Waking up early, journaling, reducing screen time, and the Walk to Remember activity were all amazing. Thank you Shashank Sir.",
  },
  {
    name: "Pooja Sabnani",
    role: "Amazing Lifestyle Workshop Participant",
    review:
      "Earlier, the day controlled me, but now I consciously manage my time and habits. I feel calmer, sleep better, and have become more productive using the Pomodoro Technique. Morning meditation is now my favorite part of the day.",
  },
  {
    name: "Phuldeep Kaur Nanda",
    role: "Participant • Canada",
    review:
      "The workshop was a breath of fresh air for me. I reduced my screen time by almost 89% in the first week, connected deeply with myself, learned self-forgiveness, and enjoyed peaceful sleep through meditation. Sending lots of love and gratitude from Canada.",
  },
  {
    name: "Roshita Nair",
    role: "Amazing Lifestyle Workshop Participant",
    review:
      "If you want to transform your life, you should definitely join these workshops. They helped me prioritize my goals, develop self-empathy, and almost double my productivity.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        <div className="testimonial-header">

          <span className="section-tag">
            Testimonials
          </span>

          <h2 className="section-title">
            What Our <span>Participants Say</span>
          </h2>

          <p className="section-description">
            Thousands of people have transformed their lives through
            meditation, mindfulness, and lifestyle coaching.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <FaQuoteLeft className="quote" />

              <p className="review">
                {item.review}
              </p>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="client">

                <div className="client-icon">
                  <FaUserCircle />
                </div>

                <div className="client-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;