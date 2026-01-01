<script setup lang="ts">
import { ref, onMounted } from "vue";
import profileImage from '@/assets/perfil.jpg'
import SkillComponent from '@/components/SkillComponent.vue';
import { ISkill } from '@/types/index';
import { useGithub } from '@/composable/useGithub';
import ProjectCard from '@/components/ProjectCard.vue';
import { useI18n } from '@/composable/useI18n';
import ProjectCardV2 from "../ProjectCardV2.vue";

const { getProjects } = useGithub();
const { t } = useI18n();

const skillsInfo = ref<ISkill[]>([
    {
        url: "https://temporal.com",
        img_src: "temporal.png",
        skill_text: "Temporal"
    },
    {
        url: "https://vuejs.org/",
        img_src: "vue.svg",
        skill_text: "Vue.js"
    },
    {
        url: "https://nestjs.com/",
        img_src: "icon-nest.svg",
        skill_text: "Nest.js"
    },
    {
        url: "https://www.docker.com",
        img_src: "docker-svgrepo-com.svg",
        skill_text: "Docker"
    },
    {
        url: "https://cloud.google.com/bigquery",
        img_src: "bigquery-svgrepo-com.svg",
        skill_text: "Big Query"
    },
    {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        img_src: "icon-javascript.svg",
        skill_text: "Javascript"
    },
    {
        url: "https://www.typescriptlang.org/",
        img_src: "icon-typescript.svg",
        skill_text: "Typescript"
    },
    {
        url: "https://go.dev/doc/",
        img_src: "go-fuchsia-svgrepo-com.svg",
        skill_text: "GO"
    },
    {
        url: "https://nodejs.org/en",
        img_src: "icon-nodejs.svg",
        skill_text: "Node.js"
    },
    //   {
    //     url: "https://expressjs.com/",
    //     img_src: "icon-express-light.svg",
    //     skill_text: "Express.js"
    //   },
    {
        url: "https://socket.io/",
        img_src: "icon-socket-light.svg",
        skill_text: "Socket.io"
    },
    //   {
    //     url: "https://www.postgresql.org/",
    //     img_src: "icon-postgresql.svg",
    //     skill_text: "PostgreSQL"
    //   },
    {
        url: "https://www.mongodb.com/",
        img_src: "icon-mongodb.svg",
        skill_text: "MongoDB"
    },
    {
        url: "https://dev.mysql.com/doc/",
        img_src: "mysql-logo-svgrepo-com.svg",
        skill_text: "Mysql"
    },
    {
        url: "#",
        img_src: "msql-server-svgrepo-com.svg",
        skill_text: "SQL Server"
    },

    {
        url: "https://sass-lang.com/",
        img_src: "icon-sass.svg",
        skill_text: "Sass/Scss"
    },
    {
        url: "https://tailwindcss.com/",
        img_src: "icon-tailwindcss.svg",
        skill_text: "Tailwindcss"
    },
    //   {
    //     url: "https://www.figma.com/",
    //     img_src: "icon-figma.svg",
    //     skill_text: "Figma"
    //   },
    //   {
    //     url: "https://www.cypress.io/",
    //     img_src: "icon-cypress-light.svg",
    //     skill_text: "Cypress"
    //   },
    {
        url: "https://storybook.js.org/",
        img_src: "icon-storybook.svg",
        skill_text: "Storybook"
    },

    {
        url: "https://git-scm.com/",
        img_src: "icon-git.svg",
        skill_text: "Git"
    },
    {
        url: "https://laravel.com/",
        img_src: "laravel-svgrepo-com.svg",
        skill_text: "Laravel"
    },
    {
        url: "#",
        img_src: "php02-svgrepo-com.svg",
        skill_text: "PHP"
    },
    {
        url: "#",
        img_src: "csharp-svgrepo-com.svg",
        skill_text: "Csharp"
    }
]);

const projects: any = ref([])
onMounted(async () => {
    const gitHubProjects = await getProjects();
    if (gitHubProjects) {
        // gitHubProjects.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        gitHubProjects.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
        projects.value = gitHubProjects;
    }
})


</script>

