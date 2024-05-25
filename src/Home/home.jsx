import React, { useState, useEffect } from "react";
import NavBar from "../Components/navbar";
import NewContents from "../Components/contents";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/footer";
import '../css/style.css';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div   >
      <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <NewContents  toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Home;
