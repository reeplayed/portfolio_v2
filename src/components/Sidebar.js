import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import FbIcon from "../assets/fbIcon.svg"
import GitHubIcon from "../assets/githubIcon.svg"
import LinkedinIcon from "../assets/linkedinIcon.svg"
import LineIcon from "../assets/sidebarLine.svg"
import { useScrollPosition } from "../hooks/scrollHook"
import gsap from "gsap"

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 20px;
  z-index: 10;
  ${({ theme }) => theme.mq.mobile} {
    left: 10px;
    bottom: -30px;
  }
`
const StyledLine = styled(LineIcon)``
const IconWrapper = styled.div`
  margin: 3px 0;
`
const SectionDisplayContainer = styled.div`
  width: 30px;
  height: 80px;
  position: relative;
  overflow: hidden;
`
const SectionDisplayInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400%;
  height: 100%;
  display: flex;
  transition: transform 0.5s;
  transform: ${({ position }) => {
    switch (position) {
      case "home":
        return "translateX(0)"
      case "about":
        return "translateX(25%)"
      case "projects":
        return "translateX(50%)"
      case "contact":
        return "translateX(75%)"
    }
  }};
`
const ItemWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SectionTitle = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
  transform: rotate(90deg);
`
const IconsWrapper = styled.div``

const Sidebar = () => {
  const scrollPosition = useScrollPosition()
  const lineRef = useRef(null)
  const iconsRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    const icons = iconsRef.current
    const section = sectionRef.current

    const tl = gsap.timeline()

    tl.set([line, ...icons.children], { autoAlpha: 0 })
    tl.set(section, { x: "-=30", autoAlpha: 0 })

    tl.fromTo(
      line,
      { y: "+=300" },
      { y: "10", autoAlpha: 1, duration: 0.6, delay: "4" }
    )
      .to(section, 0.4, { x: "0", autoAlpha: 1 })
      .staggerTo([...icons.children], 0.5, { autoAlpha: 1, duration: 1 }, 0.2)
  }, [])

  return (
    <Container>
      <SectionDisplayContainer ref={sectionRef}>
        <SectionDisplayInner position={scrollPosition}>
          <ItemWrapper>
            <SectionTitle>CONTACT</SectionTitle>
          </ItemWrapper>
          <ItemWrapper>
            <SectionTitle>PROJECTS</SectionTitle>
          </ItemWrapper>
          <ItemWrapper>
            <SectionTitle>ABOUT</SectionTitle>
          </ItemWrapper>
          <ItemWrapper>
            <SectionTitle>HOME</SectionTitle>
          </ItemWrapper>
        </SectionDisplayInner>
      </SectionDisplayContainer>
      <IconsWrapper ref={iconsRef}>
        <IconWrapper>
          <LinkedinIcon />
        </IconWrapper>
        <IconWrapper>
          <GitHubIcon />
        </IconWrapper>
        <IconWrapper>
          <FbIcon />
        </IconWrapper>
      </IconsWrapper>

      <div ref={lineRef}>
        <StyledLine />
      </div>
    </Container>
  )
}

export default Sidebar
