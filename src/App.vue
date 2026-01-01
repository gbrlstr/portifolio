<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Main from '@/components/layout/Main.vue'
import Footer from '@/components/layout/Footer.vue'
import { useTheme } from '@/composable/useTheme'
import { onMounted } from 'vue';

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
})

</script>

<template>
  <Header />

  <Main />

  <Footer />
</template>

<style scoped></style>
