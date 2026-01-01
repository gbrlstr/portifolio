<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from '@/composable/useI18n'
import { useTheme } from '@/composable/useTheme'

const { t, currentLanguage, setLanguage } = useI18n()
const { currentTheme, toggleTheme, initTheme } = useTheme()

const isScrolledToTop = ref(true)
const showLanguageMenu = ref(false)

onMounted(() => {
    isScrolledToTop.value = true;
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    initTheme();
    updateThemeIcons();
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', handleClickOutside);
})

const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-menu-container')) {
        showLanguageMenu.value = false;
    }
}

const handleScroll = () => {
    isScrolledToTop.value = window.scrollY === 0;
}

const updateThemeIcons = () => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    if (currentTheme.value === 'dark') {
        themeToggleLightIcon?.classList.remove('hidden');
        themeToggleDarkIcon?.classList.add('hidden');
    } else {
        themeToggleDarkIcon?.classList.remove('hidden');
        themeToggleLightIcon?.classList.add('hidden');
    }
}

const handleThemeToggle = () => {
    toggleTheme();
    setTimeout(updateThemeIcons, 50);
}

const handleLanguageChange = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    showLanguageMenu.value = false;
}

const currentLanguageFlag = computed(() => {
    return currentLanguage.value === 'pt' 
        ? '🇧🇷' 
        : '🇺🇸';
})

const currentLanguageText = computed(() => {
    return currentLanguage.value === 'pt' 
        ? 'PT' 
        : 'EN';
})

</script>

<template>
  <header :class="{'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm': !isScrolledToTop, 'bg-white dark:bg-gray-950': isScrolledToTop}" 
          class="sticky top-0 z-50 w-full border-b border-primary-gray-200/50 dark:border-gray-800 transition-all duration-300 animate-fade-in-down">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
  <a href="#hero" class="flex items-center space-x-2 rtl:space-x-reverse group animate-fade-in">
      <span class="text-xl md:text-2xl font-bold tracking-tight text-primary-gray-900 dark:text-gray-50 transition-all duration-300 group-hover:text-primary-gray-600 dark:group-hover:text-gray-300 group-hover:scale-110">&lt;GC /&gt;</span>
  </a>
  <div class="hidden w-full md:block md:w-auto" id="navbar-language">
    <div class="flex items-center gap-8">

        <ul class="flex items-center gap-6 font-medium">
            <li class="animate-fade-in-up" style="animation-delay: 0.1s">
                <a v-scroll="100" href="#hero" class="text-sm text-primary-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-primary-gray-900 dark:hover:text-gray-50 relative group">
                  <span class="relative z-10">{{ t('nav.home') }}</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gray-900 dark:bg-gray-50 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li class="animate-fade-in-up" style="animation-delay: 0.2s">
                <a v-scroll="100" href="#skills" class="text-sm text-primary-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-primary-gray-900 dark:hover:text-gray-50 relative group">
                  <span class="relative z-10">{{ t('nav.skills') }}</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gray-900 dark:bg-gray-50 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li class="animate-fade-in-up" style="animation-delay: 0.3s">
                <a v-scroll="100" href="#projects" class="text-sm text-primary-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-primary-gray-900 dark:hover:text-gray-50 relative group">
                  <span class="relative z-10">{{ t('nav.projects') }}</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gray-900 dark:bg-gray-50 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li class="animate-fade-in-up" style="animation-delay: 0.4s">
                <a v-scroll="100" href="#contacts" class="text-sm text-primary-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-primary-gray-900 dark:hover:text-gray-50 relative group">
                  <span class="relative z-10">{{ t('nav.contact') }}</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gray-900 dark:bg-gray-50 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
        </ul>

        <div class="h-6 w-px bg-primary-gray-200 dark:bg-gray-800 animate-fade-in"></div>

        <div class="flex items-center gap-3">
            <!-- Language Selector -->
            <div class="relative language-menu-container">
                <button 
                    @click.stop="showLanguageMenu = !showLanguageMenu"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-gray-100 dark:hover:bg-gray-800 transition-all duration-200 animate-scale-in hover:scale-105"
                    style="animation-delay: 0.5s">
                    <span class="text-lg">{{ currentLanguageFlag }}</span>
                    <span class="text-sm font-medium text-primary-gray-700 dark:text-gray-300">{{ currentLanguageText }}</span>
                    <svg class="w-4 h-4 text-primary-gray-500 dark:text-gray-400 transition-transform duration-200" :class="{'rotate-180': showLanguageMenu}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                <Transition name="fade">
                    <div v-if="showLanguageMenu" 
                         @click.stop
                         class="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-primary-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up z-50">
                        <button 
                            @click="handleLanguageChange('pt')"
                            :class="{'bg-primary-gray-100 dark:bg-gray-700': currentLanguage === 'pt'}"
                            class="w-full flex items-center gap-2 px-4 py-2 text-sm text-primary-gray-700 dark:text-gray-300 hover:bg-primary-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <span>🇧🇷</span>
                            <span>Português</span>
                        </button>
                        <button 
                            @click="handleLanguageChange('en')"
                            :class="{'bg-primary-gray-100 dark:bg-gray-700': currentLanguage === 'en'}"
                            class="w-full flex items-center gap-2 px-4 py-2 text-sm text-primary-gray-700 dark:text-gray-300 hover:bg-primary-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <span>🇺🇸</span>
                            <span>English</span>
                        </button>
                    </div>
                </Transition>
            </div>

            <div class="h-6 w-px bg-primary-gray-200 dark:bg-gray-800"></div>

            <!-- Theme Toggle -->
            <button 
                @click="handleThemeToggle"
                id="theme-toggle" 
                class="relative flex justify-center items-center hover:bg-primary-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 transition-all duration-200 hover:scale-110 animate-scale-in"
                style="animation-delay: 0.6s">
                <svg id="theme-toggle-light-icon" 
                     class="w-5 h-5 text-primary-gray-700 dark:text-gray-300 transition-all duration-300" 
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                <svg id="theme-toggle-dark-icon" 
                     class="w-5 h-5 text-primary-gray-700 dark:text-gray-300 transition-all duration-300" 
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    <path d="M19 3v4"></path>
                    <path d="M21 5h-4"></path>
                </svg>
            </button>
        </div>
        

    </div>

  </div>
  </div>
</header>
</template>

<style>
</style>
