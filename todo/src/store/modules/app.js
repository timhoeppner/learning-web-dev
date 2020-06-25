import axios from 'axios'

const apiBase = 'http://localhost:8081/api/todo'

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
        axios.get(apiBase)
          .then(response => {
            commit('setTodoItems', response.data)
            resolve()
          })
          .catch(error => {
            reject(new Error('Error accessing API: ' + error))
          })
      })
    },
    setTodoState: ({state, dispatch}, data) => {
      return new Promise((resolve, reject) => {
        axios.post(apiBase + '/state/' + data.id, {
          done: data.done
        })
          .then(response => {
            dispatch('getTodoItems').then(() => resolve())
          })
          .catch(error => {
            reject(new Error('Error accessing API: ' + error))
          })
      })
    },
    deleteTodo: ({state, dispatch, commit}, id) => {
      return new Promise((resolve, reject) => {
        axios.post(apiBase + '/delete/' + id)
          .then(response => {
            commit('setTodoItems', response.data.all)
            resolve()
          })
          .catch(error => {
            reject(new Error('Error accessing API: ' + error))
          })
      })
    },
    createTodo: ({state, dispatch}, title) => {
      return new Promise((resolve, reject) => {
        axios.post(apiBase + '/create', {
          'title': title,
        })
          .then(response => {
            dispatch('getTodoItems').then(() => resolve())
          })
          .catch(error => {
            reject(new Error('Error accessing API: ' + error))
          })
      })
    }
  },
  mutations: {
    setTodoItems: (state, todoItems) => {
      state.todoItems = todoItems
    }
  }
}
