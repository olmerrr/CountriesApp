import { defineStore } from 'pinia';

interface Link {
  text: string;
  url: string;
}

interface NavigationState {
  links: Link[];
}

export const useNavigationStore = defineStore({
  id: 'navigation',
  state: (): NavigationState => ({
    links: [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about' },
      { text: 'Contact', url: '/contact' },
    ],
  }),
});
