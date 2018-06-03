import Main from '../views/Main'
import About from '../views/About'
import Figures from '../views/Figures'
import Profile from '../views/Profile'
import Loading from '../views/Loading'
import Login from '../views/Login'

export const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/figures',
    component: Figures
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/login',
    component: Login
  }
]
