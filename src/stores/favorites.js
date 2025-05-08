import { reactive, watch } from 'vue'

const favorites = reactive([])

const loadFavorites = () => {
  const storedFavorites = localStorage.getItem('favorites')
  if (storedFavorites) {
    favorites.push(...JSON.parse(storedFavorites))
  }
}

watch(favorites, (newFavorites) => {
  localStorage.setItem('favorites', JSON.stringify(newFavorites))
}, { deep: true })

const addToFavorites = (movie) => {
  if (!favorites.find(fav => fav.id === movie.id)) {
    favorites.push(movie)
  }
}

const removeFromFavorites = (movieId) => {
  const index = favorites.findIndex(movie => movie.id === movieId)
  if (index !== -1) {
    favorites.splice(index, 1)
  }
}

const isFavorite = (movieId) => {
  return favorites.some(movie => movie.id === movieId)
}

// Load favorites when the store is created
loadFavorites()

export const favoritesStore = {
  favorites,
  addToFavorites,
  removeFromFavorites,
  isFavorite
} 