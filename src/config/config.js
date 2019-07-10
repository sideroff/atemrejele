import {
  Authenticate,
  Home,
  Projects,
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
    label: 'Home',
    component: Home,
    exact: true,
  },
  {
    url: '/projects',
    label: 'Projects',
    component: Projects,
  },
  {
    url: '/tasks',
    label: 'Tasks',
    component: Tasks,
  },
]

export const headerLinks = privateRoutes

export const pages = [
  ...publicRoutes,
  ...privateRoutes,
]