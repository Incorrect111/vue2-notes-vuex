<template>
  <div class="new-note">
    <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="addNote">
      <label>Title</label>
      <input v-model="title.nameOfNote" type="text" />
      <label>Description</label>
      <textarea v-model="description.descrContent"></textarea>
      <br />
      <br />
      <button class="btn btnPrimary">New note</button>
    </form>
  </div>

    <div class="select">
      <select v-model="note.priority">
        <option
          v-for="option in note.options"
          v-bind:value="option.value"
          :key="option.id"
          >{{ option.value }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {},
      title: {},
      description: {},
      date: new Date(Date.now()).toLocaleString(),
    };
  },

  created() {
    this.note = this.$store.getters.getNote;
    this.title = this.$store.getters.getTitle;
    this.description = this.$store.getters.getDescription;
    this.date = this.$store.getters.getDate;
  },
  methods: {
    addNote() {
      if (this.title.nameOfNote === "") return false;

      let note = this.note;
      let title = this.title;
      let description = this.description;

      //Set note
      this.$store.dispatch("setNote", {
        note,
        title,
        description,
        date: new Date(Date.now()).toLocaleString(),
      });

      //Add note
      this.$store
        .dispatch("addNote", {
          note: this.$store.getters.getNote,
          description: this.$store.getters.getDescription,
          title: this.$store.getters.getTitle,
          date: this.$store.getters.getDate,
        })
        //Reset
        .then(() => {
          this.note.priority = "Low";
          this.title.nameOfNote = "";
          this.description.descrContent = " ";
        });
    },
  },
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
}
input {
  max-width: 1000px;
}
textarea {
  max-width: 1000px;
}
.select {
  margin-top: 25px;
  margin-bottom: -10px;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
