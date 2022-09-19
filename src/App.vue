<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <section>
        <div class="container">
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import notes from "@/components/Notes.vue";
import newNote from "@/components/NewNote.vue";
import search from "@/components/Search.vue";
import Header from "@/components/System/Header.vue";

export default {
  components: {
    notes,
    newNote,
    search,
    Header,
  },
};
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: rgb(134, 117, 228);
  }
}
.search-section {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
