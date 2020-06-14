import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Logo from "../../assets/logo.svg"
import gsap from "gsap"

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.light200};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HiddenBox = styled.div`
  overflow: hidden;
`
const StyledLogo = styled(Logo)`
  height: 100px;
  width: 250px;
`
const LogoWrapper = styled.div`
  padding: 0 20px;
  owerflow: hidden;
  visibility: hidden;
`
const Curtain = () => {
  const curtainRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const curtain = curtainRef.current
    const logo = logoRef.current

    const tl = gsap.timeline()

    gsap.set(logo, { y: "-200" })

    tl.to(logo, 0.9, { y: "0", autoAlpha: "1", delay: "0.2" }).to(
      curtain,
      1.3,
      {
        x: "100%",
        delay: "0.6",
        ease: "power3.inOut",
      }
    )
  }, [])

  return (
    <Container ref={curtainRef}>
      <HiddenBox>
        <LogoWrapper ref={logoRef}>
          <StyledLogo />
        </LogoWrapper>
      </HiddenBox>
    </Container>
  )
}

export default Curtain
