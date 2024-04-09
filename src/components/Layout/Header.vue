<template>
  <header class="header">
    <div class="container">
      <nav class="navigation">
        <router-link
            to="/"
            class="navigation__logo"
        >Search Countries</router-link>

        <span class="burger-menu" v-if="isMobile" @click="toggleMenu">
          <span class="burger-menu__line"></span>
          <span class="burger-menu__line"></span>
          <span class="burger-menu__line"></span>
        </span>

        <ul class="nav-links" :class="{ 'show-menu': isMenuOpen }">
          <li v-for="link in navigationStore.links" :key="link.text">
            <router-link
                class="link"
                :to="link.url">{{ link.text }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNavigationStore } from "../../stores/navigationStore";

const navigationStore = useNavigationStore();
const isMobile = ref(false);
const isMenuOpen = ref(false);

onMounted(() => {
  const screenWidth = window.innerWidth;
  isMobile.value = screenWidth < 1023;

  window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    isMobile.value = screenWidth < 1023;
  });
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.navigation__logo {
  color: inherit;
  letter-spacing: 1px;
  font-size: 32px;
  font-weight: 500;
  @media screen and (max-width: 623px) {
    & {
      font-size: 22px;
    }
  }
}

.nav-links {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  color: inherit;
  gap: 20px;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: relative;
  bottom: 16px;
  &__line {
    width: 100%;
    height: 3px;
    background-color: #f2f2f2;
  }
}

@media screen and (max-width: 1023px) {
  .burger-menu {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: var(--bg-color);
  }

  .show-menu {
    display: flex;
  }
}
</style>
