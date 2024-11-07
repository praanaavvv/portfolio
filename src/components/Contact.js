// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
`;

function Contact() {
  return (
    <Section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out via <a href="mailto:pranav.agarwal428@gmail.com">email</a> or connect on <a href="https://www.linkedin.com/in/pranav-agarwal-502461274/">LinkedIn</a>.</p>
    </Section>
  );
}

export default Contact;
