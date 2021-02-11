export default {
    state: {

        note: {
            priority: "",
            options: [
                { id: 1, value: 'Low' },
                { id: 2, value: 'Medium' },
                { id: 3, value: 'High' }
            ]
        },
        // Description
        description: {
            descrContent: "",
            descrEditing: "",
            hidenDescr: false,
            descrShow: true,
            additionalDescrVar: ''
        },
        // Title
        title: {
            nameOfNote: "",
            hidenTitle: false,
            titleShow: true,
            titleEditing: false,
            additionalTitleVar: "",
        },
        date: new Date(Date.now()).toLocaleString()
    },
    mutations: {
        resetNote(state) {
            state.title.nameOfNote = "",
                state.description.descrContent = "",
                state.note.priority = ""
                // state.note.highPriority = false,
                // state.note.mediumPriority = false,
                // state.note.lowPriority = false
        },

        setNote(state, {...payload }) {
            //Set Note
            state.note.priority = payload.note.priority
            state.options = payload.note.options

            // Set title
            state.title.nameOfNote = payload.title.nameOfNote
            state.title.hidenTitle = payload.title.hidenTitle
            state.title.titleShow = payload.title.titleShow
            state.title.additionalTitleVar = payload.title.additionalTitleVar

            //Set description
            state.description.descrContent = payload.description.descrContent
            state.description.descrEditing = payload.description.descrEditing
            state.description.hidenDescr = payload.description.hidenDescr
            state.description.descrShow = payload.description.descrShow
            state.description.additionalDescrVar = payload.description.additionalDescrVar

            //Set Date
            state.date = payload.date

        },
        changeMessage(state, payload) {
            state.note.message = payload
        },

        setDescription(state, payload) {
            state.description = payload.description
            console.log(state.description)
        }

    },
    actions: {

        setNote({ commit }, {...payload }) {
            commit('setNote', {...payload })
        },

        resetNote({ commit }) {
            commit('resetNote')
        },
        changeMessage({ commit }, payload) {
            commit('changeMessage', payload)
        },

        editingDescr({ commit }, payload) {
            commit('editingDescr', payload)
        },

        //Editing
        editing({ commit }, payload) {
            //Edit title
            if (payload.editing === 'titleEditing') {
                payload.note.title.titleShow = false
                payload.note.title.hidenTitle = true
                payload.note.title.additionalTitleVar = payload.note.title.nameOfNote

                document.body.addEventListener("keyup", e => {
                    if (e.keyCode === 13) {
                        payload.note.title.hidenTitle = false;
                        payload.note.title.titleShow = true;
                        payload.note.title.nameOfNote = payload.note.title.additionalTitleVar;
                    } else if (e.keyCode === 27) {
                        payload.note.title.hidenTitle = false;
                        payload.note.title.titleShow = true;
                    }
                })

                //Edit description
            } else if (payload.editing === 'descrEditing') {
                payload.note.description.descrShow = false
                payload.note.description.hidenDescr = true
                payload.note.description.additionalDescrVar = payload.note.description.descrContent

                document.body.addEventListener("keyup", e => {
                    if (e.keyCode === 13) {
                        payload.note.description.hidenDescr = false;
                        payload.note.description.descrShow = true;
                        payload.note.description.descrContent = payload.note.description.additionalDescrVar;
                    } else if (e.keyCode === 27) {
                        payload.note.description.hidenDescr = false;
                        payload.note.description.descrShow = true;
                    }
                })
            }
        },

        setDescription({ commit }, payload) {
            commit('setDescription', payload)
        },
    },



    getters: {
        getNote(state) {
            return state.note
        },

        getNewNoteMessage(state) {
            return state.note.message
        },
        getDescription(state) {
            return state.description
        },
        getTitle(state) {
            return state.title
        },
        getDate(state) {
            return state.date
        },
        getHidenDescr(state) {
            return state.note.description.hidenDescr
        },
        getNameOfNote(state) {
            return state.note.title.nameOfNote
        }
    }
}