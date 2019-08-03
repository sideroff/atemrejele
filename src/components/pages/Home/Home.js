import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'

import { Page } from 'components/atoms'

import { getProjects } from 'actions'

import i18n from 'i18n'

import { pink, primaryBlackWithOpacity } from 'config/styleConfig'

import ProjectsTab from './ProjectsTab'
import NewProjectTab from './NewProjectTab'

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


const tabs = {
  projects: ProjectsTab,
  'new-project': NewProjectTab,
}

const tableHeaderTabs = Object.keys(tabs)

const SelectableTab = styled.div`
  cursor: pointer;
  width: 100%;
  padding-left: 8px;
  padding-bottom: 3px;
  border-bottom: ${ ({ active }) => active ? 'none' : `2px solid ${primaryBlackWithOpacity(0.05)}`};
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
          {tableHeaderTabs.map(tht => (
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