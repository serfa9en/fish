<template>
    <div v-show="showComponent">
      <div class="btn-back-hotel">
            <div class="btn-hotel" v-on:click="btnBack">Назад</div>
        </div>
        <div>
          <HotelCard class="elem"
            v-for="hotel in hotels" 
            v-bind:key="hotel.id"
            v-bind:id="hotel.id"
            v-bind:number="hotel.number"
            v-bind:count_bed="hotel.count_bed"
            v-bind:description="hotel.description"
            v-bind:price="hotel.price"
            v-bind:picture="hotel.picture"
            v-bind:deleted="hotel.deleted"
            >
          </HotelCard>
        </div>
    </div>
</template>

<script>
import ServicesService from '../../services/ServicesService'
import HotelCard from './cards/HotelCard.vue'

export default {
  name: 'hotelService',
  components: {
    HotelCard
  },
  data() {
    return {
      hotels: []
    }
  },
  computed: {
    showComponent () {
        return this.$store.getters.getCurrentMenuItem === "hotelService"
    }
  },
  methods: {
    btnBack: function () {
        this.$store.dispatch('setCurrentMenuItem', { data: "servicesPage" })
    },
    getHotels() {
      ServicesService.getHotels().then((response) => {
        this.hotels = response.data
      })
    }
  },
  created() {
    this.getHotels()
  }
}
</script>

<style scoped>

.btn-back-hotel {
    text-align: left;
    margin: 20px;
}

.btn-hotel {
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

.btn-hotel:hover {
    background: #4BADAE;
    cursor: pointer;
}
</style>