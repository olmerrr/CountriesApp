<template>
  <div>
    <h2>Countries Page</h2>
    <ul class="countries">
      <Country
          v-for="country in countries"
          :key="country" :country="country"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import Country from "./Country.vue";
const props = defineProps<{
  countries:  [];
}>();
</script>

<style scoped>
.countries {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
</style>