<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="mb-2" dark color="light-blue darken-1" v-for="item in meetups" :key="item.id">
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
                                        <div>{{ item.date - item.location }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat :to="'/meetups/' + item.id">
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

        }
    },
    computed: {
        meetups() {
            return this.$store.getters['meetup/loadedMeetups']
        }
    }
}
</script>
