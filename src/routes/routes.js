import Main from '../views/Main'
import About from '../views/About'
import Figures from '../views/Figures'
import Profile from '../views/Profile'
import Loading from '../views/Loading'
import Login from '../views/Login'
import Gallery from '../views/Gallery'

export const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about/gallery',
    name: 'Gallery',
    component: Gallery
  },
  /* Juega */
  {
    path: '/figures',
    name: 'Figures',
    component: Figures
  },
  /* Help */
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
