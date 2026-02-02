import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './About.css';

/* COMPLETED IMAGES */
import completed1 from '../../assets/completed/C1.png';
import completed2 from '../../assets/completed/C2.png';
import completed3 from '../../assets/completed/C3.png';
import completed4 from '../../assets/completed/C4.png';
import completed5 from '../../assets/completed/C5.png';
import completed6 from '../../assets/completed/C6.png';

/* ONGOING IMAGES */
import ongoing1 from '../../assets/ongoing/o1.png';
import ongoing2 from '../../assets/ongoing/o2.png';
import ongoing3 from '../../assets/ongoing/o3.png';
import ongoing4 from '../../assets/ongoing/o4.png';
import ongoing5 from '../../assets/ongoing/o5.png';
function About() {
  /* SLIDER STATE */
  const [completedIndex, setCompletedIndex] = useState(0);
  const [ongoingIndex, setOngoingIndex] = useState(0);

  /* COMPLETED IMAGES WITH CAPTIONS */
  const completedImages = [
    { src: completed1, caption: "Khushi Upahaar - Near BJEM School" },
    { src: completed2, caption: "Khushi Prestige- IRC Village" },
    { src: completed3, caption: "Khushi Harmony - Near Saptasati Mandir" },
    { src: completed4, caption: "Khushi Somnath - Patia" },
    { src: completed5, caption: "Khushi Classic - Shanti Nagar " },
    { src: completed6, caption: "Khushi Sanjeevani  - Phase 1 Patrapada" },
  ];

  /* ONGOING IMAGES WITH CAPTIONS */
  const ongoingImages = [
    { src: ongoing2, caption: "Khushi Sanjeevani - Phase 2 Patrapada" },
    { src: ongoing2, caption: "Khushi Altair Bomikkhal,Cuttack-Puri Road" },
    { src: ongoing4, caption: "Khushi Kalinga House Near Palasuni Bridge" },
    { src: ongoing4, caption: "Khushi Basera Near Balianta" },
    { src: ongoing1, caption: "Khushi Shanti Tower Laxmisagar" },

  ];

  /* NAVIGATION FUNCTIONS */
  const nextCompleted = () =>
    setCompletedIndex((prev) =>
      prev === completedImages.length - 1 ? 0 : prev + 1
    );
  const prevCompleted = () =>
    setCompletedIndex((prev) =>
      prev === 0 ? completedImages.length - 1 : prev - 1
    );
  const nextOngoing = () =>
    setOngoingIndex((prev) =>
      prev === ongoingImages.length - 1 ? 0 : prev + 1
    );
  const prevOngoing = () =>
    setOngoingIndex((prev) =>
      prev === 0 ? ongoingImages.length - 1 : prev - 1
    );

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-content">
        {/* LEFT TEXT */}
        {/* LEFT TEXT */}
        <section className="about-text">
          <h2>Building Dreams into Reality</h2>

          <p>
            KHUSHI REALCON has been spreading happiness since 2021, with the aim to change
            the way people perceive quality in the real estate industry in Odisha. With
            the trinity of Gaurav Agarwal, Sanjay Bansal and Pradeep Thakker joining
            hands, and a new identity emerging, we are resolutely set on a path to the
            summit.
          </p>

          <p>
            We embraced six values that have made us capable of spreading happiness. Armed
            with the power of knowledge and honesty, our creations bring consumers closer
            to their desired lifestyle. We infuse a sense of uniqueness to our design
            philosophy and create soulful projects for all our consumers. But what keeps
            us in the hearts of our customers and partners is the integrity in our
            approach, as we stay true to all our claims and aim to create an environment
            of harmony, internally and externally.
          </p>

          <p>
            We have taken architecture and design beyond aesthetic virtues, and into the
            realm of being a thoughtful tool of providing comfort. Each project
            incorporates high-end features and is created to maximise space and a
            luxurious lifestyle.
          </p>

          <p>
            Our mission is to integrate meticulous planning and research in every step and
            earn people’s faith through hard work. We intend to make our mark through a
            consolidated approach in real estate.
          </p>
        </section>


        {/* RIGHT PROJECT CARDS */}
        <section className="about-projects">
          {/* COMPLETED */}
          <div className="project-card completed">
            <h3>
              PROJECTS <br /> (COMPLETED)
            </h3>

            <div className="flipper-wrapper">
              <div
                className="flipper-track"
                style={{
                  transform: `translateX(-${completedIndex * 100}%)`,
                }}
              >
                {completedImages.map((item, i) => (
                  <img
                    key={i}
                    src={item.src}
                    className="flipper-image"
                    alt="completed project"
                  />
                ))}
              </div>

              <span className="flipper-arrow left" onClick={prevCompleted}>
                ◀
              </span>
              <span className="flipper-arrow right" onClick={nextCompleted}>
                ▶
              </span>
            </div>

            {/* Caption Box */}
            <div className="caption-box">
              {completedImages[completedIndex].caption}
            </div>
          </div>

          {/* ONGOING */}
          <div className="project-card ongoing">
            <h3>
              PROJECTS <br /> (ONGOING)
            </h3>

            <div className="flipper-wrapper">
              <div
                className="flipper-track"
                style={{
                  transform: `translateX(-${ongoingIndex * 100}%)`,
                }}
              >
                {ongoingImages.map((item, i) => (
                  <img
                    key={i}
                    src={item.src}
                    className="flipper-image"
                    alt="ongoing project"
                  />
                ))}
              </div>

              <span className="flipper-arrow left" onClick={prevOngoing}>
                ◀
              </span>
              <span className="flipper-arrow right" onClick={nextOngoing}>
                ▶
              </span>
            </div>

            {/* Caption Box */}
            <div className="caption-box">
              {ongoingImages[ongoingIndex].caption}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
