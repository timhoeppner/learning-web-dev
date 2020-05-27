<template>
  <b-container>
    <b-list-group>
      <b-list-group-item
        v-for="(item, index) in todoItems"
        :key="index"
        v-show="!item.deleted"
        class="todo-item"
      >
        <div class="title" :class="{'done': item.done}">{{item.title}}</div>
        <b-form-checkbox v-model="item.done" />
        <b-icon-x-circle @click="deleteTodo(index)" />
      </b-list-group-item>
    </b-list-group>

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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    createTodo() {
      this.todoItems.push({
        title: this.newTodo,
        done: false,
        deleted: false,
      })

      this.newTodo = ''
    },
    deleteTodo(index) {
      this.todoItems[index].deleted = true
    }
  },
  data () {
    return {
      'newTodo': '',
      'todoItems': [
        {
          title: 'todo1',
          done: false,
          deleted: false,
        },
        {
          title: 'todo2',
          done: false,
          deleted: false,
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .list-group-item.todo-item {
    display: flex;
    align-items: center;

    .title {
      flex-grow: 1;
      text-align: left;

      &.done {
        text-decoration: line-through;
      }
    }
  }
</style>
