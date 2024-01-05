import React, { useEffect } from 'react';
import styled from 'styled-components';
import { skills } from '../../Data/data';
import './Skills.scss';
import { motion, useAnimation } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  height: 100vh;
  margin: auto;
`;

const Wrapper = styled.div`
  max-width: 1366px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 25px;
 
  
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 5px;
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 32px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; 
  padding: 20px;
  @media (max-width: 738px) {
    gap: 5px;
    overflow-y: scroll;
  }
  
  
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: transparent;
  box-shadow: 3px 5px 10px #854CE6;
  border: 0.1px solid white;
  border-radius: 16px;
  padding: 10px 20px;
  @media (max-width: 768px) {
    max-width: 400px;
   
  }

  @media (max-width: 500px) {
    max-width: 330px;
   
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 738px) {
    margin-bottom:0px;
    font-size: 16px;
    
  }
  @media (min-width: 390px) and (max-width: 1000px) {
    margin-bottom:5px;
    font-size: 28px;
  }
  

`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 738px) {
    margin-bottom:0px;
    
  }
  @media (min-width: 390px) and (max-width: 1000px) {
    margin-bottom:5px;
    
  }

`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: white;
  border-radius: 12px;
  border: 1px solid white;
  padding: 12px 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Skills = () => {
 
  return (
    <div
    
    >
      <Container>
        <Wrapper className='wrapper'>
          <Title className='title'>Skills</Title>
          <Desc>
            Here are my skills which I have been working on for the past 1 year.
          </Desc>
          <SkillsContainer>
            {skills.map((item) => (
              <Skill key={item.name}>
                <SkillTitle>{item.name}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill) => (
                    <SkillItem key={skill.name}>
                      <SkillImage src={skill.imageUrl} alt={skill.name} />
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Skills;
