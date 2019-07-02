import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'components/atoms'

// mock data
const projects = []
const userHasProjects = !!projects.length

const CenteredDiv = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const CenteredTextSpan = styled.span`
  text-align: center;
`

export default function Home() {
  return (
    !userHasProjects &&
    <CenteredDiv>
      <CenteredTextSpan>
        <span>This is your dashboard. Statistics for your projects will appear here.<br />You can also </span>
        <Link to='/projects/create'>Create</Link>
        <span> or </span>
        <Link to='/projects'>Choose</Link>
        <span> a project.</span>
      </CenteredTextSpan>
    </CenteredDiv>
  )
}