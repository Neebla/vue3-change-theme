<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from './stores/theme'
import Child from './components/Child.vue'
import { storeToRefs } from 'pinia'

const store = useThemeStore()
const { theme, themeConfig } = storeToRefs(store)
const change = (theme: string) => {
  store.changeTheme(theme)
}
change(theme.value)
</script>
<template>
  <div class="theme-block">
    <div
      class="light"
      v-bind:class="{ active: theme == 'light' }"
      @click="change('light')"
    >
      Light
    </div>
    <span>|</span>
    <div
      class="dark"
      :class="{ active: theme == 'dark' }"
      @click="change('dark')"
    >
      Dark
    </div>
  </div>
  <div class="demo-wrapper">
    Demo
  </div>
  <Child />
</template>

<style lang="scss">
.theme-block {
  display: flex;
  align-items: center;
  background: var(--background);
  border-radius: 1em;
  width: fit-content;

  & > div {
    margin: 0.5em;
    cursor: pointer;
    color: #e9ccd3;
  }
  .active {
    color: var(--color);
  }
}
.demo-wrapper {
  margin-top: 24px;
  padding: 12px;
  background: var(--background);
  // color: var(--color);
  color: v-bind('themeConfig.color');
}
</style>
