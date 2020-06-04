export default {
  namespaced: true,
  state: {
    nextId: 3,
    'todoItems': []
  },
  getters: {
    todoItems: (state) => {
      return state.todoItems.filter(item => !item.deleted)
    }
  },
  actions: {
    getTodoItems: ({commit}) => {
      return new Promise((resolve, reject) => {
        commit('setTodoItems', [
          {
            id: 1,
            title: 'todo1',
            done: false,
            deleted: false,
          },
          {
            id: 2,
            title: 'todo2',
            done: false,
            deleted: false,
          }
        ])

        //reject(new Error('API failed'))

        setTimeout(() => {
          console.log('got my data')
          resolve()
        }, 1000)
      })
    }
  },
  mutations: {
    setTodoItems: (state, todoItems) => {
      state.todoItems = todoItems
    },
    createTodo: (state, title) => {
      state.todoItems.push({
        id: state.nextId++,
        title: title,
        done: false,
        deleted: false,
      })
    },
    deleteTodo: (state, id) => {
      var index = state.todoItems.findIndex(item => item.id === id)

      if (index !== -1) {
        state.todoItems[index].deleted = true
      }
    }
  }
}
