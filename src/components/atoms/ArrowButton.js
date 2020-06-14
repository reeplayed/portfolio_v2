import React from "react"
import styled, { css } from "styled-components"
import ArrowSVG from "../assets/arrow.svg"

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background: ${({ theme }) => theme.colors.light};
  border-radius: 30px;
  padding: 6px 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: background 0.1s;
  &:hover {
    background: rgb(255, 255, 255);
  }
  ${({ theme }) => theme.mq.standard} {
    padding: 4px 14px;
  }
  ${({ theme }) => theme.mq.mobile} {
    padding: 4px 8px;
  }
`
const StyledArrowSVG = styled(ArrowSVG)`
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
    `}
  ${({ theme }) => theme.mq.standard} {
    height: 20px;
  }
`

const ArrowButton = ({ rotate, onclick }) => {
  return (
    <StyledButton onClick={onclick}>
      <StyledArrowSVG rotate={rotate} />
    </StyledButton>
  )
}

export default ArrowButton
