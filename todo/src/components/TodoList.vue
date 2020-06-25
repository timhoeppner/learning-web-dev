<template>
  <b-list-group>
    <transition-group name="todo-list">
      <b-list-group-item
        v-for="item in $store.getters['app/todoItems']"
        :key="item.id"
        class="todo-item"
      >
        <div class="title" :class="{'done': item.done}">{{item.title}}</div>
        <b-form-checkbox :checked="item.done" @change="$store.dispatch('app/setTodoState', {id: item.id, done: !item.done})" />
        <b-icon-x-circle class="delete" @click="$store.dispatch('app/deleteTodo', item.id)" />
      </b-list-group-item>
    </transition-group>
  </b-list-group>
</template>

<script>
import store from '../store'

export default {
  name: 'TodoList'
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

  .todo-list-enter-active, .todo-list-leave-active {
    transition: all 1s;
  }

  .todo-list-enter, .todo-list-leave-to {
    opacity: 0;
    transform: translateX(500px);
  }
</style>
