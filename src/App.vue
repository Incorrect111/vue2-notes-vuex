<template>
<div class="wrapper-content">
  <section>
    <div class="container">
     <notes />
    </div>
  </section>
</div>
</template>

<script>

import notes from '@/components/Notes.vue'

export default {
  components: {
    notes
  },
  data() {
    return {

    }
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
