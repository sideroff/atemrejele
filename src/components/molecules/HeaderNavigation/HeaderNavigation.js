import React from 'react'

import { Link } from 'components/atoms'

import { headerLinks } from 'utils/config'


export default function HeaderNavigation() {
  console.log('HeaderNavigation render ', headerLinks)

  return headerLinks.map(({ url, exact, label }) => (
    <Link to={url} exact={exact} >{label}</Link>
  ))
}
