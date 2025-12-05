<script setup lang="ts">
import { ref, onMounted } from "vue";
import profileImage from '@/assets/perfil.jpg'
import SkillComponent from '@/components/SkillComponent.vue';
import { ISkill } from '@/types/index';
import { useGithub } from '@/composable/useGithub';
import ProjectCard from '@/components/ProjectCard.vue';

const { getProjects } = useGithub();

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

        <!-- SECTIO HERO -->
        <section class="w-full bg-primary-gray dark:bg-gray py-16 md:py-20 2xl:py-24" id="hero">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div class="flex flex-col gap-12 md:flex-row">

                    <div v-motion="{ from: 'left', speed: 5 }" class="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                        <div class="hover:animate-pulse relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]"><img
                                alt="Profile" loading="lazy" width="1067" height="1067" decoding="async" data-nimg="1"
                                class="absolute z-10 h-[280px] w-[240px] border-8 border-primary-gray dark:border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                                style="color:transparent;object-fit:cover"
                                :srcset="`${profileImage} 1x, ${profileImage} 2x`" :src="profileImage">
                            <div
                                class="absolute h-[280px] w-[280px] border-8 border-transparent bg-primary-gray-200 dark:bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]">
                            </div>
                            <span
                                class="animate-ping-slow absolute h-[220px] ml-4 mt-9 w-[220px] inline-flex border-2 rounded-md border-green-400 opacity-75"></span>
                            <!-- <span class="animate-ping-slow absolute h-[210px] ml-4 mt-9 w-[210px] inline-flex border-2 rounded-md border-green-400 opacity-75"></span> -->
                        </div>
                    </div>

                    <div v-motion="{ from: 'right' }" class="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
                        <div class="flex flex-col gap-2">
                            <h1 class="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-primary-gray-900 dark:text-gray-900">
                                Hi, I'm Gabriel<!-- --> <span class="inline-block animate-waving-hand">👋</span></h1>
                            <p class="text-normal text-base text-primary-gray-800 dark:text-gray-900">I'm a full stack developer with a
                                focus on creating exceptional digital experiences that are
                                fast, accessible, visually appealing, and responsive. Even though I have been creating
                                web
                                applications for over 5 years, I still love it as if it was something new.</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="stroke-primary-gray-600 dark:stroke-gray-600">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <p class="text-normal text-base text-primary-gray-800 dark:text-gray-900">Fortaleza-CE, Brasil</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center"><span
                                        class="relative flex h-3 w-3"><span
                                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span
                                            class="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span></span>
                                </div>
                                <p class="text-normal text-base text-primary-gray-800 dark:text-gray-900">Available for new projects</p>
                            </div>
                        </div>
                        <div class="flex gap-1">
                            <a href="https://github.com/gbrlstr" target="_blank"
                                class="relative flex justify-center items-center text-gray-50 dark:text-gray-600 hover:bg-primary-gray-100 active:bg-primary-gray-200 dark:hover:bg-gray-100 dark:active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-github">
                                    <path
                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                    </path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg></a>
                            <a href="https://x.com/gbrl_str" target="_blank"
                                class="relative flex justify-center items-center text-gray-50 dark:text-gray-600 hover:bg-primary-gray-100 active:bg-primary-gray-200 dark:hover:bg-gray-100 dark:active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-twitter">
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                    </path>
                                </svg></a>
                            <a href="https://br.linkedin.com/in/gabriel-carlos" target="_blank"
                                class="relative flex justify-center items-center text-gray-50 dark:text-gray-600 hover:bg-primary-gray-100 active:bg-primary-gray-200 dark:hover:bg-gray-100 dark:active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6">
                                <svg class="w-8 " viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    stroke="currentColor">
                                    <g id="SVGRepo_iconCarrier">
                                        <rect width="132" height="132" x="30" y="30" stroke="currentColor" stroke-width="12"
                                            rx="16" />
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="12" d="M66 86v44" />
                                        <circle cx="66" cy="64" r="8" fill="currentColor" />
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="12"
                                            d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION SKILLS -->
        <section class="w-full bg-primary-gray-50 dark:bg-gray-50 py-16 md:py-20 2xl:py-24" id="skills">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div class="flex flex-col items-center gap-4">
                    <div class="self-center">
                        <div class="flex items-center justify-center rounded-xl bg-primary-gray-200 dark:bg-gray-200 px-5 py-1">
                            <p class="text-normal text-sm font-medium text-primary-gray-800 dark:text-gray-900">My Tech Stack</p>
                        </div>
                    </div>
                    <p class="text-normal text-lg md:text-xl max-w-xl text-center text-primary-gray-800 dark:text-gray-900">The skills, tools and technologies I am
                        really good at:</p>
                </div>

                <div class="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12 ">
                    <SkillComponent v-for="(skill, index) in skillsInfo" :key="index" :skill="skill" />
                </div>
            </div>
        </section>

        <!-- SECTION PROJECTS -->
        <section class="w-full bg-primary-gray dark:bg-gray py-16 md:py-20 2xl:py-24" id="projects">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div class="flex flex-col items-center gap-4">
                    <div class="self-center">
                        <div class="flex items-center justify-center rounded-xl bg-primary-gray-200 dark:bg-gray-200 px-5 py-1">
                            <p class="text-normal text-sm font-medium text-primary-gray-800 dark:text-gray-900">Projects</p>
                        </div>
                    </div>
                    <p class="text-normal text-lg md:text-xl max-w-xl text-center text-primary-gray-800 dark:text-gray-900">Some of the noteworthy projects I have
                        built:</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <!-- <ProjectCardV2 v-for="project in projects" :key="project.id" :project="project" class="flex-1" /> -->
                        <ProjectCard v-for="project in projects.slice(0,6)" :key="project.id" :project="project" class="flex-1" />
                   
                </div>
            </div>
        </section>

        <!-- SECTION CONTACTS -->
        <section class="hover:transition-all w-full bg-primary-gray-50 dark:bg-gray-50 py-16 md:py-20 2xl:py-24" id="contacts">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div class="flex flex-col items-center gap-4">
                    <div class="self-center">
                        <div class="flex items-center justify-center rounded-xl bg-primary-gray-200 dark:bg-gray-200 px-5 py-1">
                            <p class="text-normal text-sm font-medium text-primary-gray-800 dark:text-gray-900">Get in touch</p>
                        </div>
                    </div>
                    <p v-motion="{ from: 'right' }" class="text-normal text-lg md:text-xl max-w-xl text-center text-primary-gray-800 dark:text-gray-900">What’s next? Feel free to reach out to me
                        if you are looking for a developer, have a query, or simply want to connect.</p>
                </div>
                <div class="flex flex-col items-center gap-6 md:gap-12">
                    <div class="flex flex-col items-center md:gap-4">
                        <div class="flex items-center gap-4 md:gap-5"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 md:h-8 md:w-8 text-primary-gray-900 dark:text-gray-900">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <h2 v-motion="{ from: 'left' }" class="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-primary-gray-900 dark:text-gray-900">
                                gabriel.developed@gmail.com</h2><button
                                class="relative flex justify-center items-center hover:bg-gray-100 hover:bg-primary-gray-300 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-8 [&amp;_svg]:h-8"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-copy text-primary-gray-900 dark:text-gray-900">
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg></button>
                        </div>
                        <div v-motion="{ from: 'right' }" class="flex items-center gap-4 md:gap-5 text-primary-gray-900 dark:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 md:h-8 md:w-8">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                </path>
                            </svg>
                            <h2 class="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-primary-gray-900 dark:text-gray-900">+55 (85)
                                98740-9563
                            </h2><button
                                class="relative flex justify-center items-center hover:bg-primary-gray-300  active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-8 [&amp;_svg]:h-8"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-copy">
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg></button>
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <p v-motion="{ from: 'right' }" class="text-normal text-base text-center text-primary-gray-900 dark:text-gray-900">You may also find me on these platforms!</p>
                        <div v-motion="{ from: 'right', speed: 5 }" class="flex gap-1"><button
                                class="relative flex justify-center items-center hover:bg-primary-gray-300 active:bg-primary-gray-200 dark:hover:bg-gray-100 dark:active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-github text-primary-gray-900 dark:text-gray-900">
                                    <path
                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                    </path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg></button><button
                                class="relative flex justify-center items-center hover:bg-primary-gray-300 active:bg-primary-gray-200 dark:hover:bg-gray-100 dark:active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-twitter text-primary-gray-900 dark:text-gray-900">
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                    </path>
                                </svg></button><button
                                class="relative flex justify-center items-center hover:bg-primary-gray-300 active:bg-primary-gray-200 dark:hover:bg-gray-100 dark:active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-figma text-primary-gray-900 dark:text-gray-900">
                                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                                </svg></button></div>
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