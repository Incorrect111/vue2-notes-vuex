import { notesDefault } from '@/constants.js'
export default {

    state: {
        notes: notesDefault.notes,
        grid: true
    },

    mutations: {

        addNote(state, {...note }) {
            state.notes.push({
                title: {...note.title },
                note: {...note.note },
                description: {...note.description },
                date: note.date
            })
        },
        setNotes(state, notes) {
            state.notes = notes
        },
        removeNote(state, note) {
            state.notes.splice(note, 1)
        },
        changeGrid(state, boolean) {
            state.grid = boolean
        }



    },

    actions: {
        addNote({ commit }, {...note }) {
            commit('addNote', {...note })
        },
        setNotes({ commit }, notes) {
            commit('setNotes', notes)
        },
        removeNote({ commit }, note) {
            commit('removeNote', note)
        },
        changeGrid({ commit }, boolean) {
            commit('changeGrid', boolean)
        },

    },
    getters: {
        getNotes: state => state.notes,

        getGrid: state => state.grid
    },
}