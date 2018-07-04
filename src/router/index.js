import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import Meetup from '@/components/Meetup/Meetup'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import Profile from '@/components/User/Profile'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/meetups', name: 'Meetups', component: Meetups },
  { path: '/meetups/:id', name: 'Meetup', component: Meetup},
  { path: '/meetup/new', name: 'CreateMeetup', component: CreateMeetup },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/profile', name: 'Profile', component: Profile }
]

export default new Router({
  mode: 'history',
  routes
})
