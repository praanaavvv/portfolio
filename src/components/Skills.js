// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #f1f1f1;
`;

function Skills() {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <SkillList>
        <li>Solidity</li>
        <li>TypeScript</li>
        <li>Web3 Development</li>
        <li>JavaScript</li>
        <li>Python</li>
      </SkillList>
    </Section>
  );
}

export default Skills;
