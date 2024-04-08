import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCountriesStore } from "../countriesStore";

export default function useCountries() {
  const countriesStore = useCountriesStore();
  const countries = ref<any[]>([]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      return response.data;
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      return [];
    }
  };

  onMounted(async () => {
    const data = await fetchCountries();
    countries.value = data;
    countriesStore.setCountries(data); // Записываем данные в хранилище
  });

  return {
    countries
  };
}
