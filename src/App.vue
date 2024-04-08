<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="app">
    <Header/>
    <RouterView />
    <Footer/>
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 30px);
}
.container {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
}
ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {

  text-decoration: none;
}
</style>
