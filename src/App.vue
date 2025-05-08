<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject, watch } from 'vue'
import LoadingOverlay from './components/LoadingOverlay.vue'
import { useRoute } from 'vue-router'

const { setLoading } = inject('loadingStore')
const route = useRoute()

watch(
  () => route.path,
  () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }
)
</script>

<template>
  <LoadingOverlay />

  <header class="header">
    <div class="header-content">
      <div class="logo">
        <RouterLink to="/" class="logo-link">
          <span class="logo-icon">🎬</span>
          <span class="logo-text">MovieLib</span>
        </RouterLink>
      </div>
      <nav class="nav">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ 'nav-link--active': $route.name === 'home' }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/favorites"
          class="nav-link"
          :class="{ 'nav-link--active': $route.name === 'favorites' }"
        >
          Favorites
        </RouterLink>
      </nav>
    </div>
  </header>

  <main class="main">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #ccc;
  color: #ffffff;
}

.header {
  background-color: #333;
  padding: 1.25rem 0;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header-content {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  .logo-icon {
    margin-right: 0.5rem;
    font-size: 1.8rem;
  }

  .logo-text {
    background: linear-gradient(45deg, #4CAF50, #45a049);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
  font-size: 1.1rem;

  &:hover {
    background-color: #444;
  }

  &--active {
    background-color: #4CAF50;

    &:hover {
      background-color: #45a049;
    }
  }
}

.main {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
