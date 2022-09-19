<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">{{ title }}</router-link>
        <ul class="navbar-list">
          <li v-for="link in links" :key="link.title" class="navbar-item">
            <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { app, links } from "../../_config";
export default {
  data() {
    return {
      title: app.title,
      links,
    };
  },
};
</script>
