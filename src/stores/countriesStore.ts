import { defineStore } from 'pinia';

export interface ICountry {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital: string;
  altSpellings?: string[];
  subregion?: string;
  region: string;
  population: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  nativeName?: string;
  numericCode?: string;
  flags?: Record<string, unknown>;
  currencies?: Record<string, unknown>[];
  languages?: Record<string, unknown>[];
  translations?: Record<string, string>;
  flag?: string;
  regionalBlocs?: Record<string, unknown>[];
  independent?: boolean;
}

export interface ICountriesState {
  countries: ICountry[];
}

export const useCountriesStore = defineStore({
  id: 'countries',
  state: (): ICountriesState => ({
    countries: []
  }),
  actions: {
    setCountries(countries: ICountry[]) {
      this.countries = countries;
    }
  }
});
