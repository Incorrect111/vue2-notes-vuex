export const noteDefault = {
    note: {
        priority: "Low",
        options: [
            { id: 1, value: 'Low' },
            { id: 2, value: 'Medium' },
            { id: 3, value: 'High' }
        ]
    }
};

export const descriptionDefault = {
    description: {
        descrContent: "",
        descrEditing: "",
        hidenDescr: false,
        descrShow: true,
        additionalDescrVar: ''
    }
};

export const titleDefault = {
    title: {
        nameOfNote: "",
        hidenTitle: false,
        titleShow: true,
        titleEditing: false,
        additionalTitleVar: ""
    }
};

export const notesDefault = {
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
}