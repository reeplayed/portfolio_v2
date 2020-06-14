import React from "react"
import styled from "styled-components"
import Heading from "../../helpers/Heading"
import Img from "gatsby-image"
import ProjectInfoComponent from "../molecules/ProjectInfoComponent"
import ArrowButton from "../atoms/ArrowButton"
import { useWindowSize } from "../../hooks/windowSizeHook"
import UnderlineText from "../../helpers/UnderlineText"

const Container = styled.div`
  display: flex;

  overflow: hidden;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: column;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  ${({ theme }) => theme.mq.standard} {
    align-items: center;
    padding: 0;
  }
`
const ImageWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mq.standard} {
    margin: 0;
  }
`
const StyledImg = styled(Img)`
  width: 500px;

  ${({ theme }) => theme.mq.xl} {
    max-width: 350px;
  }
  ${({ theme }) => theme.mq.standard} {
    max-width: 250px;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 230px;
  }
`
const Description = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  margin: 15px 0;
  width: 500px;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mq.xl} {
    font-size: 18px;
    line-height: 26px;
    max-width: 450px;
  }
  ${({ theme }) => theme.mq.standard} {
    text-align: center;
  }
  ${({ theme }) => theme.mq.tablet} {
    max-width: 400px;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 260px;
    font-size: 14px;
    line-height: 22px;
  }
`
const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mq.standard} {
    justify-content: center;
    flex-direction: column-reverse;
    margin-top: 0;
  }
`
const ArrowsWrapper = styled.div`
  display: flex;
`
const DemoWrapper = styled.div`
  padding-left: 30px;
  ${({ theme }) => theme.mq.standard} {
    padding: 0 0 20px 0;
  }
`

const SliderContent = ({
  setSlide,
  index,
  title,
  image,
  description,
  demolink,
  date,
  githublink,
  technologies,
  advanced,
}) => {
  const isMobile = useWindowSize()

  return (
    <Container>
      <ContentWrapper data-aos="fade-up">
        <Heading>
          {`${index + 1 < 10 && "0"}` + (index + 1)}. {title}
        </Heading>
        {isMobile && (
          <ImageWrapper>
            <StyledImg fluid={image.fluid} />
          </ImageWrapper>
        )}
        <ProjectInfoComponent
          date={date}
          advanced={advanced}
          technologies={technologies}
          link={githublink}
        />
        <Description>{description}</Description>
        <Footer>
          <ArrowsWrapper>
            <ArrowButton onclick={setSlide.prev} />
            <ArrowButton rotate onclick={setSlide.next} />
          </ArrowsWrapper>
          <DemoWrapper>
            <a href={demolink} target="_blank">
              <UnderlineText>OPEN DEMO</UnderlineText>
            </a>
          </DemoWrapper>
        </Footer>
      </ContentWrapper>
      {!isMobile && (
        <ImageWrapper>
          <StyledImg fluid={image.fluid} />
        </ImageWrapper>
      )}
    </Container>
  )
}

export default SliderContent
