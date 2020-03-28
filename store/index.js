import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    persons: []
  },
  mutations: {
    getUser({state}, result) {
      this.state.persons = result
    },
    getMoreUser({state}, result) {
      this.state.persons = this.state.persons.concat(result)
    },
    clearAll (state) {
      state.persons = []
    },
    goToNextPage ({state}, result) {
      this.state.persons = result
    },
  },
  actions: {
    getUser({commit}, {quantity, filter}) {
      if(filter === 'all'){
        return axios.get(`https://randomuser.me/api/?results=${quantity}`)
          .then(response => commit('getUser', response.data.results))
          .then(error => {
            if (error) {
              alert(error)
            }
          })
      }else{
        return axios.get(`https://randomuser.me/api/?gender=${filter}&results=${quantity}`)
          .then(response => commit('getUser', response.data.results))
          .then(error => {
            if (error) {
              alert(error)
            }
          })
      }
    },
    getMoreUser({commit}, {quantity, filter}) {
      if(filter === 'all'){
        return axios.get(`https://randomuser.me/api/?results=${quantity}`)
          .then(response => commit('getMoreUser', response.data.results))
          .then(error => {
            if (error) {
              alert(error)
            }
          })
      }else{
        return axios.get(`https://randomuser.me/api/?gender=${filter}&results=${quantity}`)
          .then(response => commit('getMoreUser', response.data.results))
          .then(error => {
            if (error) {
              alert(error)
            }
          })
      }
    },
    goToNextPage ({commit}, {quantity, filter, page}) {
      return axios.get(`https://randomuser.me/api/?gender=${filter}&results=${quantity}&page=${page}`)
        .then(response => commit('goToNextPage', response.data.results))
        .then(error => {
          if (error) {
            alert(error)
          }
        })
    },
    clearAll ({commit}) {
      commit('clearAll')
    }
  },
  getters: {
    getAllUsers (state) {
      return state.persons
    }
  }
})

export default store
