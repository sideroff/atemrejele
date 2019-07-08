import {
  Home,
  Projects,
  Tasks,
} from 'components/pages'

export const headerLinks = [
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

export const pages = [
  ...headerLinks,
]