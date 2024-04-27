import React from "react";
import "./About.css";
import aboutImg from "../../images/About1.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About E Book Store</h2>
            <p className="fs-17">
              Welcome to our e-bookstore, where a vast array of literature
              awaits every reader's appetite. From timeless classics to
              contemporary bestsellers, our digital shelves cater to diverse
              interests and genres. With seamless online browsing and ordering,
              our convenient platform ensures prompt delivery through reliable
              courier facilities. Whether you seek inspiration, knowledge, or
              simply a captivating tale to lose yourself in, our e-bookstore is
              your gateway to literary exploration from the comfort of your
              home.
            </p>
            <p className="fs-17">
              But our e-bookstore isn't just a destination for acquiring
              literature. It's a community hub where book enthusiasts come
              together to share their passion. We welcome contributions from
              fellow bibliophiles through book donations, enriching our
              collection and spreading the joy of reading far and wide.
              Additionally, we value the voices of our readers and provide a
              platform for them to share their thoughts and insights through
              reviews, fostering dialogue and camaraderie among book lovers.
            </p>
            <p className="fs-17">
              Join us in our mission to celebrate the written word, connect
              readers with captivating stories, and foster a vibrant literary
              community. Welcome to our e-bookstore—where every page holds the
              promise of adventure, discovery, and endless inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
