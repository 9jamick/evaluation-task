<template>
  <div class="favorites">
    <h1 class="favorites-title">My Favorite Movies</h1>

    <div v-if="favorites.length" class="movie-grid">
      <MovieCard
        v-for="movie in favorites"
        :key="movie.id"
        :movie="movie"
        @click="goToMovie"
      />
    </div>

    <div v-else class="empty-state">
      No favorite movies yet. Start adding some!
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import MovieCard from '../components/MovieCard.vue'

const router = useRouter()
const favoritesStore = inject('favoritesStore')

const favorites = computed(() => favoritesStore.favorites)

const goToMovie = (id) => {
  router.push(`/movie/${id}`)
}
</script>

<style lang="scss" scoped>
.favorites {
  .favorites-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 2rem;
  }
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
