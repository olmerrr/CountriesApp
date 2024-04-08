// src/store/countries.ts
import { defineStore } from 'pinia';

interface ICountry {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital: string;
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population?: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  nativeName?: string;
  numericCode?: string;
  flags?: Record<string, unknown>; // Предположим, что это объект, содержащий информацию о флагах страны
  currencies?: Record<string, unknown>[]; // Предположим, что это массив объектов, содержащих информацию о валютах страны
  languages?: Record<string, unknown>[]; // Предположим, что это массив объектов, содержащих информацию о языках страны
  translations?: Record<string, string>; // Предположим, что это объект, содержащий информацию о переводах названия страны
  flag?: string; // URL-адрес флага страны
  regionalBlocs?: Record<string, unknown>[]; // Предположим, что это массив объектов, содержащих информацию о региональных блоках страны
  independent?: boolean;
}

interface CountriesState {
  countries: ICountry[];
}

export const useCountriesStore = defineStore({
  id: 'countries',
  state: (): CountriesState => ({
    countries: []
  }),
  actions: {
    setCountries(countries: ICountry[]) {
      this.countries = countries;
    }
  }
});
