<template>
    <div v-show="showComponent">
        <div class="btn-back-boat">
            <div class="btn-boat" v-on:click="btnBack">Назад</div>
        </div>
        <div>
            <BoatCard class="elem"
                v-for="boat in boats" 
                v-bind:key="boat.id"
                v-bind:id="boat.id"
                v-bind:name="boat.name"
                v-bind:typeboat="boat.typeboat"
                v-bind:length="boat.length"
                v-bind:width="boat.width"
                v-bind:weight="boat.weight"
                v-bind:capacity="boat.capacity"
                v-bind:lifting_capacity="boat.lifting_capacity"
                v-bind:photo="boat.photo"
            >
          </BoatCard>
        </div>
    </div>
</template>

<script>
import ServicesService from '../../services/ServicesService'
import BoatCard from './cards/BoatCard.vue'

export default {
  name: 'boatService',
  components: {
    BoatCard
  },
  data() {
    return {
      boats: [],
      typeboats: [],
      type: ""
    }
  },
  computed: {
    showComponent () {
        return this.$store.getters.getCurrentMenuItem === "boatService"
    }
  },
  methods: {
    btnBack: function () {
        this.$store.dispatch('setCurrentMenuItem', { data: "servicesPage" })
    },
    getBoats() {
      ServicesService.getBoats().then((response) => {
        this.boats = response.data
      })
    }
  },
  created() {
    this.getBoats()
  }
}
</script>

<style scoped>

.btn-back-boat {
    text-align: left;
}

.btn-boat {
    width: 20vh;
    height: 5vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 10px;
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    background: #216869;
}

.btn-boat:hover {
    background: #4BADAE;
    cursor: pointer;
}

</style>