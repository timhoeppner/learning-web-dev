export default {
  namespaced: true,
  state: {
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
  },
  getters: {
    getTodoItems: (state) => {
      return state.todoItems
    }
  },
  actions: {
  },
  mutations: {
    createTodo: (state, title) => {
      state.todoItems.push({
        title: title,
        done: false,
        deleted: false,
      })
    }
  }
}
