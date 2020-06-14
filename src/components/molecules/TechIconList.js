import React from "react"
import styled from "styled-components"
import ReactIcon from "../../assets/technologies/reactIcon.svg"
import DjagnoIcon from "../../assets/technologies/djangoIcon.svg"
import HtmlIcon from "../../assets/technologies/htmlIcon.svg"
import CssIcon from "../../assets/technologies/cssIcon.svg"
import FirebaseIcon from "../../assets/technologies/firebaseIcon.svg"
import ReduxIcon from "../../assets/technologies/reduxIcon.svg"
import GatsbyIcon from "../../assets/technologies/gatsbyIcon.svg"
import WebpackIcon from "../../assets/technologies/webpackIcon.svg"

const Container = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`
const IconWrapper = styled.div`
  padding: 0 2px;

  transition: transform 0.1s;
  &:hover {
    transform: scale(1.2);
  }
`

const TechIconList = ({ techRef }) => {
  return (
    <Container ref={techRef}>
      <IconWrapper>
        <ReactIcon />
      </IconWrapper>
      <IconWrapper>
        <DjagnoIcon />
      </IconWrapper>
      <IconWrapper>
        <CssIcon />
      </IconWrapper>
      <IconWrapper>
        <HtmlIcon />
      </IconWrapper>
      <IconWrapper>
        <ReduxIcon />
      </IconWrapper>
      <IconWrapper>
        <GatsbyIcon />
      </IconWrapper>
      <IconWrapper>
        <FirebaseIcon />
      </IconWrapper>
      <IconWrapper>
        <WebpackIcon />
      </IconWrapper>
    </Container>
  )
}

export default TechIconList
