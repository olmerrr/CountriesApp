<template>
  <div class="selected-country-page page container">
    <Loader v-if="isLoading"/>

    <div v-else-if="country">
      <h1 class="page-title">{{ country ? country.name : 'Loading...' }}</h1>
      <img
          :src="country.flag"
          alt="country.name"
          class="selected-country__flag"
      />

      <section class="selected-country__description">
        <div class="selected-country__info">
          Region: {{ country.region }}
        </div>
        <div class="selected-country__info">
          Sub Region: {{ country.subregion }}
        </div>
        <div class="selected-country__info">
          Capital: {{ country.capital }}
        </div>
        <div class="selected-country__info">
          Area: {{ country.area }}
        </div>
        <div class="selected-country__info">
          Population: {{ country.population }}
        </div>
        <div
            class="selected-country__info"
            v-for="(timezone, index) in country.timezones"
            key="index">
          Timezones: {{ timezone }}
        </div>
        <div class="selected-country__info" v-for="block in country.regionalBlocs" key="block">
          Regional Blocs: {{ block.name }}
        </div>
        <div class="selected-country__info">
          Native Name: {{ country.nativeName }}
        </div>
        <div
            class="selected-country__info"
            v-for="item in country.currencies"
            key="item">
          Currencies: {{ item.name }}
        </div>
        <div
            class="selected-country__info"
            v-for="code in country.callingCodes"
            key="code">
        Calling Codes: {{ code }}
    </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import useCountry from '../composables/useCountry';
import Loader from "../components/Layout/Loader.vue";

const route = useRoute();
const countryName = route.params.name;
const {country, isLoading} = useCountry(countryName);
</script>

<style lang="scss" scoped>
.selected-country__description {
  margin: 20px 0;
}

.selected-country__info {
  margin-bottom: 20px;
}
</style>