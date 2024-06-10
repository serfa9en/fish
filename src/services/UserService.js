import axios from 'axios'

const ROLE_API_BASE_URL = 'http://localhost:8080/userRole'
const USER_API_BASE_URL = 'http://localhost:8080/user'
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/employee'
const POST_API_BASE_URL = 'http://localhost:8080/post'

class UserService {
    getInfo(userId) {
        return axios.get(ROLE_API_BASE_URL+"="+userId)
    }

    getUser(login) {
        return axios.get(USER_API_BASE_URL+"="+login)
    }

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    getPost(postId) {
        return axios.get(POST_API_BASE_URL + "=" + postId)
    }
}

export default new UserService()