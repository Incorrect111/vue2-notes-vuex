import { noteDefault, descriptionDefault, titleDefault } from '@/constants.js'

export default {

    state: {

        note: noteDefault.note,

        description: descriptionDefault.description,

        title: titleDefault.title,

        date: new Date(Date.now()).toLocaleString(),

        search: ''

    },

    mutations: {

        setNote(state, {...note }) {
            //Set Note
            state.note.priority = note.note.priority
            state.options = note.note.options

            // Set title
            state.title.nameOfNote = note.title.nameOfNote
            state.title.hidenTitle = note.title.hidenTitle
            state.title.titleShow = note.title.titleShow
            state.title.additionalTitleVar = note.title.additionalTitleVar

            //Set description
            state.description.descrContent = note.description.descrContent
            state.description.descrEditing = note.description.descrEditing
            state.description.hidenDescr = note.description.hidenDescr
            state.description.descrShow = note.description.descrShow
            state.description.additionalDescrVar = note.description.additionalDescrVar

            //Set Date
            state.date = note.date

        },

        resetNote(state) {
            state.title.nameOfNote = "",
                state.description.descrContent = "",
                state.note.priority = ""
        },


        setSearch(state, val) {
            state.search = val
        },



    },
    actions: {

        setNote({ commit }, {...note }) {
            commit('setNote', {...note })
        },

        resetNote({ commit }) {
            commit('resetNote')
        },

        //Editing
        editing({ commit }, note) {
            //Edit title
            if (note.editing === 'titleEditing') {
                note.note.title.titleShow = false
                note.note.title.hidenTitle = true
                note.note.title.additionalTitleVar = note.note.title.nameOfNote

                document.body.addEventListener("keyup", e => {
                    if (e.keyCode === 13) {
                        note.note.title.hidenTitle = false;
                        note.note.title.titleShow = true;
                        note.note.title.nameOfNote = note.note.title.additionalTitleVar;
                    } else if (e.keyCode === 27) {
                        note.note.title.hidenTitle = false;
                        note.note.title.titleShow = true;
                    }
                })

                //Edit description
            } else if (note.editing === 'descrEditing') {
                note.note.description.descrShow = false
                note.note.description.hidenDescr = true
                note.note.description.additionalDescrVar = note.note.description.descrContent

                document.body.addEventListener("keyup", e => {
                    if (e.keyCode === 13) {
                        note.note.description.hidenDescr = false;
                        note.note.description.descrShow = true;
                        note.note.description.descrContent = note.note.description.additionalDescrVar;
                    } else if (e.keyCode === 27) {
                        note.note.description.hidenDescr = false;
                        note.note.description.descrShow = true;
                    }
                })
            }
        },

        setSearch({ commit }, val) {
            commit('setSearch', val)
        },

    },


    getters: {
        getNote: state => state.note,

        getTitle: state => state.title,

        getDescription: state => state.description,

        getDate: state => state.date,

        getSearch: state => state.search
    }
}