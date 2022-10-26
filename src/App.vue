<script setup lang="ts">
import { ref } from 'vue'

const currentTheme = ref(localStorage.getItem('theme') || 'light')
const changeTheme = (theme: string) => {
  localStorage.setItem('theme', theme)
  currentTheme.value = theme
  window.document.documentElement.setAttribute('data-theme', theme) // key
}
changeTheme(currentTheme.value)
</script>
<template>
  <div class="theme-block">
    <div
      class="light"
      v-bind:class="{ active: currentTheme == 'light' }"
      @click="changeTheme('light')"
    >
      Light
    </div>
    <span>|</span>
    <div
      class="dark"
      :class="{ active: currentTheme == 'dark' }"
      @click="changeTheme('dark')"
    >
      Dark
    </div>
  </div>
  <div class="demo-wrapper">
    Demo
  </div>
</template>

<style lang="scss" scoped>

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
  color: var(--color);

}
</style>
