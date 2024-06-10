import axios from 'axios'

const HOTEL_API_BASE_URL = 'http://localhost:8080/hotels'
const BOAT_API_BASE_URL = 'http://localhost:8080/allBoatsNoDelete'
const TYPE_BOAT_API_BASE_URL = 'http://localhost:8080/allTypesBoat'
const PRICE_BOAT_API_BASE_URL = 'http://localhost:8080/getPriceBoat='
const TYPE_API_BASE_URL = 'http://localhost:8080/typeBoat='
const PRICE_API_BASE_URL = 'http://localhost:8080/getPrice='

class ServicesService {
    getHotels() {
        return axios.get(HOTEL_API_BASE_URL)
    }

    getBoats() {
        return axios.get(BOAT_API_BASE_URL)
    }

    getTypeBoats() {
        return axios.get(TYPE_BOAT_API_BASE_URL)
    }

    getType(type) {
        return axios.get(TYPE_API_BASE_URL + type)
    }

    getPriceBoat(boatId) {
        return axios.get(PRICE_BOAT_API_BASE_URL + boatId)
    }

    getPrice(id) {
        return axios.get(PRICE_API_BASE_URL + id)
    }


}

export default new ServicesService()