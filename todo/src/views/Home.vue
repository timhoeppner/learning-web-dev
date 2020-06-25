<template>
  <b-container>
    <todo-list />

    <form @submit.prevent="createTodo">
      <b-form-input
        placeholder="Enter a new todo item..."
        v-model="newTodo"
      ></b-form-input>
    </form>

    <div class="future">
      <h3>Future ideas</h3>
      <ul>
        <li>History of delete tasks</li>
        <li>Have an edit button that needs to be clicked before you can delete tasks</li>
      </ul>
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
  beforeRouteEnter (to, from, next) {
    store.dispatch('app/getTodoItems')
      .then(() => next())
      .catch(err => console.log(err))
  },
  data () {
    return {
      'newTodo': '',
    }
  },
  methods: {
    createTodo() {
      store.dispatch('app/createTodo', this.newTodo)
      this.newTodo = ''
    },
  }
}
</script>

<style lang="scss">
  .future {
    margin-top: 100px;
    text-align: left;
  }
</style>
