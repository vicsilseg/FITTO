import Main from '../views/Main'
import About from '../views/About'
import Figures from '../views/Figures'
import Profile from '../views/Profile'
import Loading from '../views/Loading'
import Login from '../views/Login'
import Gallery from '../views/Gallery'
import Posts from '../views/Posts'
import User from '../views/User'
import SavedPosts from '../views/SavedPosts'
import MyCreations from '../views/MyCreations'
import EditProfile from '../views/EditProfile'
/* import Video from '../views/Video' */
import Play from '../views/Play'

export const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        name: 'Main',
        path: 'main',
        component: Posts
      },
      {
        name: 'Figures',
        path: 'figures',
        component: Figures
      },
      {
        name: 'Gallery',
        path: 'gallery',
        component: Gallery
      },
      {
        name: 'About',
        path: 'about',
        component: About
      },
      {
        name: 'User',
        path: 'user',
        component: User,
        redirect: 'user/profile',
        children: [
          {
            name: 'Profile',
            path: 'profile',
            component: Profile
          },
          {
            name: 'Edit Profile',
            path: 'edit',
            component: EditProfile
          },
          {
            name: 'Saved Posts',
            path: 'saved',
            component: SavedPosts
          },
          {
            name: 'My Creations',
            path: 'creations',
            component: MyCreations
          }
        ]
      }
    ]
  },
  /* RUTAS DE PRIMER NIVEL */
  {
    name: 'Play',
    path: '/play',
    component: Play
  },
  /* Help */
  {
    name: 'Loading',
    path: '/loading',
    component: Loading
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  }
]
