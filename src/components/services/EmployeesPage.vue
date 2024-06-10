<template>
    <div v-show="showComponent">
        <h1>Сотрудники</h1>
        <div>
          <EmployeeCard class="elem"
                v-for="employee in empl" 
                v-bind:key="employee.id"
                v-bind:id="employee.id"
                v-bind:name="employee.name"
                v-bind:role="employee.role"
                v-bind:photo="employee.photo"
                v-bind:birthday="employee.birthday"
                v-bind:mail="employee.mail"
                v-bind:phone_namber_work="employee.phone_namber_work"
                v-bind:post="employee.post"
            >
          </EmployeeCard>
        </div>
    </div>
</template>

<script>
import UserService from '../../services/UserService'
import EmployeeCard from './cards/EmployeeCard.vue'

export default {
  name: 'employeesPage',
  components: {
    EmployeeCard
  },
  data() {
    return {
      empl: []
    }
  },
  computed: {
    showComponent () {
        return this.$store.getters.getCurrentMenuItem === "employeesPage"
    }
  },
  methods: {
    getEmployees() {
      UserService.getEmployees().then((response) => {
        this.empl = response.data
      })
    }
  },
  created() {
    this.getEmployees()
  }
}
</script>

<style scoped>
</style>