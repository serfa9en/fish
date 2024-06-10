<template>
    <div v-show="showComponent">
        <h1>Новости</h1>
        <div>
          <NewCard class="elem"
                v-for="neww in news" 
                v-bind:key="neww.id"
                v-bind:id="neww.id"
                v-bind:name="neww.name"
                v-bind:role="neww.role"
                v-bind:photo="neww.photo"
                v-bind:birthday="neww.birthday"
                v-bind:mail="neww.mail"
                v-bind:phone_namber_work="neww.phone_namber_work"
                v-bind:post="neww.post"
            >
          </NewCard>
        </div>
    </div>
</template>

<script>
import NewService from '../../services/NewServices'
import NewCard from './cards/NewCard.vue'

export default {
  name: 'newsPage',
  components: {
    NewCard
  },
  data() {
    return {
      news: []
    }
  },
  computed: {
    showComponent () {
        return this.$store.getters.getCurrentMenuItem === "newsPage"
    }
  },
  methods: {
    getEmployees() {
      NewService.getNews().then((response) => {
        this.news = response.data
      })
    }
  },
  created() {
    this.getEmployees()
  }
}
</script>