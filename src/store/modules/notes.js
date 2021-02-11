export default {
    state: {
        notesLoaded: [],
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
            // {
            //     priority: "Low",

            //     description: {

            //         descrContent: "Description for second note",
            //         descrEditing: 'descrEditing',
            //         hidenDescr: false,
            //         descrShow: true,
            //     },
            //     title: {
            //         nameOfNote: "Second note",
            //         date: new Date(Date.now()).toLocaleString(),
            //         hidenTitle: false,
            //         titleShow: true,
            //         additionalTitleVar: "",
            //     },
            //     date: new Date(Date.now()).toLocaleString()
            // },
            // {
            //     priority: "Low",

            //     description: {

            //         descrContent: "Description for third note",
            //         descrEditing: 'descrEditing',
            //         hidenDescr: false,
            //         descrShow: true,
            //     },
            //     title: {
            //         nameOfNote: "Second note",
            //         date: new Date(Date.now()).toLocaleString(),
            //         hidenTitle: false,
            //         titleShow: true,
            //         additionalTitleVar: "",
            //     },
            //     date: new Date(Date.now()).toLocaleString()
            // },
        ],
        note: null
    },

    computed: {
        getNotess() {
            this.$store.dispatch('getNotes')
        }
    },

    mutations: {

        addNote(state, {...payload }) {
            console.log('payload from addNote mutation: ', {...payload.title }, {...payload.note }, {...payload.description })
                // this.note = payload
                // console.log(payload.title.nameOfNote)

            state.notes.push({
                title: {...payload.title },
                note: {...payload.note },
                description: {...payload.description },
                date: payload.date
            })
            console.log(state.notes)


            // payload.description.descrContent = "",
            // payload.priority = undefined

        },
        setNote(state, note) {
            state.note = note
        },
        removeNote(state, payload) {
            state.notes.splice(payload, 1)
        },
        // setNotesLoaded(state) {
        //     state.notes = state.notesLoaded
        // }



    },
    actions: {
        pushNewNote({ commit }, payload) {
            commit('pushNewNote', payload)
        },
        removeNote({ commit }, payload) {
            commit('removeNote', payload)
        },
        addNote({ commit }, {...payload }) {
            console.log('payload from addNoteAction: ', {...payload })
            commit('addNote', {...payload })
        },
        setNote({ commit }, note) {
            commit('setNote', note)
        },

        setNotesLoaded({ commit }) {
            commit('setNotesLoaded')
        },

    },
    getters: {
        getNotes(state) {
            return state.notes
        },

        getNotesLoaded(state) {
            return state.notesLoaded
        }

    },
}