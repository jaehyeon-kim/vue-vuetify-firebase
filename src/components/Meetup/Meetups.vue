<template>
    <v-container>
        <v-layout row wrap class="mb-2" v-for="item in meetups" :key="item.id">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                    :src=item.imageUrl
                                    height="130px"
                                ></v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h5 class="headline white--text mb-2">{{ item.title.toUpperCase() }}</h5>
                                        <div>{{ item.date }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat :to="/meetups/ + item.id">
                                        <v-icon left light>arrow_forward</v-icon>
                                        Vue Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
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
    }
}
</script>
