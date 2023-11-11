import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";


const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Welcome to the new BooksX</h2><br />
          <p className='header-text fs-18 fw-3'>Discover a world of knowledge, imagination, and stories at BooksX, your new online destination for all things literary. Whether you're an avid reader, a casual book enthusiast, or just dipping your toes into the vast ocean of literature, BooksX is here to cater to your literary cravings.</p>
                <SearchForm />
            </div>
      </header>
      
    </div>
    
  )
}

export default Header