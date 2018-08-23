<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h3 class="primary--text">Create a new meetup</h3>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-form ref="form" v-model="valid">
                    <v-text-field
                        v-model="inputs.title.value"
                        name="title"
                        label="Title*"
                        id="title"
                        :rules="inputs.title.rules"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="inputs.location.value"
                        name="location"
                        label="Location*"
                        id="location"
                        :rules="inputs.location.rules"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="inputs.imageUrl.value"
                        name="imageUrl"
                        label="Image URL*"
                        id="image-url"
                        :rules="inputs.imageUrl.rules"
                        clearable
                        required
                    >
                    </v-text-field>
                    <v-textarea
                        v-model="inputs.description.value"
                        name="description"
                        label="Description"
                        auto-grow
                        row-height="12"
                        box
                        counter="100"
                    >
                    </v-textarea>
                    <v-layout row v-if="checkImgUrl(inputs.imageUrl.value)">
                        <v-flex xs12>
                            <v-card>
                                <v-card-media
                                    :src="inputs.imageUrl.value"
                                    height="200px"                               
                                >
                                </v-card-media>
                            </v-card>
                            
                        </v-flex>
                    </v-layout>
                    <v-layout class="mt-3">
                        <v-flex xs12>
                            <v-btn
                                small
                                :disabled="!valid"
                                @click="submit"
                            >
                                create meetup
                            </v-btn>
                            <v-btn @click="clear" small>clear</v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            valid: false,
            inputs: {
                title: {
                    value: '',
                    rules: [
                        v => !!v || 'Name is required',
                        v => (v && v.length > 3) || 'Name must be greater than 3 characters'                        
                    ]
                },
                location: {
                    value: '',
                    rules: [
                        v => !!v || 'Location is required'
                    ]
                },
                imageUrl: {
                    value: '',
                    rules: [
                        v => this.checkImgUrl(v) || 'Image URL is invalid'
                    ]
                },
                description: {
                    value: '',
                    rules: [
                        v => (v && v.length <= 100) || 'Description must be less than or equal to 100 characters'
                    ]
                }
            }
        }
    },
    methods: {
        checkImgUrl(url) {
            if (url !== null) {
                return url.match(/\.(jpeg|jpg|gif|png)$/) != null
            } else {
                return false
            }            
        },
        submit() {
            if (this.$refs.form.validate()) {

            }
        },
        clear () {
            this.$refs.form.reset()
            this.valid = false
        }
    }
}
</script>
