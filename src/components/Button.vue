<template>
  <button type="button" v-bind="$attrs" class=" dark:bg-primary-700   dark:hover:bg-primary-800 dark:focus:ring-primary-500 dark:disabled:cursor-not-allowed inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-lg border border-primary-500 bg-primary-500 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300" :class="classes">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = defineProps<{
  /**
   * The label of the button
   */
  label: string;
  /**
   * primary or secondary button
   */

  size?: "small" | "medium" | "large";
}>();

const { label, size, } = toRefs(props);
const classes = computed(() => {
  return [size?.value === "small" ? "h-8 px-3 text-sm" : size?.value === "large" ? "h-12 px-6 text-lg" : "h-10 px-4 text-base",]
})
</script>

<style scoped></style>
