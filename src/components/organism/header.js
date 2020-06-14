import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import { useWindowSize } from "../../hooks/windowSizeHook"
import gsap from "gsap"

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 30px;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  box-shadow: ${({ theme }) => theme.shadows.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 998;
  ${({ theme }) => theme.mq.standard} {
    padding: 10px 30px;
  }
`
const LogoWrapper = styled.div`
  padding: 0 10px;
`

const Header = () => {
  const mobileView = useWindowSize()

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const sliderRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const menu = menuRef.current
    const slider = sliderRef.current
    const logo = logoRef.current

    const tl = gsap.timeline()

    tl.set(header, { y: "-100%" })
    tl.set(slider, { x: "800%" })
    tl.set(logo, { x: "-100%", autoAlpha: 0 })
    tl.set([...menu.children], { y: "-30", autoAlpha: 0 })

    tl.to(header, 1.3, { y: "0", delay: "3", easy: "power2.easyOut" })
      .to(logo, 0.8, { x: "0", autoAlpha: 1 }, "-=0.5")
      .staggerTo([...menu.children], 0.4, { y: "0", autoAlpha: 1 }, 0.2)
      .to(slider, 1, { x: "0" })
  }, [])

  return (
    <HeaderContainer ref={headerRef}>
      <LogoWrapper ref={logoRef}>
        <Logo />
      </LogoWrapper>
      {mobileView ? (
        <MobileMenu />
      ) : (
        <DesktopMenu refs={{ slider: sliderRef, menu: menuRef }} />
      )}
    </HeaderContainer>
  )
}

export default Header
