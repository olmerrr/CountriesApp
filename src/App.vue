<script setup lang="ts">
import {RouterView} from 'vue-router';

import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
</script>

<template>
  <div class="app">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style lang="scss">
//vars
$bg-color: #080808;
$text-color: #f2f2f2;
$padding-top: 24px;
$padding-bottom: 24px;
$margin-bottom: 24px;
$font-weight-medium: 500;
$font-weight-bold: 700;
$font-size-l: 22px;

:root {
  --bg-color: #{$bg-color};
  --text-color: #{$text-color};
  --padding-top: #{$padding-top};
  --padding-bottom: #{$padding-bottom};
  --margin-bottom: #{$margin-bottom};
  --font-weight-medium: #{$font-weight-medium};
  --font-weight-bold: #{$font-weight-bold};
  --font-size-l: #{$font-size-l};
}

//vars

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
  @media screen and (max-width: 623px) {
    & {
      max-width: 300px;
    }
  }
}

.header {
  width: 100%;
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
  background-color: #080808a3;
  color: $text-color;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  @media screen and (max-width: 1023px) {
    & {
      display: none;
    }
  }
}

.description__title {
  font-size: 18px;
  font-weight: $font-weight-bold;
  margin-bottom: $margin-bottom
}

.description__paragraph:not(:last-child) {
  margin-bottom: $margin-bottom
}
</style>
