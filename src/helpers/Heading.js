import styled from "styled-components"

export default styled.h2`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 400;
  font-size: 48px;
  line-height: 49px;
  ${({ theme }) => theme.mq.xl} {
    font-size: 40px;
  }
  ${({ theme }) => theme.mq.standard} {
    text-align: center;
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: 32px;
  }
  ${({ theme }) => theme.mq.mobile} {
    font-size: 24px;
    margin: 0;
  }
`
