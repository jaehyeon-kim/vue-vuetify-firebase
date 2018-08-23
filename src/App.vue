<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list>
        <v-list-tile 
          v-for="(menu, ind) in menuItems" 
          :key="ind"
          :to="menu.link"
        >
          <v-list-tile-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ menu.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense dark color="light-blue darken-1">
      <v-toolbar-side-icon 
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">DevMeetup</router-link>
      </v-toolbar-title>      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          flat 
          v-for="(menu, ind) in menuItems" 
          :key="ind" 
          :to=menu.link 
          exact
        >
          <v-icon left>{{ menu.icon }}</v-icon>
          {{ menu.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'supervisor_account', title: 'Vue Meetups', link: '/meetups' },
        { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
        { icon: 'person', title: 'Profile', link: '/profile' },
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      ]
    }
  }
}
</script>
