<template>
<WelcomeWrapper>
  <div ref="login" />
</WelcomeWrapper>
</template>

<script setup lang="ts">
import WelcomeWrapper from '@/components/WelcomeWrapper.vue';
import { useAuth } from '@/composables/useClerk';
import { onMounted, ref } from 'vue';

const login = ref<HTMLElement | null>(null);
const { mountSignIn } = useAuth();
onMounted(() => mountSignIn(login.value! as HTMLDivElement));
</script>
