<template>
    <div v-show="showComponent">
        <div class="header-block">
            <div class="header-block-main">
                <form>
                    <input type="text" id="search-line" placeholder="искать сотрудника, новость, прочее...">
                </form>
                <div v-on:click="selectMenuItem(5)" id="userName">{{ userName }}</div>
            </div>
        </div>

        <div class="main-block">
            <div class="left-block-menu">
            <!--БОКОВАЯ ПАНЕЛЬ-->
                <div 
                    class="item-serv start-settings" 
                    v-if="this.$store.getters.getSectionNews"
                    v-on:click="selectMenuItem(0)"
                    id="item_news">
                    Новости
                </div>
                <div 
                    class="item-serv item-menu" 
                    v-if="this.$store.getters.getSectionServices"
                    v-on:click="selectMenuItem(1)"
                    id="item_services">
                    Услуги
                </div>
                <div 
                    class="item-serv item-menu" 
                    v-if="this.$store.getters.getSectionAbout"
                    v-on:click="selectMenuItem(2)"
                    id="item_about">
                    О предприятии
                </div>
                <div 
                    class="item-serv item-menu" 
                    v-if="this.$store.getters.getSectionEmployees"
                    v-on:click="selectMenuItem(3)"
                    id="item_employees">
                    Сотрудники
                </div>
                <div 
                    class="item-serv item-menu" 
                    v-if="this.$store.getters.getSectionTasks"
                    v-on:click="selectMenuItem(4)"
                    id="item_tasks">
                    Задачи
                </div>
                <div class="item-serv quote">
                    <p id="word1">Всякое</p> 
                    <p id="word2">препятствие</p>
                    <p id="word3">рыбалке</p>
                    <p id="word2">только</p>
                    <p id="word1">усиливает</p>
                    <p id="word2">стремление <br>к ней</p>
                    <br>
                    <p id="word4">П.Г. Черкасов</p>
                </div>
                <div class="item-serv contacts">
                    <p id="contact1">Контакты</p> 
                    <p id="contact2">почта</p>
                    <p id="contact2">телефон</p>
                    <br>
                    <p id="contact3"><u>Менеджер</u></p>
                    <p id="contact2">Фамилия Имя</p>
                    <p id="contact2">телефон</p>
                </div>
            </div>
            <div class="cont">
                <!--ОСНОВНАЯ ПАНЕЛЬ-->
                <NewsPage/>
                <ServicesPage/>
                <AboutPage/>
                <EmployeesPage/>
                <TasksPage/>
                <MyCard/>
                <BoatService/>
                <HotelService/>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../services/UserService'

import NewsPage from './services/NewsPage.vue'
import ServicesPage from './services/ServicesPage.vue'
import AboutPage from './services/AboutPage.vue'
import EmployeesPage from './services/EmployeesPage.vue'
import TasksPage from './services/TasksPage.vue'
import MyCard from './MyCard.vue'
import BoatService from './services/BoatService.vue'
import HotelService from './services/HotelService.vue'

