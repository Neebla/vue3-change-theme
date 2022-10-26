import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { themes } from '@/constants/theme';

export const useThemeStore = defineStore('theme', () => {
	const theme = ref<string>(localStorage.getItem('theme') || 'light');
	const themeConfig = computed(() => themes[theme.value]);
	const changeTheme = (t: string) => {
		theme.value = t;
		window.document.documentElement.setAttribute('data-theme', theme.value); // key
		localStorage.setItem('theme', theme.value);
	};

	return { theme, themeConfig, changeTheme };
});
