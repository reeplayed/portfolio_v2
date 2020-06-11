import styled from "styled-components"

export default styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 30px;
  padding: 10px 20px;
  background: rgb(255, 255, 255);

  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  transition: background 0.1s;
  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
  ${({ theme }) => theme.mq.mobile} {
    padding: 5px 8px;
    font-size: 12px;
  }
`