export default {
  name: 'mainPage',
  components: {
    NewsPage,
    ServicesPage,
    AboutPage,
    EmployeesPage,
    TasksPage,
    MyCard,
    BoatService,
    HotelService
  },
  data () {
    return {
        userName: '',
        currentBlock: '',
        userRole: null
    }
  },
  computed: {
    showComponent () {
        if (this.$store.getters.getMainPageStatus) {
            this.createGUI()
        }
        return this.$store.getters.getMainPageStatus
    }
  },
  methods: {
    createGUI: function () {
        // выводим блоки согласно роли пользователя
        // общие для всех
        this.$store.dispatch('setSectionNews', { data: true })
        this.$store.dispatch('setSectionServices', { data: true })
        this.$store.dispatch('setSectionAbout', { data: true })

        UserService.getInfo(this.$cookies.get("usrId")).then((response) => {
            this.userRole = response.data.role
            this.userName = response.data.name

            console.log(this.userRole)

            if(this.userRole === 1) {
                // сотрудник
                this.$store.dispatch('setSectionEmployees', { data: true })
                this.$store.dispatch('setSectionTasks', { data: true })
            }

            if(this.userRole === 2) {
                // оператор
                this.$store.dispatch('setSectionEmployees', { data: true })
                this.$store.dispatch('setSectionTasks', { data: true })
            }

            if(this.userRole === 3) {
                // админ
                this.$store.dispatch('setSectionEmployees', { data: true })
                this.$store.dispatch('setSectionTasks', { data: true })
            }

            // текущий блок
            this.$store.dispatch('setCurrentMenuItem', { data: "newsPage" })
        })
    },
    selectMenuItem: function (val) {
        // отрисовка
        switch(val) {
            case 0: {
                // 0 - новости
                document.getElementById("item_news").className = "menu_item_active"
                this.$store.dispatch('setCurrentMenuItem', { data: "newsPage" })
                document.getElementById("item_services").className = "item-menu"
                document.getElementById("item_about").className = "item-menu"
                if (this.userRole === 1 || this.userRole === 2 || this.userRole === 3) {
                    document.getElementById("item_employees").className = "item-menu"
                    document.getElementById("item_tasks").className = "item-menu"
                }
                break
            }
            case 1: {
                // 1 - услуги
                document.getElementById("item_services").className = "menu_item_active"
                this.$store.dispatch('setCurrentMenuItem', { data: "servicesPage" })
                document.getElementById("item_news").className = "item-menu"
                document.getElementById("item_about").className = "item-menu"
                if (this.userRole === 1 || this.userRole === 2 || this.userRole === 3) {
                    document.getElementById("item_employees").className = "item-menu"
                    document.getElementById("item_tasks").className = "item-menu"
                }
                break
            }
            case 2: {
                // 2 - о предприятии
                document.getElementById("item_about").className = "menu_item_active"
                this.$store.dispatch('setCurrentMenuItem', { data: "aboutPage" })
                document.getElementById("item_news").className = "item-menu"
                document.getElementById("item_services").className = "item-menu"
                if (this.userRole === 1 || this.userRole === 2 || this.userRole === 3) {
                    document.getElementById("item_employees").className = "item-menu"
                    document.getElementById("item_tasks").className = "item-menu"
                }
                break
            }
            case 3: {
                // 3 - сотрудники
                document.getElementById("item_employees").className = "menu_item_active"
                this.$store.dispatch('setCurrentMenuItem', { data: "employeesPage" })
                document.getElementById("item_news").className = "item-menu"
                document.getElementById("item_services").className = "item-menu"
                document.getElementById("item_about").className = "item-menu"
                document.getElementById("item_tasks").className = "item-menu"
                break
            }
            case 4: {
                // 4 - задачи
                document.getElementById("item_tasks").className = "menu_item_active"
                this.$store.dispatch('setCurrentMenuItem', { data: "tasksPage" })
                document.getElementById("item_news").className = "item-menu"
                document.getElementById("item_services").className = "item-menu"
                document.getElementById("item_about").className = "item-menu"
                document.getElementById("item_employees").className = "item-menu"
                break
            }
            case 5: {
                // 5 - карточка
                this.$store.dispatch('setCurrentMenuItem', { data: "myCard" })
                document.getElementById("item_news").className = "item-menu"
                document.getElementById("item_services").className = "item-menu"
                document.getElementById("item_about").className = "item-menu"
                if (this.userRole === 1 || this.userRole === 2 || this.userRole === 3) {
                    document.getElementById("item_employees").className = "item-menu"
                    document.getElementById("item_tasks").className = "item-menu"
                }
                break
            }
        }

    }
  }
}
</script>

<style scoped>
.header-block {
    width: 100%;
    height: 12.5vh;
}

.header-block-main {
    width: auto;
    height: 100%;
    margin-left: 30vh;
    display: flex;
    text-align: center;
    justify-content: left;
    align-items: center;
}

.cont {
    width: 100%;
    height: 100%;
}

