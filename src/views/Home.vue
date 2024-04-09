<template>
  <div class="home-page page container">
    <h1 class="page-title">Welcome to the Search Countries App</h1>
    <Countries :countries="pagedCountries" />
    <div class="pagination" v-if="countries.length > 0">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import useCountries from "../composables/useCountries";
import Countries from "../components/Countries/Countries.vue";

const { countries }: { countries: Countries } = useCountries();
const router = useRouter();

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
  scrollToTop();
};

const prevPage = () => {
  currentPage.value--;
  scrollToTop();
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
</script>

<style>
.pagination {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
</style>
