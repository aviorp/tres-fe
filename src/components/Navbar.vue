<template>
  <nav class="bg-white border-b border-gray-200 dark:border-gray-50 fixed z-30 w-full dark:bg-gray-800">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">

        <div class="text-xl font-bold flex items-center lg:ml-2.5">
          <svg @click="toggleDrawer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span class="self-center whitespace-nowrap dark:text-white">TRES</span>
        </div>
        <div class="max-w-36">
          <Button label="Add Transaction" @click="showModal = !showModal" class="max-w-36" />
        </div>

        <Modal v-if="showModal" @close="showModal = false" title="Add New Transaction" @confirm="createTransaction(newTransaction)">
          <div class="flex flex-col gap-4 h-screen">
            <input v-model="newTransaction.hash" placeholder="Hash" class="block p-2  w-full rounded-md shadow-md border border-gray-300  focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
            <input v-model="newTransaction.from" placeholder="From" class="block p-2  w-full rounded-md shadow-md border border-gray-300  focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
            <input v-model="newTransaction.to" placeholder="To" class="block p-2  w-full rounded-md shadow-md border border-gray-300  focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
            <input v-model="newTransaction.value" type="number" placeholder="Value" class="block p-2  w-full rounded-md shadow-md border border-gray-300  focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
            <input v-model="newTransaction.fee" type="number" placeholder="Fee" class="block p-2  w-full rounded-md shadow-md border border-gray-300  focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
            <input v-model="newTransaction.method" placeholder="Method" class="block p-2  w-full rounded-md shadow-md border border-gray-300  focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
          </div>
        </Modal>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { toggleDrawer } from '@/composables/useLayout';
import Button from './Button.vue';
import Modal from './Modal.vue';
import Input from './Input.vue';
import { reactive, ref } from 'vue';
import { QueryClient, useMutation } from '@tanstack/vue-query';
import transactions from '@/api/transactions';
const showModal = ref(false);

const queryClient = new QueryClient();
const newTransaction = reactive({
  hash: '',
  from: '',
  to: '',
  value: 0,
  fee: 0,
  time: new Date().toISOString(),
  method: '',
  user_id: "12312",
})

const { mutate: createTransaction } = useMutation(
  data => transactions.create(data),
  {
    onSuccess: () => {
      showModal.value = false;
    },
    onSettled: () => {
      showModal.value = false;
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
    },
  })

</script>

