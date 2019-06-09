<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        {{counter}}
        <footer>
          <small>
            <v-btn color="purple" @click="add" dark>+1</v-btn>
            <v-btn color="purple" @click="sub" dark>-1</v-btn>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.log.log.counter
    }
  },
  methods: {
    add () {
      this.$store.commit("log/log/add")
    },
    sub () {
      this.$store.commit("log/log/sub")
    },
  }
}
</script>

