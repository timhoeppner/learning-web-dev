<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(item, index) in todoItems"
        :key="index"
        v-if="!item.done"
      >
        <b-form-checkbox
          v-model="item.done"
        >
          {{item.title}}
        </b-form-checkbox>
      </b-list-group-item>
    </b-list-group>

    <form @submit.prevent="createTodo">
      <b-form-input
        placeholder="Enter a new todo item..."
        v-model="newTodo"
      ></b-form-input>
    </form>
  </div>
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
        done: false
      })

      this.newTodo = ''
    }
  },
  data () {
    return {
      'newTodo': '',
      'todoItems': [
        {
          title: 'todo1',
          done: false,
        },
        {
          title: 'todo2',
          done: false,
        }
      ]
    }
  }
}
</script>
