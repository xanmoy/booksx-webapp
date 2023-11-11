import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Welcome to BooksX: Your Gateway to Literary Exploration</h2>
            <p className='fs-17'>At BooksX, we believe in the transformative power of words. Nestled in the virtual realm, our platform is a sanctuary for bibliophiles, a haven for literary explorers, and a community that celebrates the magic of storytelling.</p>
            <h4>Who We Are:</h4>
            <p className='fs-17'>BooksX is not just a website; it's a passion project fueled by a love for literature. We are a diverse team of avid readers, writers, and enthusiasts who have come together to create a space where the written word takes center stage.</p>
            <h4>Our Mission:</h4>
            <p className='fs-17'>Our mission is to provide a platform where readers can explore, discover, and connect with their favorite books and authors. We aim to create a community where readers can share their thoughts and opinions, and where writers can find inspiration and encouragement.</p>
            <h3>What Sets Us Apart:</h3>
            <h4>Curated Collections:</h4>
            <p className='fs-17'> Explore handpicked selections that cater to various tastes. From timeless classics to hidden gems, our curated collections promise a journey through the rich tapestry of human imagination.</p>
            <h4>Community Vibes:</h4>
            <p className='fs-17'>BooksX is more than a library; it's a thriving community of like-minded individuals who share a common love for the written word. Join discussions, share your insights, and connect with fellow book enthusiasts from around the globe.</p>
            <h4>Author Stories:</h4>
            <p className='fs-17'> Behind every book is an author with a unique journey. Delve into the stories behind the stories with our exclusive author spotlights, interviews, and features that provide a glimpse into the creative minds shaping the literary landscape.</p>
            <h4>Your Reading Companion:</h4>
            <p className='fs-17'>Our platform goes beyond being a repository of books; it's your personalized reading companion. Receive tailored recommendations, engage in thought-provoking discussions, and embark on a literary adventure crafted just for you.</p>
            <h3>Join the BooksX Experience:</h3>
            <p className='fs-17'>Whether you're a seasoned reader or just beginning your literary journey, BooksX invites you to explore, connect, and be inspired by the magic of books. Follow us on social media, sign up for our newsletter, and become a part of a community that cherishes the written word.

              Thank you for being a part of our story. Here's to a world where every page turned is a step into a new adventure!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
