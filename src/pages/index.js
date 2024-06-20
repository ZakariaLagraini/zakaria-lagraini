// Home.js
import { useState } from 'react';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { FiMessageSquare } from 'react-icons/fi'; // Importing the chat icon
import styles from '../styles/Chatbot.module.css';

const Home = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <Layout>
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
