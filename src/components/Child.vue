<template>
  <div class="children-wrapper border-1-solid">
    This is child
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const store = useThemeStore()
const { themeConfig } = storeToRefs(store)
</script>

<style scoped lang="scss">
.children-wrapper {
  margin-top: 24px;
  padding: 12px;
  background: var(--background);
  // color: var(--color);
  color: v-bind('themeConfig.color');
}
</style>
