<template>
  <span class="inline-flex items-center gap-1 rounded-full  px-3 py-1 text-sm font-semibold" :class="classes"> {{ title }} </span>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
const props = defineProps<{
  /**
   * The title of the chip
   */
  title: string;

  /**
   * The color of the chip
   */
  color?: string;

  /**
   * The size of the chip
   */
  size?: "small" | "medium" | "large";

}>();
const { title, color, size } = toRefs(props);


const classes = computed(() => {
  return [
    `bg-${color?.value || 'primary'}-50 text-${color?.value|| 'primary'}-600`,
    size?.value === "small" ? "px-2 py-1 text-xs" : '',
    size?.value === "large" ? "px-4 py-2 text-lg" : '',
  ]
})

</script>