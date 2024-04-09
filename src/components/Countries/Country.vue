<template>
  <li class="country">
    <img
        :src="country.flag"
        alt="country.name"
        class="country__flag"
    />
    <div class="country__title">
      Name: {{ country.name }}
    </div>
    <div class="country__region">
      Region: {{ country.region }}
    </div>
    <div class="country__capital">
      Capital: {{ country.capital }}
    </div>
    <div class="country__area">
      Area: {{ country.area }}
    </div>
    <div class="country__population">
      Population: {{ country.population }}
    </div>
    <div
        class="country__timezones"
        v-for="(timezone, index) in country.timezones"
        key="index">
      Timezones: {{ timezone }}
    </div>

  </li>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps<{
  country: {}
}>();
</script>
<style scoped>
.country {
  padding: 16px;
  width: 230px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 49, 0.1);
}

.country__flag {
  height: 130px;
}
.country__title {
  font-size: 22px;
  font-weight: 700;
  margin: 16px 0 22px;
}
.country__region {
  font-weight: 300;
  font-size: 14px;
}
.country__capital {}
.country__area {}
.country__timezones {
  font-weight: 300;
}
</style>