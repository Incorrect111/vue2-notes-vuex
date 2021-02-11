import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import note from './modules/note'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        note,
        notes,
    },
    mutations: {

    }

})