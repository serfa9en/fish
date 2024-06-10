<template>
    <div v-show="showComponent" class="settings-back">
        <div class="block">
            <div class="auth-block righteous-regular">
                <form>
                    <div id="block1" v-if="error">
                    <p>
                        <img id="img-icon" src="../assets/icons/warning.png">
                        Неверный логин или пароль</p>
                    </div>
                    <input id="block2" type="text" placeholder="Логин" name="login">
                    <input id="block3" type="password" placeholder="Пароль" name="password">
                    <div id="block4" v-on:click="logIn()">Войти</div>
                    <div id="block5" v-on:click="newPass()">Восстановить пароль</div>
                </form>
            </div>
        </div>
        <div class="righteous-regular">
            <div class="block-reg">
                <div id="registr" v-on:click="registration()">Регистрация</div>
            </div>
        </div>
        <div id="background">
            <p id="sign-and">&</p>
            <p id="text1">РЫБО</p>
            <p id="text2">ЛОВСТВО</p>
            <p id="text3">ТУРИЗМ</p>
        </div>
    </div>
</template>
  
<script>
import UserService from '../services/UserService'

export default {
  name: 'authorization',
  data() {
    return {
        userLogin: null,
        userPassword: null,
        userRole: null,
        userId: null,
        userName: null,
        error: false,
        flag: null
    }
  },
  computed: {
    showComponent () {
        if (this.$store.getters.getAuthStatus === true) {
            this.setData()
        }
        return this.$store.getters.getAuthStatus
    }
  },
  methods: {
    setData: function () {
        if (this.$cookies.get("usrId") !== null) {
            this.$store.dispatch('setAuthStatus', { data: false })
            this.$store.dispatch('setMainPageStatus', { data: true })
        }

        document.getElementsByName("login").value = ""
        document.getElementsByName('password').value = ""
        this.flag = 0
    },
    logIn: function () {
        this.error = false

        // получение логина и пароля
        let loginForm = document.getElementById("block2").value
        let passwordForm = document.getElementById("block3").value

        if(loginForm != "" || passwordForm != "") {

            // проверка, что к данному логину правильно введен пароль
            UserService.getUser(loginForm).then((response) => {
                this.userLogin = response.data.login
                this.userPassword = response.data.password
                this.userRole = response.data.role
                this.userId = response.data.id
                this.userName = response.data.name

                if(passwordForm === this.userPassword) {
                
                    // получаем роль пользователя из БД, кладем роль в куку
                    // 1 - сотрудник
                    // 2 - оператор
                    // 3 - администратор
                    // this.$cookies.set("userRole", 1);
                    this.getRole(this.userId)

                    // переход
                    this.$store.dispatch('setAuthStatus', { data: false })
                    this.$store.dispatch('setMainPageStatus', { data: true })

                    // делаем куку, чтобы не вводить пароль каждый раз
                    this.$cookies.set("usrId", this.userId);

                    //document.cookie = "userLogin=" + document.getElementById("block2").value
                } else {
                    this.error = true
                }
            })
        } else {
            this.error = true
        }
    },
    getRole (usrId) {
        UserService.getInfo(usrId).then((response) => {
            this.$store.dispatch('setRole', { data: response.data.role })
        })
    },
    newPass: function() {
        alert("восстановить пароль")
    }
  }
}
</script>
  
<style scope>
body div{
    transition: 1s;
}
  
#background {
    width: 100%;
    height: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 15vh;
    margin: 0;
    padding: 0;
    position: absolute;
}

#sign-and {
    width: auto;
    height: 100%;
    position: absolute;
    right: 0;
    font-size: 100vh;
    font-weight: 100;
    z-index: 9999;

}

#text1, #text2, #text3, #sign-and {
    margin: 0;
    opacity: 10%;
}

#text1, #text2, #text3 {
    z-index: 1;
}

#text3 {
    position: absolute;
    bottom: 0;
}

.block {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

}

.auth-block {
    width: 60vh;
    height: 50vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 10px;
    z-index: 9999;
}

.block-reg {
    width: 95%;
    height: auto;
    display: block;
    text-align: right;
    position: absolute;
    margin: 30px;
}

#block1,#block2,#block3,#block4,#block5 {
    width: 37vh;
    height: 3.5vh;
    border-radius: 10px;
    margin: 2vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#block1 {
    width: 40vh;
    height: 5vh;
    background: rgba(160, 0, 0, 0.2);
    color: #A00000;
    font-size: 2vh;
}

#img-icon {
    width: 4.5vh;
    height: auto;
    vertical-align: middle;
}

#block2,#block3 {
    text-align: left;
    padding: 10px;
    font-size: 3.2vh;
    color: #9CC5A1;
    border: #9CC5A1 2px solid;
}

#block2::placeholder,
#block3::placeholder {
  color: #9CC5A1;
  opacity: 0.6;
}

#block2:focus,
#block3:focus {
    outline: none;
    border: 2px #49A078 solid;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(73,160,120,1);
    -moz-box-shadow: 0px 0px 25px 0px rgba(73,160,120,1);
    box-shadow: 0px 0px 25px 0px rgba(73,160,120,1);
    color: #9CC5A1;
}

#block4 {
    width: 39.5vh;
    height: 5.5vh;
    background: #9CC5A1;
    color: #1F2421;
    font-size: 3.2vh;
}

#block4:hover {
    background: rgba(73,160,120,0.5);
    cursor: pointer;
}

#block4:active {
    background: rgba(73,160,120,1);
}

#block5 {
    font-size: 2.4vh;
    color: #1F2421;
}

#block5:hover {
    cursor: pointer;
}

#registr {
    color: #1F2421;
    font-size: 3.2vh;
}

#registr:hover {
    cursor: pointer;
}
</style>
  