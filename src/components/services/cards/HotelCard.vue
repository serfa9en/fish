<template>
    <div class="card-hotel">
        <h1 class="title-hotel">Номер {{ number }}</h1>
         <div class="block-main">
            <div class="img-block-hotel">
                <img id="image-hotel-card" :src="getImg">
            </div>
            <div class="text-block-hotel">
                <p>Кол-во мест: {{ count_bed }}</p>
                <p>Цена (за сутки): {{ price }} руб</p>
                <p>{{ description }}</p>
            </div>
         </div>
         <div class="right-hotel">
            <div class="btn">
                Отправить заявку
            </div>
         </div>
    </div>
</template>
<script>

export default {
    name: 'hotelCard',
    props: {
        id: String,
        number: String,
        count_bed: String,
        description: String,
        price: String,
        picture: String,
        deleted: String
    },
    data() {
        return {
            pic_path: null
        }
    },
    computed: {
        getImg() {
            console.log(this.picture)
            return require(`../../../../../img/hotel/${ this.pic_path }.jpg`)
        }
    },
    methods: {
        setData() {
            if(this.picture === '') {
                this.pic_path = "default"
            } else {
                this.pic_path = this.id
            }
        }
    },
    created() {
        this.setData() 
    }
}

</script>

<style>
.card-hotel {
    width: 100%;
    height: 30vh;
    background: #FFF;
    border-radius: 10px;

    padding: 10px;
}

.right-hotel {
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: right;
}

#image-hotel-card {
    width: 30vh;
    height: auto;
}

.img-block-hotel {
    width: 30%;
}

.text-block-hotel {
    width: 70%;
    padding: 20px;
}

.title-hotel {
    text-align: left;
    margin-left: 30px;
}
</style>