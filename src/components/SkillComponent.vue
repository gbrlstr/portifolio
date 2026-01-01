<script setup lang="ts">
import { defineProps } from 'vue';
import { ISkill } from '@/types/index';

const { skill } = defineProps<{ skill: ISkill }>();
const getImageUrl = (name:string) => {
    return new URL(`../assets/icons/${name}`, import.meta.url).href
}
</script>

<template>
    <div class="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:-translate-y-2">
        <a target="_blank" :href="skill.url" class="flex items-center justify-center w-16 h-16 rounded-lg bg-white dark:bg-gray-800 border border-primary-gray-200 dark:border-gray-700 group-hover:border-primary-gray-300 dark:group-hover:border-gray-600 transition-all group-hover:shadow-lg group-hover:rotate-3">
            <img :alt="skill.skill_text" loading="lazy" width="40" height="40" decoding="async"
                class="transition-transform duration-300 group-hover:scale-125"
                :src="getImageUrl(skill.img_src)" style="color: transparent;">
        </a>
        <p class="text-sm font-medium text-primary-gray-700 dark:text-gray-300 text-center group-hover:font-semibold transition-all">{{ skill.skill_text }}</p>
    </div>
</template>

<style scoped></style>
