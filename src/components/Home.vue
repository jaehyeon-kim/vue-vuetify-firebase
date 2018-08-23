<template>
    <v-container>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large color="info" router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large color="info" router to="/meetup/new">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="text-sm-center">
                <v-carousel>
                    <v-carousel-item
                        v-for="item in meetups"
                        :key="item.id"
                        :src="item.imageUrl"
                    >
                        <div class="title">
                            <v-btn flat block dark large @click="onLoadMeetup(item.id)">                                
                                {{ item.title.toUpperCase() }}
                                <v-icon right>arrow_forward</v-icon>
                            </v-btn>                            
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
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
            return this.$store.getters['meetup/recentMeetups']
        }
    },
    methods: {
        onLoadMeetup(id) {
            this.$router.push('/meetups/' + id)
        }
    }
}
</script>

<style scoped>
    .title {
        position: absolute;
        z-index: 1000;
        /* top: 0; */
        left: 0; 
        bottom: 0; 
        right: 0;
        bottom: 50px;        
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding: 20px;
    }
</style>
