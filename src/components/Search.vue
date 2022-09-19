<template>
  <section class="search-section">
  <div class="wrapper__search">
    <!-- Search -->
    <div class="search">
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </div>
    <!-- Search input -->
    <input
      class="search-input"
      type="text"
      placeholder="Find your note"
      v-model="search"
    />
  </div>
</section>
</template>

<script>
export default {
  computed: {
    search: {
      get: function() {
        return this.$store.getters.getSearch;
      },
      set: function(val) {
        this.$store.dispatch("setSearch", val);
      },
    },
  },
};
</script>

<style scoped>
svg {
  color: #e4e4e4;
}
/* Search */
.wrapper__search {
  position: relative;
  max-width: 600px;
  width: 100%;
}
.search {
  top: 0px;
  bottom: 0px;
  left: 0px;
  position: absolute;
}
.search-icon {
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  display: flex;
}
input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0px;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  min-width: 400px;
  height: auto;
}
.search-section {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
