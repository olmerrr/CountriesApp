<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <header class="footer__header">
        <span>
        Created by Yaroslav Dombrovskiy
      </span>
        <span>{{ currentYear }}</span>
      </header>
    </div>
  </footer>
</template>

<style scoped>
.footer__header {
  display: flex;
  justify-content: space-between;
}
</style>