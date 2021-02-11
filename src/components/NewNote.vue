<template>
  <div class="new-note">
      <label>Title</label>
    <input v-model="title.nameOfNote" type="text"/>
    <label>Description</label>
    <textarea v-model="description.descrContent"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>

    <!-- <p> {{ note.title.nameOfNote }} </p> -->

    <div class="select">
     <select v-model="note.priority">
              <option
              v-for="(option) in note.options"
              v-bind:value="option.value"
              :key="option.id"
               >{{ option.value }}</option>
              <!-- <option>{{ this.note.options[index] }}</option> -->
            </select>
            <!-- <span>{{ note.options.value }}</span> -->

            </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
     note: {
          priority: "Low",
          options: [
                { id: 1, value: 'Low' },
                { id: 2, value: 'Medium' },
                { id: 3, value: 'High' }
                   ]
      },
        description: {
         descrContent: "",
         descrEditing: "",
         hidenDescr: false,
         descrShow: true,
       },
        title: {
        nameOfNote: "",
        hidenTitle: false,
        titleShow: true,
        titleEditing: false,
        additionalTitleVar: "",
              },
         }
  },


   methods: {
     addNote() {
        if (this.title.nameOfNote === "") return false

        let note = this.note
        let title = this.title
        let description = this.description

        //Set note
        this.$store.dispatch('setNote',
         {
         note,
         title,
         description,
          date: new Date(Date.now()).toLocaleString()
         });

//Add note
       this.$store.dispatch('addNote', {
         note : this.$store.getters.getNote,
         description: this.$store.getters.getDescription,
         title: this.$store.getters.getTitle,
         date: this.$store.getters.getDate
         });

//Reset
       this.resetNote()
     },

    resetNote() {
      this.note.priority ='Low'
      this.title.nameOfNote = ''
      this.description.descrContent = ' '
    }

   }
}

</script>

<style lang="scss">
.new-note   {
    text-align: center;

}
.select {
    margin-top: 25px;
    margin-bottom: -10px;
}
</style>