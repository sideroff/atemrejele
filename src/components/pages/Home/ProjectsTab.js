import React from 'react'
import { useSelector } from 'react-redux'

import ProjectsLoadingContent from './ProjectsLoadingContent'
import ProjectsContent from './ProjectsContent'
import NoProjectsContent from './NoProjectsContent'

export default props => {

  const isGettingProjects = useSelector(state => state.flags.isGettingProjects)
  const projects = useSelector(state => state.projects)

  if (isGettingProjects) return <ProjectsLoadingContent />

  return (
    projects && projects.length >= 0
      ? <ProjectsContent projects={projects} />
      : <NoProjectsContent />
  )
}