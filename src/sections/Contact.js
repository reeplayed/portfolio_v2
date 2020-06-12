import React from "react"
import Section from "../helpers/Section"
import styled from "styled-components"
import Illustration from "../assets/illustrations/contactIllustration.svg"
import Heading from "../helpers/Heading"
import UnderlineText from "../helpers/UnderlineText"
import { graphql, useStaticQuery } from "gatsby"
import {socialLinks} from '../helpers/SocialLinks';

const Container = styled.div`
  display: flex;

  align-items: center;
`
const IllustrationWrapper = styled.div`
  padding-top: 30px;
  margin-right: 100px;
  ${({ theme }) => theme.mq.tablet} {
    margin-right: 10px;
  }
  ${({ theme }) => theme.mq.mobile} {
    margin: 0 5px 0 40px;
  }
`
const StyledIllustration = styled(Illustration)`
  width: auto;
  ${({ theme }) => theme.mq.tablet} {
    max-height: 300px;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-height: 250px;
  }
`
const ContactInfoWrapper = styled.div`
  margin-left: 30px;
  ${({ theme }) => theme.mq.mobile} {
    margin-left: 5px;
  }
`
const ContactInfoItem = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.standard} {
    align-items: center;
  }
`
const Content = styled.div`
  padding: 10px;
  ${({ theme }) => theme.mq.mobile} {
    padding: 0;
  }
`
const Title = styled.p`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 14px;
  }
`
const Value = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  font-size: 14px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 12px;
  }
`
const Contact = () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    file(name: {eq: "CV_Borkowski"}) {
      
      publicURL
    }
  }
  
  `)
  return (
    <Section id="contact-section">
      <Container>
        <IllustrationWrapper>
          <StyledIllustration />
        </IllustrationWrapper>
        <ContactInfoWrapper data-aos="fade-up">
          <Heading>Contact</Heading>
          <Content>
            <ContactInfoItem>
              <Title>EMAIL</Title>
              <Value>lukasz.borkowski1998@gmail.com</Value>
            </ContactInfoItem>
            <ContactInfoItem>
              <Title>GITHUB</Title>
              <a href={socialLinks.github}
                target='_blank'
              >

              <Value>reeplyed</Value>
              </a>
            </ContactInfoItem>
            <ContactInfoItem>
              <Title>LINKEDIN</Title>
              <a href={socialLinks.linkedin}
                target='_blank'
              >

              <Value>.borkowski</Value>
              </a>
            </ContactInfoItem>
            <ContactInfoItem>
              <Title>PHONE</Title>
              <Value>791160198</Value>
            </ContactInfoItem>
            <ContactInfoItem>
              <a
               href={data.file.publicURL}
               
               download={`Borkowski-CV`}
              >


              <UnderlineText>DOWNLOAD CV</UnderlineText>
              </a>
            </ContactInfoItem>
          </Content>
        </ContactInfoWrapper>
      </Container>
    </Section>
  )
}

export default Contact
