import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume/resume.pdf'; // Use a relative path to the PDF file
  link.download = 'Zakaria Lagraini Resume.pdf';
  link.click();
};

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Zakaria Lagraini's Portfolio
        </SectionTitle>
        <SectionText style={{ paddingBottom: 0 }}>
          I am a dedicated and passionate Computer Science and Network Engineering student specializing in MIAGE at the Moroccan School of Engineering Sciences. <br />
          Explore my projects and see how I blend innovative technologies with strategic solutions to solve complex challenges. <br />
          Let's connect and explore opportunities for collaboration in the IT industry. <br />
        </SectionText> <br/>
        <Button onClick={handleDownload}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
