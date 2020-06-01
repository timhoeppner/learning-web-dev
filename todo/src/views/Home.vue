<template>
  <b-container>
    <todo-list />

    <form @submit.prevent="createTodo">
      <b-form-input
        placeholder="Enter a new todo item..."
        v-model="newTodo"
      ></b-form-input>
    </form>

    <div>
      HISTORY TODO
      <p>Have an edit button that needs to be clicked before
      you can delete tasks</p>
    </div>
  </b-container>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import store from '../store'

export default {
  name: 'home',
  components: {
    TodoList
  },
  data () {
    return {
      'newTodo': '',
    }
  },
  methods: {
    createTodo() {
      store.commit('app/createTodo', this.newTodo)
      this.newTodo = ''
    },
  }
}
</script>

<style lang="scss">
</style>