<template>
    <main class="flex min-h-screen w-full flex-col overflow-hidden">

        <!-- SECTION HERO -->
        <section class="w-full bg-white dark:bg-gray-950 py-20 md:py-28 2xl:py-32 overflow-hidden" id="hero">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:gap-16 md:px-8">
                <div class="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

                    <div class="flex items-center justify-center lg:order-last lg:flex-shrink-0 animate-fade-in-left">
                        <div class="relative h-[280px] w-[240px] md:h-[360px] md:w-[300px] group">
                            <div class="absolute inset-0 bg-gradient-to-br from-primary-gray-200 to-primary-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 animate-float"></div>
                            <img
                                alt="Profile" loading="lazy" width="300" height="360" decoding="async"
                                class="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
                                :src="profileImage">
                        </div>
                    </div>

                    <div class="flex max-w-2xl flex-grow flex-col justify-center gap-8 lg:order-first lg:items-start lg:justify-center animate-fade-in-right">
                        <div class="flex flex-col gap-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-gray-100 dark:bg-gray-800 w-fit animate-scale-in hover:scale-105 transition-transform duration-200">
                                <span class="relative flex h-2 w-2">
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                <span class="text-xs font-medium text-primary-gray-700 dark:text-gray-300">{{ t('hero.available') }}</span>
                            </div>
                            <h1 class="text-4xl font-bold md:text-5xl md:tracking-tight lg:text-6xl lg:leading-tight text-primary-gray-900 dark:text-gray-50 animate-fade-in-up">
                                {{ t('hero.greeting') }} <span class="inline-block animate-waving-hand">👋</span>
                            </h1>
                            <p class="text-base md:text-lg text-primary-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
                                {{ t('hero.description') }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-3 animate-fade-in-up" style="animation-delay: 0.3s">
                            <div class="flex items-center gap-3 text-sm text-primary-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="animate-pulse-slow">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>{{ t('hero.location') }}</span>
                            </div>
                        </div>
                        <div class="flex gap-3 animate-fade-in-up" style="animation-delay: 0.4s">
                            <a href="https://github.com/gbrlstr" target="_blank"
                                class="relative flex justify-center items-center text-primary-gray-700 dark:text-gray-300 hover:text-primary-gray-900 dark:hover:text-gray-50 hover:bg-primary-gray-100 dark:hover:bg-gray-800 rounded-lg p-2.5 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                            <a href="https://x.com/gbrl_str" target="_blank"
                                class="relative flex justify-center items-center text-primary-gray-700 dark:text-gray-300 hover:text-primary-gray-900 dark:hover:text-gray-50 hover:bg-primary-gray-100 dark:hover:bg-gray-800 rounded-lg p-2.5 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                            <a href="https://br.linkedin.com/in/gabriel-carlos" target="_blank"
                                class="relative flex justify-center items-center text-primary-gray-700 dark:text-gray-300 hover:text-primary-gray-900 dark:hover:text-gray-50 hover:bg-primary-gray-100 dark:hover:bg-gray-800 rounded-lg p-2.5 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                                <svg class="w-5 h-5" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    stroke="currentColor">
                                    <rect width="132" height="132" x="30" y="30" stroke="currentColor" stroke-width="12"
                                        rx="16" />
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="12" d="M66 86v44" />
                                    <circle cx="66" cy="64" r="8" fill="currentColor" />
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="12"
                                        d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION SKILLS -->
        <section class="w-full bg-primary-gray-50 dark:bg-gray-900 py-20 md:py-28 2xl:py-32 overflow-hidden" id="skills">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:gap-16 md:px-8">
                <div class="flex flex-col items-center gap-4 text-center animate-fade-in-up">
                    <div class="inline-flex items-center justify-center rounded-full bg-primary-gray-200 dark:bg-gray-800 px-4 py-1.5 animate-scale-in">
                        <p class="text-sm font-medium text-primary-gray-800 dark:text-gray-200">{{ t('skills.title') }}</p>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-gray-900 dark:text-gray-50 animate-fade-in-up" style="animation-delay: 0.1s">
                        {{ t('skills.subtitle') }}
                    </h2>
                    <p class="text-base md:text-lg max-w-2xl text-primary-gray-600 dark:text-gray-400 animate-fade-in-up" style="animation-delay: 0.2s">
                        {{ t('skills.description') }}
                    </p>
                </div>

                <div class="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                    <div v-for="(skill, index) in skillsInfo" :key="index" 
                         class="animate-fade-in-up"
                         :style="`animation-delay: ${(Number(index) % 8) * 0.1}s`">
                        <SkillComponent :skill="skill" />
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION PROJECTS -->
        <section class="w-full bg-white dark:bg-gray-950 py-20 md:py-28 2xl:py-32 overflow-hidden" id="projects">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:gap-16 md:px-8">
                <div class="flex flex-col items-center gap-4 text-center animate-fade-in-up">
                    <div class="inline-flex items-center justify-center rounded-full bg-primary-gray-200 dark:bg-gray-800 px-4 py-1.5 animate-scale-in">
                        <p class="text-sm font-medium text-primary-gray-800 dark:text-gray-200">{{ t('projects.title') }}</p>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-gray-900 dark:text-gray-50 animate-fade-in-up" style="animation-delay: 0.1s">
                        {{ t('projects.subtitle') }}
                    </h2>
                    <p class="text-base md:text-lg max-w-2xl text-primary-gray-600 dark:text-gray-400 animate-fade-in-up" style="animation-delay: 0.2s">
                        {{ t('projects.description') }}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="(project, index) in projects.slice(0,6)" :key="project.id" 
                         class="animate-fade-in-up"
                         :style="`animation-delay: ${Number(index) * 0.1}s`">
                        <ProjectCard :project="project" class="flex-1" />
                        <!-- <ProjectCardV2 :project="project" class="flex-1" /> -->
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION CONTACTS -->
        <section class="w-full bg-primary-gray-50 dark:bg-gray-900 py-20 md:py-28 2xl:py-32 overflow-hidden" id="contacts">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:gap-16 md:px-8">
                <div class="flex flex-col items-center gap-4 text-center animate-fade-in-up">
                    <div class="inline-flex items-center justify-center rounded-full bg-primary-gray-200 dark:bg-gray-800 px-4 py-1.5 animate-scale-in">
                        <p class="text-sm font-medium text-primary-gray-800 dark:text-gray-200">{{ t('contact.title') }}</p>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-gray-900 dark:text-gray-50 animate-fade-in-up" style="animation-delay: 0.1s">
                        {{ t('contact.subtitle') }}
                    </h2>
                    <p class="text-base md:text-lg max-w-2xl text-primary-gray-600 dark:text-gray-400 animate-fade-in-up" style="animation-delay: 0.2s">
                        {{ t('contact.description') }}
                    </p>
                </div>
                <div class="flex flex-col items-center gap-8 md:gap-12">
                    <div class="flex flex-col items-center gap-6 w-full max-w-md">
                        <a href="mailto:gabriel.developed@gmail.com" 
                           class="flex items-center gap-4 p-4 w-full rounded-xl bg-white dark:bg-gray-800 border border-primary-gray-200 dark:border-gray-700 hover:border-primary-gray-300 dark:hover:border-gray-600 transition-all group animate-fade-in-up hover:scale-105 hover:shadow-lg"
                           style="animation-delay: 0.3s">
                            <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-gray-100 dark:bg-gray-700 group-hover:bg-primary-gray-200 dark:group-hover:bg-gray-600 transition-colors group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-gray-700 dark:text-gray-300">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </div>
                            <div class="flex-1">
                                <p class="text-sm text-primary-gray-500 dark:text-gray-400">{{ t('contact.email') }}</p>
                                <p class="text-base font-medium text-primary-gray-900 dark:text-gray-50">gabriel.developed@gmail.com</p>
                            </div>
                        </a>
                        <a href="tel:+5585987409563" 
                           class="flex items-center gap-4 p-4 w-full rounded-xl bg-white dark:bg-gray-800 border border-primary-gray-200 dark:border-gray-700 hover:border-primary-gray-300 dark:hover:border-gray-600 transition-all group animate-fade-in-up hover:scale-105 hover:shadow-lg"
                           style="animation-delay: 0.4s">
                            <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-gray-100 dark:bg-gray-700 group-hover:bg-primary-gray-200 dark:group-hover:bg-gray-600 transition-colors group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-gray-700 dark:text-gray-300">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div class="flex-1">
                                <p class="text-sm text-primary-gray-500 dark:text-gray-400">{{ t('contact.phone') }}</p>
                                <p class="text-base font-medium text-primary-gray-900 dark:text-gray-50">+55 (85) 98740-9563</p>
                            </div>
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-3 animate-fade-in-up" style="animation-delay: 0.5s">
                        <p class="text-sm text-primary-gray-600 dark:text-gray-400">{{ t('contact.findMe') }}</p>
                        <div class="flex gap-3">
                            <a href="https://github.com/gbrlstr" target="_blank"
                                class="flex justify-center items-center text-primary-gray-700 dark:text-gray-300 hover:text-primary-gray-900 dark:hover:text-gray-50 hover:bg-primary-gray-100 dark:hover:bg-gray-800 rounded-lg p-2.5 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                            <a href="https://x.com/gbrl_str" target="_blank"
                                class="flex justify-center items-center text-primary-gray-700 dark:text-gray-300 hover:text-primary-gray-900 dark:hover:text-gray-50 hover:bg-primary-gray-100 dark:hover:bg-gray-800 rounded-lg p-2.5 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                            <a href="https://br.linkedin.com/in/gabriel-carlos" target="_blank"
                                class="flex justify-center items-center text-primary-gray-700 dark:text-gray-300 hover:text-primary-gray-900 dark:hover:text-gray-50 hover:bg-primary-gray-100 dark:hover:bg-gray-800 rounded-lg p-2.5 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                                <svg class="w-5 h-5" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                                    <rect width="132" height="132" x="30" y="30" stroke="currentColor" stroke-width="12" rx="16" />
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M66 86v44" />
                                    <circle cx="66" cy="64" r="8" fill="currentColor" />
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<style>
.animate-ping-slow {
    animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>