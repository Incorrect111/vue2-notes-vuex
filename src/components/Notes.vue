<template>
  <div class="notes">
 <div
      class="note"
      :class="[note.note.priority, {full: !grid}]"
      v-for="(note, index) in notes"
      :key="index"
    >

  <!-- header -->


      <div class="note-header">
        <p
          style="cursor: pointer"
          v-show="note.title.titleShow"
          @click="editing(index, 'titleEditing')"
        >{{ note.title.nameOfNote }}</p>
        <br />
        <br />
        <input v-model="note.title.additionalTitleVar" v-show="note.title.hidenTitle" />
        <p style="cursor: pointer" @click="removeNote(index)">x</p>
      </div>

<!-- body -->

        <div class="note-body">
        <p
          style="cursor: pointer"
          v-show="note.description.descrShow"
          @click="editing(index, 'descrEditing')"
        >{{ note.description.descrContent }}</p>
        <input v-model="note.description.additionalDescrVar" v-show="note.description.hidenDescr" />
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>
<script>



export default {

  components: {

  },
  data() {
    return {
      notes: [],
      grid: false,
    };
  },

  props: {
  },

  created() {
    this.notes = this.$store.getters.getNotes
    this.grid = this.$store.getters.getGrid
    console.log(this.notes)
  },
  computed: {
    notess() {
      return this.notes = this.$store.getters.getNotes
    }
  },
  methods: {
    // Remove note
    removeNote(index) {
      this.$store.dispatch('removeNote', index)
    },

    editingDescr(index) {
      this.$store.dispatch('editingDescr',{ note: this.notes[index]} )
    },
    //Editing
    editing(index, editngParam) {
      // this.notes[index].title.titleShow = false
      this.$store.dispatch
      ('editing',
      {note: this.notes[index],
       editing: editngParam})
    }
  }
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;

  &.full {
    width: 100%;
  }
  &.High {
    border: solid;
    border-color: rgb(255, 0, 0);
  }

  &.Medium {
    border: solid;
    border-color: rgb(235, 231, 12);
  }
  &.Low {
    border: solid;
    border-color: rgb(138, 124, 124);
  }
}

.note-body {
  p {
    margin: 20px 0px;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
.note-header {
  display: flex;
  text-align: center;
  justify-content: space-between;

  p {
    font-size: 22px;
    color: rgb(45, 30, 255);
  }
}

svg {
  margin-right: 12px;
  color: #999999;
  &.active {
    color: blue;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style> -->