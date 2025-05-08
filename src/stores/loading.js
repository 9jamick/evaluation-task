import { reactive } from 'vue'

const loadingState = reactive({
  isLoading: false,
})

const setLoading = (isLoading, message = '') => {
  loadingState.isLoading = isLoading
}

export const loadingStore = {
  loadingState,
  setLoading
}
