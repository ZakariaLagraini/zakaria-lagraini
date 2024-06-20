// Home.js
import { useState } from 'react';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { FiMessageSquare } from 'react-icons/fi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useDarkMode } from 'next-dark-mode';
import styles from '../styles/Chatbot.module.css';

const Home = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const toggleTheme = () => {
    if (darkModeActive) {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }
  };

  return (
    <Layout>
      <div className={styles.themeToggleButton} onClick={toggleTheme}>
        {darkModeActive ? (
          <FiSun size={24} color="yellow" />
        ) : (
          <FiMoon size={24} color="black" />
        )}
      </div>
      <Section grid center>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      <div className={styles.chatbotButton} onClick={toggleChatbot}>
        <FiMessageSquare size={24} color="white" />
      </div>
      {isChatbotVisible && (
        <div className={styles.chatbotContainer}>
          <df-messenger
            intent="WELCOME"
            chat-title="zakaria-portfolio"
            agent-id="3ee31145-85e1-461b-8696-3cfad774acaf"
            language-code="en"
          ></df-messenger>
        </div>
      )}
    </Layout>
  );
};

export default Home;
