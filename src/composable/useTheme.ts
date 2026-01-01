import { ref, watch } from 'vue';

type Theme = 'light' | 'dark';

const currentTheme = ref<Theme>('light');

export function useTheme() {
  const initTheme = () => {
    // Aplicar imediatamente antes do mount para evitar flash
    const savedTheme = localStorage.getItem('color-theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      currentTheme.value = savedTheme;
    } else {
      currentTheme.value = prefersDark ? 'dark' : 'light';
    }
    
    applyTheme(currentTheme.value);
  };

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('color-theme', theme);
  };

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme.value);
  };

  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme);
  });

  // Inicializar imediatamente
  if (typeof window !== 'undefined') {
    initTheme();
  }

  return {
    currentTheme,
    toggleTheme,
    initTheme
  };
}
