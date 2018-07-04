<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
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
    data () {
        return {
            meetups: [
                { imageUrl: 'https://s3.amazonaws.com/vuetify-docs/images/carousel/squirrel.jpg', title: 'squirrel', description: 'bla', date: '2018-01-01', id: 'squirrel' },
                { imageUrl: 'https://s3.amazonaws.com/vuetify-docs/images/carousel/sky.jpg', title: 'sky', description: 'bla bla', date: '2018-02-01', id: 'sky' },
                { imageUrl: 'https://s3.amazonaws.com/vuetify-docs/images/carousel/bird.jpg', title: 'bird', description: 'bla bla bla', date: '2018-03-01', id: 'bird' },
                { imageUrl: 'https://s3.amazonaws.com/vuetify-docs/images/carousel/planet.jpg', title: 'planet', description: 'bla bla bla bla', date: '2018-04-01', id: 'planet' }
            ]
        }
    },
    computed: {
        item() {
            return this.meetups.filter(x => x.id == this.$route.params.id)[0]
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
