<template>
  <div v-if="movie" class="movie-detail">
    <div class="movie-content">
      <div class="movie-poster">
        <img :src="movie.posterImage" :alt="movie.title" class="poster-image">
      </div>
      
      <div class="movie-info">
        <div class="movie-header">
          <h1 class="movie-title">{{ movie.title }}</h1>
          <div class="movie-rating">
            <span class="rating-value">{{ movie.rating }}</span>
            <span class="rating-max">/10</span>
          </div>
        </div>

        <div class="movie-meta">
          <div class="meta-item">
            <span class="meta-label">Genre:</span>
            <span class="meta-value">{{ movie.genre }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Release Date:</span>
            <span class="meta-value">{{ new Date(movie.releaseDate).toLocaleDateString() }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Runtime:</span>
            <span class="meta-value">{{ movie.runtime }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Director:</span>
            <span class="meta-value">{{ movie.director }}</span>
          </div>
        </div>

        <div class="movie-cast">
          <h3 class="section-title">Cast</h3>
          <div class="cast-list">
            <span v-for="actor in movie.cast" :key="actor" class="cast-member">
              {{ actor }}
            </span>
          </div>
        </div>

        <div class="movie-financials">
          <div class="financial-item">
            <span class="financial-label">Budget:</span>
            <span class="financial-value">{{ movie.budget }}</span>
          </div>
          <div class="financial-item">
            <span class="financial-label">Box Office:</span>
            <span class="financial-value">{{ movie.boxOffice }}</span>
          </div>
        </div>

        <div class="movie-description">
          <h3 class="section-title">Plot</h3>
          <p class="description-text">{{ movie.description }}</p>
        </div>

        <button 
          @click="toggleFavorite" 
          class="favorite-button"
          :class="{ 'favorite-button--active': favoritesStore.isFavorite(movie.id) }"
        >
          {{ favoritesStore.isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
        </button>
      </div>
    </div>
  </div>
  <div v-else class="movie-not-found">
    Movie not found
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { movies } from '../data/movies'

const route = useRoute()
const favoritesStore = inject('favoritesStore')

const movie = computed(() => {
  return movies.find(m => m.id === parseInt(route.params.id))
})

const toggleFavorite = () => {
  if (movie.value) {
    if (favoritesStore.isFavorite(movie.value.id)) {
      favoritesStore.removeFromFavorites(movie.value.id)
    } else {
      favoritesStore.addToFavorites(movie.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-detail {
  padding: 2rem;
  max-width: 80rem;
  margin: 0 auto;
}

.movie-content {
  background-color: #2a2a2a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
}

.movie-poster {
  .poster-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.movie-info {
  padding: 2rem;
  color: #ffffff;
}

.movie-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.movie-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

.movie-rating {
  background-color: #4CAF50;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: bold;

  .rating-value {
    font-size: 1.5rem;
  }

  .rating-max {
    font-size: 1rem;
    opacity: 0.8;
  }
}

.movie-meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.meta-item {
  display: flex;
  gap: 0.5rem;
}

.meta-label {
  color: #888;
  font-weight: 500;
}

.meta-value {
  color: #ffffff;
}

.section-title {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 1rem;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
}

.movie-cast {
  margin-bottom: 2rem;
}

.cast-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cast-member {
  background-color: #3a3a3a;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}

.movie-financials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #3a3a3a;
  border-radius: 0.5rem;
}

.financial-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.financial-label {
  color: #888;
  font-size: 0.9rem;
}

.financial-value {
  color: #ffffff;
  font-weight: 500;
}

.movie-description {
  margin-bottom: 2rem;
}

.description-text {
  line-height: 1.6;
  color: #cccccc;
}

.favorite-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }

  &--active {
    background-color: #f44336;

    &:hover {
      background-color: #d32f2f;
    }
  }
}

.movie-not-found {
  text-align: center;
  padding: 2rem;
  color: #ffffff;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .movie-content {
    grid-template-columns: 1fr;
  }

  .movie-poster {
    max-height: 400px;
  }

  .movie-meta,
  .movie-financials {
    grid-template-columns: 1fr;
  }
}
</style> 