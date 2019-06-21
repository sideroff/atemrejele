import {
  Home,
  Active,
  InProgress,
  Done,
} from 'components/pages'

export const headerLinks = [
  {
    url: '/',
    label: 'Home',
    component: Home,
    exact: true,
  },
  {
    url: '/active',
    label: 'Active',
    component: Active,
  },
  {
    url: '/in-progress',
    label: 'In progress',
    component: InProgress,
  },
  {
    url: '/done',
    label: 'Done',
    component: Done,
  },
]

export const pages = [
  ...headerLinks,
]