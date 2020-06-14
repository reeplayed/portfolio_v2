import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import FbIcon from "../assets/fbIcon.svg"
import GitHubIcon from "../assets/githubIcon.svg"
import LinkedinIcon from "../assets/linkedinIcon.svg"
import { useScrollPosition } from "../../hooks/scrollHook"
import gsap from "gsap"
import {socialLinks} from '../../utils/SocialLinks';

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

const IconWrapper = styled.div`
  margin: 3px 0;
  cursor: pointer;
  transition: transform 0.1s;
  &:hover{
    transform: scale(1.2);
  }
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

const TopLineWrapper = styled.div`
    overflow-y: hidden;
    padding: 0 2px;
`;
const TopLine = styled.span`
    display: block;
    
    position: relative;
    width: 1px;
    background: ${({theme})=>theme.colors.light200};
    height: 150px;
border-radius: 50px;


transition: all 1s;
&:before{
    content: '';
    display: block;
    width:100%;
    height: 100%;
    background: ${({theme})=>theme.colors.text};
    transform: ${({ position }) => {
      switch (position) {
        case "home":
          return "translateY(-75%)"
        case "about":
          return "translateY(-50%)"
        case "projects":
          return "translateY(-25%)"
        case "contact":
          return "translateY(0)"
      }
    }};
    transition: transform 0.8s;
    border-radius: 50px;
}
`;
const BotLine = styled.span`
display: block;
  
    position: relative;
    width: 1px;
    background: ${({theme})=>theme.colors.text};
    height: 50px;
border-radius: 50px;


`;

const Sidebar = () => {
  const scrollPosition = useScrollPosition()
  const topLineRef = useRef(null)
  const lineRef = useRef(null)
  const iconsRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    const topLine = topLineRef.current
    const icons = iconsRef.current
    const section = sectionRef.current

    const tl = gsap.timeline()

    tl.set([line, ...icons.children, topLine], { autoAlpha: 0 })
    tl.set(section, { x: "-=30", autoAlpha: 0 })

    tl.fromTo(
      line,
      { y: "+=300" },
      { y: "10", autoAlpha: 1, duration: 0.6, delay: "4" }
    )
      .to(section, 0.4, { x: "0", autoAlpha: 1 })
      .staggerTo([...icons.children, topLine], 1, { autoAlpha: 1 }, 0.2)
  }, [])

  return (
    <Container>
      <TopLineWrapper ref={topLineRef}>
            <TopLine position={scrollPosition}/>
        </TopLineWrapper>
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
          <a href={socialLinks.linkedin}
            target='_blank'
            >

          <LinkedinIcon />
          </a>
        </IconWrapper>
        <IconWrapper>
        <a href={socialLinks.github}
            target='_blank'
          >

          <GitHubIcon />
          </a>
        </IconWrapper>
        <IconWrapper>
        <a href={socialLinks.fb}
            target='_blank'
          >

          <FbIcon />
          </a>
        </IconWrapper>
      </IconsWrapper>

      <BotLine ref={lineRef}/>
       
    </Container>
  )
}

export default Sidebar
