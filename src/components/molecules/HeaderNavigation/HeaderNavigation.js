import { Link } from 'react-router-dom'
import { headerLinks } from 'config'

export default function HeaderNavigation() {
  console.log('HeaderNavigation render')

  return headerLinks.map(({ href, label }) => (
    <Link to={href}>{label}</Link>
  ))
}
