import { createBrowserHistory } from 'history'

import i18n from 'i18n'

import {
  Authenticate,
  Home,
  Projects,
  ProjectsCreate,
  Tasks,
} from 'components/pages'

export const publicRoutes = [
  {
    url: '/authenticate',
    label: 'Authenticate',
    component: Authenticate
  }
]

export const privateRoutes = [
  {
    url: '/',
    label: i18n.t('home'),
    component: Home,
    exact: true,
    showInNav: true,
  },
  {
    url: '/projects',
    label: i18n.t('projects'),
    component: Projects,
    exact: true,
    showInNav: true,
  },
  {
    url: '/projects/create',
    label: i18n.t('projects-create'),
    component: ProjectsCreate,
    exact: true
  },
  {
    url: '/tasks',
    label: i18n.t('tasks'),
    component: Tasks,
    exact: true,
    showInNav: true,
  },
]

export const headerLinks = privateRoutes.filter(pr => pr.showInNav)

export const pages = [
  ...publicRoutes,
  ...privateRoutes,
]

export const history = createBrowserHistory()
