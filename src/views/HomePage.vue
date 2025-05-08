<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { movies } from '../data/movies'
import MovieCard from '../components/MovieCard.vue'

const router = useRouter()
const searchQuery = ref('')

const filteredMovies = computed(() => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const goToMovie = (id) => {
  router.push(`/movie/${id}`)
}
</script>

<template>
  <div class="home">
    <div class="search">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search movies..."
        class="search-input"
      >
    </div>
    <div class="movie-grid">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
        @click="goToMovie"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  .home-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 2rem;
  }

  .search {
    margin-bottom: 2rem;

    .search-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 0.25rem;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #4CAF50;
      }
    }
  }
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}
</style>
