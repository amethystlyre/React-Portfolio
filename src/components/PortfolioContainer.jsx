import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer'
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  //Start with About tab by default
  const [currentPage, setCurrentPage] = useState('About');

  // Render individual tab content based on the currentPage variable
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  //frunction for handling current page change
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
