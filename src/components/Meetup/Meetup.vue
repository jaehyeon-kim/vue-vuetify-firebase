<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card>
                    <v-card-title>
                        <h6 class="headline primary--text">{{ item.title.toUpperCase() }}</h6>
                    </v-card-title>
                    <v-card-media
                        :src=item.imageUrl
                        height="400px"
                    ></v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ item.date }}</div>
                        <div>{{ item.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                        <v-btn class="secondary" :to="backPath">Go Back</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    data () {
        return {

        }
    },
    computed: {
        meetups() {
            return this.$store.getters['meetup/loadedMeetups']
        },
        item() {
            // 1. router params can be passed as props
            // 2. getters can be a function
            // this.$route.params.id
            return this.$store.getters['meetup/loadedMeetup'](this.id)
            // return this.meetups.filter(x => x.id == this.id)[0]
        },
        backPath() {
            return this.$store.getters['meetup/backPath']
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$store.commit('meetup/setBackPath', from.fullPath)
        })
    }
}
</script>
