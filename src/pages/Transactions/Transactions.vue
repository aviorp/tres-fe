<template>
  <Page :is-loading="isLoading">
    <section class="flex items-center justify-between gap-6 xs:flex-col">
      <Card class="mt-12  w-full" title="Transactions" subtitle="(Last 24H)" hide-cover>
        <div class="flex items-center justify-between gap-10">
          <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold -mt-12 ">
            14.6%
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </Card>
      <Card class="mt-12  w-full" title="Transactions" subtitle="(Last 24H)">
        <div class="flex items-center justify-between gap-10">
          <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold -mt-12 ">
            14.6%
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </Card>
      <Card class="mt-12  w-full" title="Transactions" subtitle="(Last 24H)" hide-cover>
        <div class="flex items-center justify-between gap-10">
          <div class="ml-5 w-0 flex items-center justify-end flex-1 text-pink-500 text-base font-bold -mt-12 ">
            14.6%
            <svg class="w-5 h-5 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </Card>
    </section>
    <Table v-model="table" :rows="rows" :headerGroups="headerGroups" @pagination="onPaginationChanged" redirect-cell="Hash" @on-row-clicked="onRowClicked" />
    <Footer />
  </Page>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import Table from "@/components/Table.vue";
import Page from '@/layouts/Page.vue';
import transactionsService from "@/api/transactions";
import { COLUMNS as columns } from './constants';
import { computed, ref } from 'vue';
import { Transaction } from "@/types";
import { createTableContext } from '@/utils';
import { getSortedRowModel } from "@tanstack/vue-table";
import { useQuery } from "@tanstack/vue-query";
import { useRouter } from "vue-router";


const router = useRouter();
const { isLoading, data, error } = useQuery({
  queryKey: ['transactions'],
  queryFn: () => transactionsService.getAll(),
  refetchOnWindowFocus: true
})

type Row = {
  original: Transaction
}

const sorting = ref<any[]>([]);

const table = createTableContext<Transaction>({
  columns,
  // @ts-ignore
  data: data,
  state: {
    get sorting() {
      return sorting.value
    },
  },
  onSortingChange: updaterOrValue => {
    sorting.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(sorting.value)
        : updaterOrValue
  },
  getSortedRowModel: getSortedRowModel(),
  enableSorting: true,
});

const onPaginationChanged = (type: string) => {
  if (type === 'previous') {
    table.setPageIndex(table.getState().pagination.pageIndex - 1);
  } else if (type === 'next') {
    table.setPageIndex(table.getState().pagination.pageIndex + 1);
  }
};


const headerGroups = computed(() => table.getHeaderGroups() || []);
const rows = computed(() => table.getRowModel().rows || []);


const onRowClicked = ({ original }: Row) => {
  router.push({ name: 'Transaction', params: { id: original!.id } })
}
</script>
