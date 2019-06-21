import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>Home page</div>

      <Link to='/active'>Active</Link>
    </div>
  )
}