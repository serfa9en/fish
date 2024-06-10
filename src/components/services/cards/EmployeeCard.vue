<template>
    <div class="card-employee">
         <div class="block-main">
            <div class="img-block-employee">
                <img id="image-employee-card" :src="getImg">
            </div>
            <div class="text-block-employee">
                <p>{{ name }}</p>
                <p>{{ birthday }} </p>
                <p>{{ mail }}</p>
                <p>{{ phone_namber_work }} </p>
                <p>{{ this.postName }}</p>
            </div>
         </div>
    </div>
</template>

<script>
import UserService from '../../../services/UserService'
export default {
    name: 'employeeCard',
    props: {
        id: String,
        name: String,
        role: String,
        photo: String,
        birthday: String,
        mail: String,
        phone_namber_work: String,
        post: String
    },
    data() {
        return {
            postName: null
        }
    },
    computed: {
        getImg() {
            return require(`../../../../../img/users/${ this.pic_path }.jpg`)
        }
    },
    methods: {
        setData() {
            if(this.photo === '') {
                this.pic_path = "default"
            } else {
                this.pic_path = this.id
            }
            UserService.getPost(this.post).then((response) => {
                this.postName = response.data.name
            })
        }
    },
    created() {
        this.setData()
    }
}

</script>

<style>
.card-employee {
    width: 100%;
    height: 40vh;
    background: #FFF;
    border-radius: 10px;

    padding: 10px;
}

.right-employee {
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: right;
}

#image-employee-card {
    width: 30vh;
    height: auto;
}

.img-block-employee {
    width: 30%;
}

.text-block-employee {
    width: 70%;
    padding: 20px;
}

.title-employee {
    text-align: left;
    margin-left: 30px;
}
</style>