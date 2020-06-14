import React from "react"
import styled from "styled-components"
import Section from "../helpers/Section"
import Illustration from "../assets/illustrations/homeIllustration.svg"
import Title from "../components/molecules/Title"

const StyledIllustration = styled(Illustration)`
  padding-left: 30px;
  max-width: 900px;
  ${({ theme }) => theme.mq.standard} {
    max-width: 400px;
    max-height: 200px;
    padding-left: 0;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 300px;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px;
  ${({ theme }) => theme.mq.standard} {
    flex-direction: column;
  }
`
const Home = () => {
  return (
    <Section id="home-section">
      <Container>
        <Title />
        <StyledIllustration />
      </Container>
    </Section>
  )
}

export default Home
