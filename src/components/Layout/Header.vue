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
            class="navigation__logo"
        >Search Countries</router-link>

        <ul class="nav-links">
          <li v-for="link in navigationStore.links" :key="link.text">
            <router-link
                class="link"
                :to="link.url">{{ link.text }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navigation {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.navigation__logo {
  color: inherit;
  letter-spacing: 1px;
  font-size: 32px;
  font-weight: 500;
}
.nav-links {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  color: inherit;
  gap: 20px;
}
.link {
  padding: 10px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.link:hover {
  cursor: pointer;
  background-color: rgba(89, 88, 88, 0.38);
  border-radius: 2px;
}
</style>