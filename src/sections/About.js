import React from "react"
import Section from "../helpers/Section"
import styled from "styled-components"
import AboutIllustration from "../assets/illustrations/aboutIllustration.svg"
import Heading from "../helpers/Heading"

const StyledIllustration = styled(AboutIllustration)`
  margin-left: 30px;
  max-width: 700px;

  ${({ theme }) => theme.mq.standard} {
    max-height: 200px;
    max-width: 500px;
    margin: 0;
  }
  ${({ theme }) => theme.mq.tablet} {
    max-width: 300px;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 240px;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 50px;
  ${({ theme }) => theme.mq.standard} {
    flex-direction: column-reverse;
  }
`
const DescriptionContainer = styled.div`
  padding: 40px 20px;
  margin-left: 100px;
  ${({ theme }) => theme.mq.xl} {
    margin-left: 50px;
  }
  ${({ theme }) => theme.mq.standard} {
    margin: 0;
  }
`
const DescriptionContent = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  margin: 15px 0;
  max-width: 500px;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mq.xl} {
    font-size: 22px;
    line-height: 26px;
    max-width: 450px;
  }
  ${({ theme }) => theme.mq.standard} {
    text-align: center;
  }
  ${({ theme }) => theme.mq.tablet} {
    max-width: 350px;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 260px;

    font-size: 18px;
    line-height: 22px;
  }
`

const About = () => {
  return (
    <Section id="about-section">
      <Container>
        <StyledIllustration />
        <DescriptionContainer data-aos="fade-up">
          <Heading>About</Heading>
          <DescriptionContent>
            Hello, I am 22 years old student of Finance and Accounting. About 
            one year ago I decided to learn programming. In my projects I
            connect the world of Frontend and Backend using technologies such as
            Django and React.
          </DescriptionContent>
        </DescriptionContainer>
      </Container>
    </Section>
  )
}

export default About
