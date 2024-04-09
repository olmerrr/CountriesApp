<script setup lang="ts">
  import {useNavigationStore} from "../../stores/navigationStore";

  const navigationStore = useNavigationStore();
</script>


<template>
  <header class="header">
    <div class="container">
      <nav class="navigation">
        <router-link
            to="/"
            class="logo"
        >Search Countries</router-link>

        <ul class="nav-links">
          <li v-for="link in navigationStore.links" :key="link.text">
            <router-link :to="link.url">{{ link.text }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
}
.navigation {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.nav-links {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  gap: 20px;
}
.logo {
  font-size: 32px;
  font-weight: 300;
}
</style>