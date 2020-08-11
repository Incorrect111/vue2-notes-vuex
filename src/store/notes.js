export default {
    state: {
        notes: [{
                title: "First note",

                description: "Description for first note",

                date: new Date(Date.now()).toLocaleString(),

                priority: "",

                highPriority: false,

                mediumPriority: false,

                lowPriority: false
            },
            {
                title: "Second note",

                description: "Description for Second note",

                date: new Date(Date.now()).toLocaleString(),

                priority: "",

                highPriority: false,

                mediumPriority: false,

                lowPriority: false
            },
            {
                title: "Third note",

                description: "Description for Third note",

                date: new Date(Date.now()).toLocaleString(),

                priority: "",

                highPriority: false,

                mediumPriority: false,

                lowPriority: false
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getNoteList(state) {
            return state.notes
        }

    },
}