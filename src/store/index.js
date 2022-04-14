import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        tasks: [{
          id: 1,
          title: 'Zmywanie',
          kategoria: 'Praca',
          done: true,
          deleted: false
          },
          {
          id: 2,
          title: 'Pranie',
          kategoria: 'Praca',
          done: false,
          deleted: false
          },{
          id: 3,
          title: 'Uczenie sie',
          kategoria: 'Nauka',
          done: true,
          deleted: false
          },
          {
          id: 4,
          title: 'Lezenie',
          kategoria: 'Odpoczywanie',
          done: false,
          deleted: false
          }
        ]
  },
  getters: {
    wypiszPraca: (state) => {
      return state.tasks.filter((task) => {
          return task.kategoria === 'Praca'
        })
    },
    wypiszNauka: (state) => {
      return state.tasks.filter((task) => {
          return task.kategoria === 'Nauka'
        })
    },
    wypiszOdpoczywanie: (state) => {
      return state.tasks.filter((task) => {
          return task.kategoria === 'Odpoczywanie'
        })
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
