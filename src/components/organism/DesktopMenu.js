import React from "react"
import styled from "styled-components"
import { useScrollPosition } from "../../hooks/scrollHook"
import scrollTo from "gatsby-plugin-smoothscroll"

const Container = styled.div`
  padding-top: 3px;
`
const MenuItem = styled.li`
  width: 25%;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  text-shadow: 1px 1px 8px #fff;
  transition: letter-spacing 0.4s;
  &:hover{
    letter-spacing: 2px;
  }
`
const ItemsWrapper = styled.ul`
  width: 500px;

  display: flex;
`

const Slider = styled.hr`
  color: ${({ theme }) => theme.colors.heading};
  width: 15%;

  height: 2px;
  margin: 5px 0 0 0;
  transition: margin 0.5s;
  margin-left: ${({ position }) => {
    switch (position) {
      case "home":
        return "0"
      case "about":
        return "25%"
      case "projects":
        return "50%"
      case "contact":
        return "75%"
    }
  }};
`

const DesktopMenu = ({ refs }) => {
  const scrollPosition = useScrollPosition()

  return (
    <Container>
      <ItemsWrapper ref={refs.menu}>
        <MenuItem onClick={() => scrollTo("#home-section")}>Home</MenuItem>

        <MenuItem onClick={() => scrollTo("#about-section")}>About</MenuItem>

        <MenuItem onClick={() => scrollTo("#projects-section")}>
          Projects
        </MenuItem>

        <MenuItem onClick={() => scrollTo("#contact-section")}>
          Contact
        </MenuItem>
      </ItemsWrapper>
      <Slider position={scrollPosition} ref={refs.slider} />
    </Container>
  )
}

export default DesktopMenu
