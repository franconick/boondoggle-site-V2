import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'

function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div>
      {!isHomePage && <Nav />}
      <Outlet />
    </div>
  )
}

export default Layout