#search-line {
    width: 80vh;
    height: 5vh;
    background: rgba(33, 104, 105, 0.2);
    border-radius: 10px;
    font-family: "Comfortaa", sans-serif;
    font-size: 2.6vh;
    padding-left: 20px;
    color: #1F2421;
    border: none;
    background-color: white;
    background-image: url('../assets/icons/search-interface-symbol.png');
    background-position: right;
    background-repeat: no-repeat;
    background-size: 3vh;
}

#search-line::placeholder {
    color: #1F2421;
}

#search-line:focus {
    outline: none;
    background: #ffffff;
}

#search-line::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.6s ease;}
#search-line::-moz-placeholder                {opacity: 1; transition: opacity 0.6s ease;}
#search-line:-moz-placeholder                 {opacity: 1; transition: opacity 0.6s ease;}
#search-line:-ms-input-placeholder            {opacity: 1; transition: opacity 0.6s ease;}
#search-line:focus::-webkit-input-placeholder {opacity: 0.1; transition: opacity 0.6s ease;}
#search-line:focus::-moz-placeholder          {opacity: 0.1; transition: opacity 0.6s ease;}
#search-line:focus:-moz-placeholder           {opacity: 0.1; transition: opacity 0.6s ease;}
#search-line:focus:-ms-input-placeholder      {opacity: 0.1; transition: opacity 0.6s ease;}

#userName {
    width: 100%;
    height: auto;
    text-align: right;
    margin: 50px;
    font-size: 2.6vh;
    text-decoration: underline;
}

#userName:hover {
    cursor: pointer;
}

.main-block {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
}

.left-block-menu {
    width: 30vh;
    height: auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:0;
}

.item-serv {
    width: 20vh;
    height: 5vh;
    background: rgba(33, 104, 105, 0.2);
    margin: 10px;
    border-radius: 10px;
    text-align: left;
    justify-content: center;
    flex-direction: column;
    display: flex;
    padding-left: 20px;
    color: #1F2421;
    font-size: 20px;
}

.item-menu {
    width: 20vh;
    height: 5vh;
    background: rgba(33, 104, 105, 0.2);
    margin: 10px;
    border-radius: 10px;
    text-align: left;
    justify-content: center;
    flex-direction: column;
    display: flex;
    padding-left: 20px;
    color: #1F2421;
    font-size: 20px;
}

.start-settings {
    width: 20vh;
    height: 5vh;
    margin: 10px;
    border-radius: 10px;
    text-align: left;
    justify-content: center;
    flex-direction: column;
    display: flex;
    padding-left: 20px;
    font-size: 20px;
    background: rgba(33, 104, 105, 1);
    color: #ffffff;
}

.item-menu:hover {
    background: rgba(33, 104, 105, 0.5);
    cursor: pointer;
}

.item-menu:active {
    background: rgba(33, 104, 105, 1);
    color: #ffffff;
}

.quote {
    width: 20vh;
    height: 30vh;
    color: #ffffff;
    line-height: 1.2;
}

#word1 { font-size: 2.8vh; margin: 0; }
#word2 { font-size: 2.4vh; margin: 0; }
#word3 { font-size: 3.8vh; margin: 0; }
#word4 { font-size: 1.4vh; margin: 0; }

.contacts {
    width: 20vh;
    height: 23.5vh;
    color: #1F2421;
    line-height: 1.4;
}

#contact1 { font-size: 3vh; margin: 0; }
#contact2 { font-size: 2vh; margin: 0; }
#contact3 { font-size: 2.5vh; margin: 0; }

.menu_item_default {
    background: rgba(33, 104, 105, 0.2);
    color: #1F2421;
}

.menu_item_active {
    width: 20vh;
    height: 5vh;
    margin: 10px;
    border-radius: 10px;
    text-align: left;
    justify-content: center;
    flex-direction: column;
    display: flex;
    padding-left: 20px;
    font-size: 20px;
    background: rgba(33, 104, 105, 1);
    color: #ffffff;
}

</style>