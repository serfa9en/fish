import axios from 'axios'

const NEW_API_BASE_URL = 'http://localhost:8080/news'

class NewService {
    getNews() {
        return axios.get(NEW_API_BASE_URL)
    }

}

export default new NewService()