import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-header">
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">Rent A Car - The Ultimate Car Rental Experience</p>
      </div>

      <div className="about-content">
        <div className="about-description">
          <p>
            At <strong>Rent A Car</strong>, we are committed to providing the highest quality car rental service.
            We understand that every journey is unique, which is why we offer a range of luxury and practical vehicles
            to suit all needs, whether it&apos;s business, leisure, or special occasions.
          </p>
          <p>
            Our cars are meticulously maintained, and we prioritize customer satisfaction above all. From the moment
            you book with us, we ensure a seamless experience that s smooth, stylish, and stress-free.
          </p>
        </div>

        <div className="about-mission">
          <h3 className="about-subtitle">Our Mission</h3>
          <p>
            We aim to make every drive a luxurious one. Our mission is to offer premium car rental services that
            prioritize your comfort, convenience, and safety. We want your journey with us to be unforgettable.
          </p>
        </div>

        <div className="about-values">
          <h3 className="about-subtitle">Our Core Values</h3>
          <ul>
            <li><strong>Excellence in Service:</strong> We go the extra mile for our customers.</li>
            <li><strong>Reliability:</strong> Our cars are always in top condition for a safe journey.</li>
            <li><strong>Customer Focus:</strong> Every client is treated with care and respect.</li>
            <li><strong>Luxury and Comfort:</strong> We offer only the best cars for your comfort.</li>
          </ul>
        </div>

        <div className="about-team">
          <h3 className="about-subtitle">Meet Our Team</h3>
          <div className="team-members">
           
            </div>
             <div className="team-member">
              <Image
                src="/media/photo-1722934854153-c103f0f822f9.avif"
                alt="Team Member 2"
                width={160}
                height={160}
                className="team-image"
              />
              <p><strong>Jane Smith</strong> - Operations Manager</p> 
            </div>
             <div className="team-member">
              <Image
                src="/media/istockphoto-475967893-612x612.webp"
                alt="Team Member 3"
                width={160}
                height={160}
                className="team-image"
              /> 
              <p><strong> Lee</strong> - Customer Relations</p>
            </div>
          </div>
        </div>

        <div className="about-contact">
          <h3 className="about-subtitle">Contact Us</h3>
          <p>
            We’re always here to help! If you have any questions, feel free to <Link href="/contact">contact us</Link>.
            We look forward to serving you!
          </p>
        </div>
    </section>
  );
};

export default About;
