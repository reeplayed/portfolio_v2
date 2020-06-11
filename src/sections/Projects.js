import React, { useRef } from "react"
import Section from "../helpers/Section"
import SliderContent from "../components/SliderContent"
import Slider from "react-slick"
import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { graphql, useStaticQuery } from "gatsby"

const StyledSlider = styled(Slider)`
  width: 100%;
  overflow: hidden;
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allDatoCmsProject {
        nodes {
          id
          title
          description
          demolink
          date
          githublink
            technologies
            advanced
          image {
            fluid(maxWidth: 700, imgixParams: { fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const sliderRef = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "cubic-bezier(.24, 0, .08, .89)",
  }

  const setSlide = {
    prev: () => sliderRef.current.slickPrev(),
    next: () => sliderRef.current.slickNext(),
  }
  return (
    <Section id="projects-section">
      <StyledSlider {...settings} ref={sliderRef}>
        {data.allDatoCmsProject.nodes.map((project, index) => (
          <SliderContent
            setSlide={setSlide}
            key={project.id}
            index={index}
            title={project.title}
            description={project.description}
            image={project.image}
            date={project.date}
            demolink={project.demolink}
            githublink={project.githublink}
            technologies={project.technologies}
            advanced={project.advanced}
          />
        ))}
      </StyledSlider>
    </Section>
  )
}

export default Projects
