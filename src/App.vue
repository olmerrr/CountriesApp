<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';

</script>

<template>
  <div class="app">
    <Header/>
    <RouterView />
    <Footer/>
  </div>
</template>

<style lang="scss">
//vars
$bg-color: #080808;
$text-color: #f2f2f2;
$padding-top: 16px;
$padding-bottom: 16px;
$font-weight-medium: 500;
$font-weight-bold: 700;
$font-size-l: 22px;

.app {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
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
  color: inherit;
  text-decoration: none;
}
.header {
  padding: 8px 0 10px;
  line-height: 40px;
  background-color: $bg-color;
  color: $text-color;
}
.page {
  padding-top: $padding-top;
  padding-bottom: $padding-bottom;
}
.page-title {
  font-size: $font-size-l;
  font-weight: $font-weight-bold;
  padding-bottom: $padding-bottom;
}
.footer {
  line-height: 60px;
  background-color: $bg-color;
  color: $text-color;
  margin-top: auto;
}
</style>
