<script setup lang="ts">
import { useGithub } from '@/composable/useGithub';
import { defineProps, onMounted } from 'vue';

const { project } = defineProps(["project"]);
const { getProjectLanguages } = useGithub();

onMounted(async () => {
    try {
        const response = await getProjectLanguages(project.name);
        project.tags = Object.keys(response);
    } catch (error) {
        console.error(error);
    }
});

const getTagValue = (tag: string) => {
  const tagMap: any = {
    'C#': 'c%23',
    'C++': 'C++',
    'Objective-C': 'OBJECTIVE--C',
    'C': 'C'
  };
  
  return tagMap[tag] || tag;
};

</script>

<template>
<div class="group flex flex-col h-full bg-white dark:bg-gray-800 border border-primary-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-primary-gray-300 dark:hover:border-gray-600 hover:scale-105 hover:-translate-y-2">
    <div class="flex-1 p-6">
        <a :href="project.html_url" target="_blank" class="block">
            <h5 class="mb-3 text-xl font-bold tracking-tight text-primary-gray-900 dark:text-gray-50 group-hover:text-primary-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {{ project.name }}
            </h5>
        </a>
        <p class="mb-4 text-sm text-primary-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
            {{ project.description || 'Sem descrição disponível.' }}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags?.slice(0, 4)" :key="tag" 
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary-gray-100 dark:bg-gray-700 text-primary-gray-700 dark:text-gray-300">
                {{ tag }}
            </span>
            <span v-if="project.tags && project.tags.length > 4" 
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary-gray-100 dark:bg-gray-700 text-primary-gray-700 dark:text-gray-300">
                +{{ project.tags.length - 4 }}
            </span>
        </div>
    </div>
    <div class="p-6 pt-0 border-t border-primary-gray-100 dark:border-gray-700">
        <a :href="project.html_url" target="_blank" 
            class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-primary-gray-900 dark:text-gray-50 bg-primary-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group/link hover:scale-105">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
            <span>Ver no GitHub</span>
            <svg class="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
</div>

</template>
