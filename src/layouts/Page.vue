<template>
  <main class="overflow-hidden relative p-4 pt-16 min-h-screen h-full w-full bg-gray-50 dark:bg-black  overflow-y-auto flex  flex-col gap-10" :class="{ 'lg:pl-72': isOpen }">
    <Loading v-if="isLoading" />
    <slot v-else />
  </main>
</template>

<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import { isOpen } from '@/composables/useLayout';
import { toRefs } from 'vue';

const props = defineProps({
  isLoading: Boolean,
});
const { isLoading } = toRefs(props);
</script>
