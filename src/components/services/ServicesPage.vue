<template>
    <div v-show="showComponent">
        <div class="block-service" v-on:click="moveToBoat">
          <h1 class="title-service">Аренда лодок</h1>
          <div class="block-service2">
            <img class="img-service" src="../../assets/0.jpg">
            <div class="text-service">
              <p>В данном разделе Вы можете арендовать любую лодку из каталога. 
                Для этого выбираете понравившейся вариант и нажимаете кнопку 
                “Отправить заявку”</p>
              <p>Наш оператор с Вами свяжется</p>
            </div>
          </div>
        </div>
        <div class="block-service" v-on:click="moveToHotel">
          <h1 class="title-service">Бронь номера в гостинице</h1>
          <div class="block-service2">
            <img class="img-service" src="../../assets/1.jpg">
            <div class="text-service">
              <p>В данном разделе Вы можете забронировать любой номер нашей 
                гостиницы. Для этого выбираете понравившейся вариант и 
                нажимаете кнопку “Отправить заявку”. </p>
              <p>Наш оператор с Вами свяжется</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'servicesPage',
  computed: {
    showComponent () {
        return this.$store.getters.getCurrentMenuItem === "servicesPage"
    }
  },
  methods: {
    moveToBoat: function () {
      this.$store.dispatch('setCurrentMenuItem', { data: "boatService" })
    },
    moveToHotel: function () {
      this.$store.dispatch('setCurrentMenuItem', { data: "hotelService" })
    }
  }
}
</script>
<style scoped>
.block-service {
  width: 95%;
  height: 40vh;
  background: #FFF;
  border-radius: 10px;
  margin: 20px;
}

.block-service:hover {
  cursor: pointer;
  background: #E7FFE7;
}

.block-service2 {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 24px;
  margin: 30px;
}

.img-service {
  width: 40vh;
}

.title-service {
  text-align: left;
  padding-left: 30px;
  padding-top: 30px;
}

.text-service {
  width: 100%;
  margin: 20px;
  padding: 10px;
}

</style>