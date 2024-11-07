// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
`;

const ProjectCard = styled.div`
  background-color: #292929;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #f1f1f1;
`;

function Projects() {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <ProjectCard>
        <h3>PeerLink</h3>
        <p>A P2P crypto escrow exchange enabling trustless token exchanges.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Smart Greenhouse System</h3>
        <p>An IoT-based greenhouse management system.</p>
      </ProjectCard>
    </Section>
  );
}

export default Projects;
