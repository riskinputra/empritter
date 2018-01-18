<template>
  <section id="home" v-show="show">
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  name="tweet"
                  label="Tweet Post"
                  id="tweet"
                  :counter="140"
                  v-model="form.tweet"
                  type="text"
                  :rules="tweetRules"
                  required
                >
                </v-text-field>
                <v-btn 
                  type="submit"
                  color="info"
                  @click.prevent="post(form)"
                  :disabled="!valid"
                >Tweets</v-btn>
                <v-btn type="submit" color="orange" dark @click="clear">Clear</v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 style="padding:10px 0;">
        <v-text-field
        light
        solo
        v-model="search"
        prepend-icon="search"
        placeholder="Search Questions"
        style="width: 100%; min-width: 128px"
      ></v-text-field>
      </v-flex>
      <v-flex xs12 v-for="(tweet, index) in filteredList" :key="index" style="padding:10px 0;">
        <v-card>
          <v-card-actions>
            {{tweet.userId.username}}
            <v-spacer></v-spacer>
            <v-btn icon color="red" dark @click="deleteQuestions(tweet._id)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            {{tweet.post}}
          </v-card-text>
        </v-card>
      </v-flex>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      search: '',
      valid: true,
      show: false,
      form: {
        tweet: ''
      },
      tweetRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length <= 140 || 'Max 140 characters'
      ],
      err: false
    }
  },
  created () {
    this.getTweets()
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/signin')
    } else {
      this.show = true
    }
  },
  computed: {
    ...mapState([
      'tweets'
    ]),
    filteredList () {
      return this.tweets.filter(post => {
        return post.hastag.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    post (data) {
      this.$store.dispatch('postTweet', data)
    },
    ...mapActions([
      'getTweets'
    ]),
    clear () {
      this.$refs.form.reset()
    },
    deleteQuestions (data) {
      this.$store.dispatch('removeTweets', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
