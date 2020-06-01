<template>
  <b-list-group>
    <b-list-group-item
      v-for="(item, index) in todoItems"
      :key="index"
      v-show="!item.deleted"
      class="todo-item"
    >
      <div class="title" :class="{'done': item.done}">{{item.title}}</div>
      <b-form-checkbox v-model="item.done" />
      <b-icon-x-circle class="delete" @click="deleteTodo(index)" />
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import store from '../store'

export default {
  name: 'TodoList',
  methods: {
    deleteTodo(index) {
      this.todoItems[index].deleted = true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    todoItems() {
      return store.getters['app/getTodoItems']
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
