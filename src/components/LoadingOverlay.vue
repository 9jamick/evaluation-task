<template>
  <Transition name="fade">
    <div v-if="loadingState.isLoading" class="loading-overlay">
      <div class="loading-content">
        <div class="spinner"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { inject } from 'vue'

const { loadingState } = inject('loadingStore')
</script>

<style lang="scss" scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4CAF50;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-message {
  color: #333;
  margin: 0;
  font-size: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
