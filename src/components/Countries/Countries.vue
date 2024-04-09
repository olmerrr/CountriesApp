<template>
    <ul class="countries">
      <Country
          v-for="(country, index) in countries"
          :key="index"
          :country="country"
      />
    </ul>
</template>

<script setup lang="ts">
import Country from "./Country.vue";
import {ICountry} from "../../stores/countriesStore";

const props = defineProps<{
  countries:  ICountry[];
}>();
</script>

<style scoped>
.countries {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
@media screen and (max-width: 1023px) {
  .countries {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

@media screen and (max-width: 623px) {
  .countries {
    grid-template-columns: 1fr;
  }
}

</style>