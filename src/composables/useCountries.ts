import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCountriesStore } from "../stores/countriesStore";
import {BASE_API} from "./api";

export default function useCountries() {
  const countriesStore = useCountriesStore();
  const countries = ref<any[]>([]);
  const isLoading = ref<boolean>(true);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(`${BASE_API}/all`);
      return response.data;
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      return [];
    }
  };

  onMounted(async () => {
    const data = await fetchCountries();
    countries.value = data;
    countriesStore.setCountries(data);
    isLoading.value = false;
  });

  return {
    countries,
    isLoading
  };
}
