<template>
<div class="wrapper-content">
  <section>
    <div class="container">
      <section>
        <div class="new-note">
          <newNote />
        </div>
      </section>
     <notes />
    </div>
  </section>
</div>
</template>

<script>

import notes from '@/components/Notes.vue'
import newNote from '@/components/NewNote.vue'

export default {
  components: {
    notes,
    newNote
  },
  data() {
    return {
    
    }
  },
  state: {
      grid: true
  },
  mutations: {},
  actions: {},
  getters: {
    getGrid(){
      return grid
    }
  },

  created() {
    
  }
};
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color:rgb(134, 117, 228)
  }
}
</style>
