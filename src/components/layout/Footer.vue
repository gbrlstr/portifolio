<script setup lang="ts">
import { useI18n } from '@/composable/useI18n'

const { t } = useI18n()
</script>
<template>
    <footer class="w-full py-8 bg-white dark:bg-gray-950 border-t border-primary-gray-200 dark:border-gray-800 animate-fade-in-up">
        <div class="max-w-7xl mx-auto px-6">
            <p class="flex flex-wrap items-center justify-center gap-2 text-sm text-primary-gray-600 dark:text-gray-400">
                <span>© {{ new Date().getFullYear() }}</span>
                <span class="hidden sm:inline">•</span>
                <span>{{ t('footer.developed') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-red-500 animate-pulse-slow">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>{{ t('footer.by') }}</span>
                <a href="#hero" class="font-medium text-primary-gray-900 dark:text-gray-50 hover:text-primary-gray-600 dark:hover:text-gray-300 transition-all hover:scale-110 inline-block">
                    Gabriel Carlos
                </a>
            </p>
        </div>
    </footer>
</template>