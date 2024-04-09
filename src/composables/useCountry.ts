import { ref, onMounted } from 'vue';
import axios from 'axios';
import {BASE_API} from "./api";

export default function useCountry(countryName: string) {
  const country = ref<any>(null);
  const isLoading = ref<boolean>(true);

  const fetchCountry = async () => {
    try {
      const response = await axios.get(`${BASE_API}/name/${countryName}`);
      return response.data[0];
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      return null;
    }
  };

  onMounted(async () => {
    const data = await fetchCountry();
    country.value = data;
    isLoading.value = false;
  });

  return {
    country,
    isLoading
  };
}
