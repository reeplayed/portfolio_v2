import React, { useState } from "react"
import styled, { css } from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const HamburgerButton = styled.button`
  padding: 7px;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  z-index: 100;
`
const HamburerBox = styled.span`
  display: block;
  position: relative;
  width: 50px;
  height: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`
const HamburerInner = styled.span`
  position: absolute;
  top: 50%;
  width: 100%;
  transition: all 0.5s;
  background: ${({ isOpen, theme }) =>
    isOpen ? "transparent" : theme.colors.grey};
  &,
  &:before,
  &:after {
    display: inline-block;
    position: absolute;
    height: 1px;
  }
  &:after,
  &:before {
    transition: all 0.5s;
    background: ${({ theme }) => theme.colors.grey};
    content: "";
    height: 100%;
    width: 70%;
    right: 0;
  }
  &:before {
    top: -10px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateY(10px) rotate(-45deg);
        width: 100%;
      `};
  }
  &:after {
    top: 10px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateY(-10px) rotate(45deg);
        width: 100%;
      `};
  }
`
const MenuContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.light};
  transition: transform 0.8s cubic-bezier(0.24, 0, 0.08, 0.89);
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      transform: translateX(-100%);
    `}
`
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MenuItem = styled.li`
  padding: 25px;
  font-family: "Roboto";
  font-size: 40px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`
const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false)

  const clickHandler = section => {
    setOpen(false)
    scrollTo(`#${section}`)
  }

  return (
    <>
      <HamburgerButton onClick={() => setOpen(!isOpen)}>
        <HamburerBox>
          <HamburerInner isOpen={isOpen} />
        </HamburerBox>
      </HamburgerButton>
      <MenuContainer isOpen={isOpen}>
        <MenuList>
          <MenuItem onClick={() => clickHandler("home-section")}>Home</MenuItem>
          <MenuItem onClick={() => clickHandler("about-section")}>
            About
          </MenuItem>
          <MenuItem onClick={() => clickHandler("projects-section")}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => clickHandler("contact-section")}>
            Contact
          </MenuItem>
        </MenuList>
      </MenuContainer>
    </>
  )
}

export default MobileMenu
