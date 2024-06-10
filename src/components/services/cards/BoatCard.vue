<template>
    <div class="card-boat">
        <h1 class="title-boat">{{ name }}</h1>
         <div class="block-main">
            <div class="img-block-boat">
                <img id="image-boat-card" :src="getImg">
            </div>
            <div class="text-block-boat">
                <p>Тип: {{ this.type }}</p>
                <p>Длина: {{ length }} </p>
                <p>Ширина: {{ width }}</p>
                <p>Вес: {{ weight }} </p>
                <p>Вместительность: {{ capacity }} чел</p>
                <p>Грузоподъемность: {{ lifting_capacity }}</p>
            </div>
            <div class="text-block-boat">
                <ul>
                    <li v-for="priceboat in prices"
                        v-bind:key="priceboat.id"
                        v-bind:hours="priceboat.hours"
                        v-bind:currentPrice="priceboat.currentPrice"
                        >
                        {{priceboat.hours}} часа: {{ priceboat.currentPrice }} руб
                    </li>
                </ul>
            </div>
         </div>
         <div class="right-boat">
            <div class="btn">
                Отправить заявку
            </div>
         </div>
    </div>
</template>

<script>
import ServicesService from '../../../services/ServicesService'

export default {
    name: 'boatCard',
    props: {
        id: String,
        name: String,
        typeboat: String,
        length: String,
        width: String,
        weight: String,
        capacity: String,
        lifting_capacity: String,
        photo: String
    },
    data() {
        return {
            pic_path: null,
            type: null,

            prices: [{}]
        }
    },
    computed: {
        getImg() {
            return require(`../../../../../img/boat/${ this.pic_path }.jpg`)
        }
    },
    methods: {
        setData() {
            if(this.photo === '') {
                this.pic_path = "default"
            } else {
                this.pic_path = this.id
            }
            ServicesService.getType(this.typeboat).then((response) => {
                this.type = response.data.name
            })

            ServicesService.getPriceBoat(this.id).then((response) => {

                for(let i = 0; i < response.data.length; i++) {
                    let temp = response.data[i].price

                    ServicesService.getPrice(temp).then((response) => {
                        this.prices.push({
                            hours:response.data.count_hours,
                            currentPrice:response.data.price
                        })
                    })
                }

            })
        }
    },
    created() {
        this.setData()
    }
}

</script>

<style>
.card-boat {
    width: 100%;
    height: 40vh;
    background: #FFF;
    border-radius: 10px;

    padding: 10px;
}

.right-boat {
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: right;
}

#image-boat-card {
    width: 30vh;
    height: auto;
}

.img-block-boat {
    width: 30%;
}

.text-block-boat {
    width: 70%;
    padding: 20px;
}

.title-boat {
    text-align: left;
    margin-left: 30px;
}
</style>