import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'

import { Link, Page, Spinner } from 'components/atoms'

import { getProjects } from 'actions'

import i18n from 'i18n'
import { randomIntByMinMax } from 'utils'

import { pink, pinkWithOpacity, primaryBlackWithOpacity } from 'config/styleConfig'

const CenteredDiv = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const CenteredTextSpan = styled.span`
  text-align: center;
`

const StyledPage = styled(Page)`
  background-color: ${pink};
  padding: 100px;
`

const Table = styled.div`
  position: relative;
  background-color: #fff;

  min-height: 100px;

  padding: 15px;
  border-radius: 15px;
  border-top-right-radius: 60px;

  -webkit-box-shadow: 0px 3px 8px -1px ${primaryBlackWithOpacity(0.57)};
  -moz-box-shadow: 0px 3px 8px -1px ${primaryBlackWithOpacity(0.57)};
  box-shadow: 0px 3px 8px -1px ${primaryBlackWithOpacity(0.57)};
`

const TableHeader = styled.h2`
  margin-top: 0;
  display: flex;
  justify-content: space-between;

  & > div + div {
    border-left: 2px solid ${primaryBlackWithOpacity(0.05)};
}
`

const TableRow = styled.div`
  cursor: ${({disabled}) => disabled ? 'auto' : 'pointer'};
  position: relative;

  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
const RowTitle = styled.h4`
  margin-top: 0;
`

const BlurredTextDiv = styled.div`
  text-shadow: 0 0 10px black;
  color: transparent;
`

const ProjectsTab = props => {

  const isGettingProjects = useSelector(state => state.flags.isGettingProjects)
  const projects = useSelector(state => state.projects)

  if (isGettingProjects) return <ProjectsLoadingContent />

  return (
    projects && projects.length >= 0
    ? <ProjectsContent projects={projects} />
    : <NoProjectsContent />
  )
}

const newProjectTab = props => {
  return <div>New project tab</div>
}

const tabs = {
  projects: ProjectsTab,
  'new-project': newProjectTab,
}

const tableHeaderTabs = Object.keys(tabs)

const SelectableTab = styled.div`
  cursor: pointer;
  width: 100%;
  padding-left: 8px;
  padding-bottom: 3px;
  border-bottom: ${ ({active}) => active ? 'none' : `2px solid ${primaryBlackWithOpacity(0.05)}` };
  transition: background-color 0.3s;
  color: ${primaryBlackWithOpacity(0.8)};
  
  &:hover {
    background-color: ${primaryBlackWithOpacity(0.05)};
  }
`


export default function Home() {
  console.log('render')
  const [activeTab, setActiveTab] = useState(tableHeaderTabs[0])
  const projects = useSelector(state => state.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!projects || !(projects.length >= 0)) dispatch(getProjects())
  }, [dispatch])

  const Tab = tabs[activeTab]

  return (
    <StyledPage>
      <Table>
        <TableHeader className='table-header'>
          { tableHeaderTabs.map(tht => (
            <SelectableTab key={tht} active={activeTab === tht} onClick={() => setActiveTab(tht)}>
              {i18n.t(tht)}
            </ SelectableTab>
          ))}
        </TableHeader>
        <Tab />
      </Table>
    </StyledPage>
  )
}

// once per app load
const randomProjectNumber = randomIntByMinMax(1, 3)
const loadingProjectsMockData = []
for( let i = 0; i < randomProjectNumber; i++) {
  loadingProjectsMockData.push(
    <TableRow disabled={true} key={i}>
      <Spinner color={pinkWithOpacity(0.5)}/>
      <RowTitle>
        <BlurredTextDiv>{i18n.t('mock-project-name')}</ BlurredTextDiv>            
      </RowTitle>
      <BlurredTextDiv>{i18n.t('mock-project-description')}</ BlurredTextDiv>
    </TableRow>
  )
}

const ProjectsLoadingContent = () => (
  <BlurredTextDiv>
    { loadingProjectsMockData }
  </ BlurredTextDiv>
)

const NoProjectsContent = () => (
  <CenteredDiv>
    <CenteredTextSpan>
      <span>{i18n.t('dashboard-explanation-1')}<br />{i18n.t('dashboard-explanation-2')} </span>
      <Link to='/projects/create'>{i18n.t('create')} </Link>
      <span>{i18n.t('or')} </span>
      <Link to='/projects'>{i18n.t('choose')} </Link>
      <span>{i18n.t('dashboard-explanation-3')}</span>
    </CenteredTextSpan>
  </CenteredDiv>
)

const ProjectsContent = ({ projects }) => {
  return projects.map(p => (
    <TableRow key={p.id}>
      <RowTitle>{p.name}</RowTitle>
      <div>{p.description}</div>
    </TableRow>
  ))
}