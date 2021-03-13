<template>
<div class="container">
  <div class="icons">
    <svg :class="{ active: this.$store.getters.getGrid }" @click="changeGrid(true)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    <svg :class="{ active: !this.$store.getters.getGrid }" @click="changeGrid(false)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
  </div>

  <div class="notes">
 <div
      class="note"
      :class="[note.note.priority, { full: !grid }]"
      v-for="(note, index) in notesFiltered"
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
  </div>
</template>
<script>



export default {
  data() {
    return {
      notes: []
    };
  },

  created() {
    this.notes = this.$store.getters.getNotes
    this.grid = this.$store.getters.getGrid
  },
  computed: {
       notesFiltered () {
            let array = this.$store.getters.getNotes,
                search = this.$store.getters.getSearch
                //Small
            search = search.trim().toLowerCase()
            this.$store.dispatch('setSearch', search)
                //Filter
            array = array.filter(function (item) {
                if (item.title.nameOfNote.toLowerCase().indexOf(search) !== -1) {
                    return  item
                }
            })
                //Error
                return this.notes = array

                 if (!search) return array
        },

        grid: {
          get: function() {
              return this.$store.getters.getGrid
          },

          set: function() {
          }
        },
  },
  methods: {
    // Remove note
    removeNote(index) {
      this.$store.dispatch('removeNote', index)
    },

    //Editing
    editing(index, editingParam) {
      this.$store.dispatch ('editing',
      {
        note: this.notes[index],
        editing: editingParam
       })
    },
    changeGrid(boolean) {
      this.$store.dispatch('changeGrid', boolean)
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