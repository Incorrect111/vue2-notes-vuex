export default {
    state: {
        notes: [{
                note: {
                    priority: "Low",
                    options: [
                        { id: 1, value: 'Low' },
                        { id: 2, value: 'Medium' },
                        { id: 3, value: 'High' }
                    ]
                },

                description: {
                    descrContent: "Description for first note",
                    descrEditing: 'descrEditing',
                    hidenDescr: false,
                    descrShow: true,
                },
                title: {
                    nameOfNote: "First note",
                    hidenTitle: false,
                    titleShow: true,
                    additionalTitleVar: "",
                },
                date: new Date(Date.now()).toLocaleString()
            },
            {
                note: {
                    priority: "Low",
                    options: [
                        { id: 1, value: 'Low' },
                        { id: 2, value: 'Medium' },
                        { id: 3, value: 'High' }
                    ]
                },

                description: {
                    descrContent: "Description for second note",
                    descrEditing: 'descrEditing',
                    hidenDescr: false,
                    descrShow: true,
                },
                title: {
                    nameOfNote: "Second note",
                    hidenTitle: false,
                    titleShow: true,
                    additionalTitleVar: "",
                },
                date: new Date(Date.now()).toLocaleString()
            },
            {
                note: {
                    priority: "Low",
                    options: [
                        { id: 1, value: 'Low' },
                        { id: 2, value: 'Medium' },
                        { id: 3, value: 'High' }
                    ]
                },

                description: {
                    descrContent: "Description for Third note",
                    descrEditing: 'descrEditing',
                    hidenDescr: false,
                    descrShow: true,
                },
                title: {
                    nameOfNote: "Third note",
                    hidenTitle: false,
                    titleShow: true,
                    additionalTitleVar: "",
                },
                date: new Date(Date.now()).toLocaleString()
            },
        ],

        grid: true

    },

    mutations: {

        addNote(state, {...payload }) {
            state.notes.push({
                title: {...payload.title },
                note: {...payload.note },
                description: {...payload.description },
                date: payload.date
            })
        },
        setNotes(state, notes) {
            state.notes = notes
        },
        removeNote(state, payload) {
            state.notes.splice(payload, 1)
        },
        changeGrid(state, payload) {
            state.grid = payload
        }



    },

    actions: {
        addNote({ commit }, {...payload }) {
            commit('addNote', {...payload })
        },
        setNotes({ commit }, notes) {
            commit('setNotes', notes)
        },
        removeNote({ commit }, payload) {
            commit('removeNote', payload)
        },
        changeGrid({ commit }, payload) {
            commit('changeGrid', payload)
        },

    },
    getters: {
        getNotes(state) {
            return state.notes
        },
        getGrid(state) {
            console.log(state.grid)
            return state.grid
        }

    },
}