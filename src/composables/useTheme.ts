import { ref, watch } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, (newValue) => {
    document.documentElement.classList.toggle('dark', newValue)
  })

  return {
    isDark,
    toggleTheme
  }
}
