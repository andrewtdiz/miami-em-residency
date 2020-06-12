import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/about',
        name: 'About',
      },
      {
        path: '/',
        name: 'Clinical Sites',
      },
      {
        name: 'Education',
        list: [
          {
            path: '/',
            name: 'Clinical Curriculum',
          },
          {
            path: '/',
            name: 'Didactic Curriculum',
          },
          {
            path: '/',
            name: 'Simulation',
          },
          {
            path: '/',
            name: 'Toxicology',
          },
          {
            path: '/',
            name: 'EMS',
          },
          {
            path: '/',
            name: 'Ultrasound',
          },
          {
            path: '/',
            name: 'Fellowship',
          },
          {
            path: '/',
            name: 'Research',
          },
          {
            path: '/',
            name: 'Electives',
          }
        ],
      },
      {
        name: 'People',
        list: [
          {
            path: '/',
            name: 'Faculty',
          },
          {
            path: '/',
            name: 'Class of 2021',
          },
          {
            path: '/',
            name: 'Class of 2022',
          },
          {
            path: '/',
            name: 'Class of 2023',
          },
          {
            path: '/',
            name: 'Alumni',
          }
        ]
      }
    ],
  },
  getters: {
    getRoutes(state){
      return state.routes
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
