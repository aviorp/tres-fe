<template>
  <div class="w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
    <slot v-if="color" name="cover">
      <div :class="`w-full h-2 bg-${color}-600`" />
    </slot>
    <div class="p-4">
      <slot name="title" />
      <h3 v-if="title" class="text-xl font-medium text-gray-900 dark:text-gray-200">{{ title }}</h3>
      <p v-if="subtitle" class="mt-1 text-sm text-gray-500 dark:text-gray-300">{{ subtitle }}</p>
      <p class="mt-1 text-gray-500">
        <slot />
      </p>
      <div class="mt-4 flex gap-2">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';


const props = defineProps<{
  /**
   * The title of the card
   */
  title?: string;
  /**
   * The subtitle of the card
   */
  subtitle?: string;
  /**
   * Hide the cover of the card
   */
   color?: string;

}>();

const {title, subtitle, color } = toRefs(props);
</script>

<style scoped></style>