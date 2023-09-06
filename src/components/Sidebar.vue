<template>
  <aside class="fixed sm:w-full lg:w-64  z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 bg-white dark:bg-gray-800 flex-col w-64 duration-75 shadow-lg" aria-label="Sidebar">
    <div class="flex-1 flex flex-col pt-5 pb-4 px-3 overflow-y-auto">
      <ul class="space-y-2 pb-2">
        <li v-for="item in NAV_ITEMS" :key="item.title">
          <router-link :to="item.to" v-slot="{ href, navigate }" custom>
            <a :href="href" @click="navigate" class="text-base dark:text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-600 group">{{ item.title }}</a>
          </router-link>
        </li>
      </ul>
    </div>
    <Button label="Logout" @click="logout" >Logout</Button>
  </aside>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useClerk';
import { NAV_ITEMS } from '@/composables/useLayout';
import Button from './Button.vue';

const { logout } = useAuth();

</script>

