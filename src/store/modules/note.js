export default {
    state: {
        note: {
            priority: "Low",
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
        date: new Date(Date.now()).toLocaleString(),

        search: ''


    },

    mutations: {

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

        resetNote(state) {
            state.title.nameOfNote = "",
                state.description.descrContent = "",
                state.note.priority = ""
        },


        setSearch(state, val) {
            state.search = val
            console.log('from setSearch Mutaition: ', state.search)
        },



    },
    actions: {

        setNote({ commit }, {...payload }) {
            commit('setNote', {...payload })
        },

        resetNote({ commit }) {
            commit('resetNote')
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

        setSearch({ commit }, val) {
            commit('setSearch', val)
        },

    },


    getters: {
        getNote(state) {
            return state.note
        },
        getTitle(state) {
            return state.title
        },
        getDescription(state) {
            return state.description
        },
        getDate(state) {
            return state.date
        },

        getSearch(state) {
            return state.search
        }
    }
}