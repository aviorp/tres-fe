<template>
  <WelcomeWrapper>
    <div ref="SignUp" />
  </WelcomeWrapper>
  </template>
  
  <script setup lang="ts">
  import WelcomeWrapper from '@/components/WelcomeWrapper.vue';
  import {  useAuth } from '@/composables/useClerk';
  import { onMounted, ref } from 'vue';
  
  const SignUp = ref<HTMLElement | null>(null);
  const { mountSignUp } = useAuth();
  onMounted(() =>  mountSignUp(SignUp.value! as HTMLDivElement));
  </script>
  