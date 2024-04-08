<template>
  <div class="home-page container">
    <h1>Welcome to the Search Countries App</h1>
    <Countries :countries="pagedCountries" />
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import useCountries from "../composables/useCountries";
import Countries from "../components/Countries.vue";

const { countries } = useCountries();

const itemsPerPage = 20;
const currentPage = ref(1);

const pagedCountries = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return countries.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(countries.value.length / itemsPerPage));

const nextPage = () => {
  currentPage.value++;
};

const prevPage = () => {
  currentPage.value--;
};
</script>

<style>
.pagination {
  margin-top: 20px;
}
</style>
