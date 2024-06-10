<template>
    <div v-show="showComponent">
        ЗАДАЧИ
    </div>
</template>

<script>
export default {
  name: 'tasksPage',
  computed: {
    showComponent () {
        return this.$store.getters.getCurrentMenuItem === "tasksPage"
    }
  }
}
</script>