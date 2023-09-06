<template>
<Page class="bg-white relative">
  <div ref="UserProfile" class="absolute left-2" />
</Page>
</template>

<script setup lang="ts">
import {onMounted, ref   } from 'vue';
import Page from '@/layouts/Page.vue';
import { clerk } from '@/composables/useClerk';

const UserProfile = ref<HTMLDivElement | null>(null);

onMounted(()=> clerk.value.mountUserProfile(UserProfile.value! as HTMLDivElement));

</script>


