import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
const Page = ({ name }) => {
  switch (name) {
    case 'About':
      return <About />;
    case 'Resume':
      return <Resume />;
    case 'Contact':
      return <Contact />;
    default:
      return <Home />;
  }
}
function Portfolio() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (value) => setCurrentPage(value);
  
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        <Page name={currentPage} />
      </div>
    </div>
  );
}
export default Portfolio;