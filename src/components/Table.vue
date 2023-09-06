<template>
  <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md">
    <table class="w-full shadow-lg h-full  p-4 text-left text-sm text-gray-500 rounded-xl">

      <thead class="bg-gray-50">
        <tr v-for="group in headerGroups">
          <th :class="column.column.getCanSort() ? 'cursor-pointer select-none' : ''
            " @click="column.column.getToggleSortingHandler()?.($event)" v-for="column in (group.headers)" scope="col" class="px-6 py-4 font-medium text-gray-900 capitalize">
            <template v-if="!column.isPlaceholder">
              <div class="flex items-center no-wrap gap-2">
                <FlexRender :render="column.column.columnDef.header" :props="column.getContext()" />
                <img class="h-4 w-4" :src="sortingIcon(column.column.getIsSorted() as string)">
              </div>
            </template>
          </th>
        </tr>

      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        <tr v-for="(row) in  rows " :key="row.id" class="odd:bg-white even:bg-gray-50">
          <td class="px-6 py-4" v-for="cell in  row.getVisibleCells() " :key="cell.id">
            <a v-if="cell.column.columnDef.header === redirectCell" class="cursor-pointer text-blue-600" @click="$emit('onRowClicked', row)">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </a>
            <FlexRender v-else :render="cell.column.columnDef.cell" :props="cell.getContext()" />
          </td>
        </tr>

      </tbody>
      <tfoot class="flex items-center gap-4 p-4">
        <p>
          Showing
          {{ $attrs.modelValue.getRowModel().rows.length }}
          of
          {{ $attrs.modelValue.getPageCount() * $attrs.modelValue.getState().pagination.pageSize }} entries
        </p>
        <ul class="flex items-center -space-x-px h-8 text-sm">
          <li @click="$emit('pagination', 'previous')">
            <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ $attrs.modelValue.getState().pagination.pageIndex + 1 }}</a>
          </li>
          <li @click="$emit('pagination', 'next')">
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>

      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { FlexRender } from '@tanstack/vue-table';
import { toRefs, } from 'vue';
import ArrowUp from '@/assets/icons/arrow-up.svg';
import ArrowDown from '@/assets/icons/arrow-down.svg';
const props = defineProps({
  headerGroups: {
    type: Array,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
  redirectCell: {
    type: String,
    default: '',
  },
})
const { headerGroups, rows, redirectCell } = toRefs(props);

const sortingIcon = (condition: boolean | string) => {
  if (condition === 'asc') {
    return ArrowUp;
  }
  if (condition === 'desc') {
    return ArrowDown;
  }
  return null;
}
</script>