<template>
    <div v-show="showComponent">
      <div class="conteiner-card">
        <div id="left-card">
            <img id="user-photo" :src="img_path">
            <div>мои заявки</div>
            <div>выход</div>
        </div>
        <div id="right-card">
            right
        </div>
      </div>
    </div>
</template>

<script>
import UserService from '../services/UserService'

export default {
  name: 'myCard',
  data() {
    return {
      img_path: null,
      mail: null,
      post: null,
      phone_pr: null,
      phone_work: null,
      birth: null,
      address: null,

      noPhoto: true
    }
  },
  computed: {
    showComponent () {
        return this.$store.getters.getCurrentMenuItem === "myCard"
    }
    /*
    getImgPath () {

    }
    */
  },
  methods: {
    getUserInfo() {
      let usrId = this.$cookies.get("usrId")

      UserService.getInfo(usrId).then((response) => {
        this.img_path = response.data.photo
        this.mail = response.data.mail
        this.post = response.data.post
        this.phone_pr = response.data.phone_number_private
        this.phone_work = response.data.phone_namber_work
        this.birth = response.data.birthday
        this.address = response.data.address

      

      })
    }
  },
  created() {
    this.getUserInfo()
  }
}
</script>

<style scoped>

.conteiner-card {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    border: 2px solid red;
}

#left-card {
    width: 40vh;
    height: 100%;
    text-align: center;
    justify-content: left;
    align-items: left;
    left: 0;
    margin: 50px;

    border: 2px solid purple;
}

#right-card {
    width: 80vh;
    height: auto;
    min-height: 80vh;
    background: #FFF;
    border-radius: 10px;

}

#user-photo {
  width: 35vh;
  height: 40vh;
}

</style>
