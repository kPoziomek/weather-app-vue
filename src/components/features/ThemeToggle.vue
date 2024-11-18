<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    :class="[
      'px-4 py-2 rounded-md transition-colors',
      isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
    ]"
  >
    Theme: {{ isDark ? 'Dark' : 'Light' }}
  </button>
</template>
