// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: #00ffc3;
  font-size: 2rem;
`;

function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <p>Hello! I’m Pranav Agarwal, a passionate developer specializing in Cyber-Physical Systems and Web3 technologies.</p>
    </Section>
  );
}

export default About;
