<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.movie.id)
}
</script>

<template>
  <div class="movie-card" @click="handleClick">
    <img :src="movie.posterImage" :alt="movie.title" class="movie-poster">
    <div class="movie-info">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <p class="movie-genre">{{ movie.genre }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-card {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  .movie-poster {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .movie-info {
    padding: 1rem;

    .movie-title {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .movie-genre {
      color: #666;
      font-size: 0.9rem;
    }
  }
}
</style> 