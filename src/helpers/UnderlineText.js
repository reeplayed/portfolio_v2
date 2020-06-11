import styled from "styled-components"

export default styled.p`
font-weight: bold;
font-size: 14px;
line-height: 17px;
color: ${({ theme }) => theme.colors.heading};
cursor: pointer;
text-decoration: underline;
`
