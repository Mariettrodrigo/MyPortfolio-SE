'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Volunteering from "./components/Volunteering";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userTheme = localStorage.theme;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    console.log('isDarkMode changed:', isDarkMode);
    if (typeof window !== "undefined" && isDarkMode !== undefined) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    }
  }, [isDarkMode]);

  // Prevent rendering until mode is determined
  if (isDarkMode === undefined) return null;

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
      <Volunteering isDarkMode={isDarkMode}/>
      <Achievements isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      {/*<Footer isDarkMode={isDarkMode}/>*/}
    </>
  );
}
