import React from "react"
import styled from "styled-components"
import moment from "moment"

const Container = styled.div`
  display: flex;
  margin-top: 5px;
`
const ItemBox = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 3px 12px;
  ${({ theme }) => theme.mq.mobile} {
    padding: 3px 5px;
  }
`
const Title = styled.p`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 12px;
  }
  ${({ theme }) => theme.mq.mobile} {
    font-size: 8px;
    line-height: 14px;
  }
`
const Value = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 300;
  font-size: 14px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 10px;
  }
  ${({ theme }) => theme.mq.mobile} {
    font-size: 10px;
  }
`
const ProjectInfoComponent = ({ date, advanced, technologies, link }) => {
  return (
    <Container>
      <ItemBox>
        <Title>Date</Title>
        <Value>{moment(date).format("MMMM YYYY")}</Value>
      </ItemBox>
      <ItemBox>
        <Title>Difficulty</Title>
        <Value>{advanced}</Value>
      </ItemBox>

      <ItemBox>
        <Title>Technologies</Title>
        <Value>{technologies.join(", ")}</Value>
      </ItemBox>
      <ItemBox>
        <Title>Github</Title>
        <a href={link} target="_blank">
          <Value>Link</Value>
        </a>
      </ItemBox>
    </Container>
  )
}

export default ProjectInfoComponent
