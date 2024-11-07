// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
`;

const ExperienceCard = styled.div`
  background-color: #292929;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #f1f1f1;
`;

const Title = styled.h2`
  color: #00ffc3;
  font-size: 2rem;
  text-align: center;
`;

const experiences = [
  {
    company: "Ethena",
    position: "Research Intern",
    date: "May 2023 - Aug 2023",
    description: "Focused on blockchain research, developing Web3 applications, and contributing to innovative crypto solutions."
  },
  {
    company: "SuperHack 2024",
    position: "Hackathon Participant",
    date: "June 2024",
    description: "Developed PeerLink, a decentralized OTC DEX allowing users to create secure escrow arrangements for token exchanges."
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index}>
          <h3>{exp.company}</h3>
          <p><strong>Position:</strong> {exp.position}</p>
          <p><strong>Date:</strong> {exp.date}</p>
          <p>{exp.description}</p>
        </ExperienceCard>
      ))}
    </Section>
  );
}

export default Experience;
