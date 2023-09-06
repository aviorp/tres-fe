<template>
  <Page :is-loading="isLoading">
    <Card color="pink" :title="title" :subtitle="subtitle">
      <div class="flex flex-col  gap-2 py-2">
        <p>
          Method:
          <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            {{ data.method }}
          </span>
        </p>
        <p>
          From: {{ data.from }}
        </p>
        <p>
          To: {{ data.to }}
        </p>
        <p>
          Value: {{ data.value }}
        </p>
        <p>
          Fee: {{ data.fee }}
        </p>
        <p>
          Owner: {{ data.user_id }}
        </p>

      </div>
    </Card>

  </Page>
</template>

<script setup lang="ts">
import transactions from '@/api/transactions';
import Card from '@/components/Card.vue';
import Page from '@/layouts/Page.vue';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const { params } = useRoute();

const { isLoading, data } = useQuery({
  queryKey: ['transactions', params.id],
  queryFn: () => transactions.getOne(params.id),
});


const title = computed(() => {
  if (data.value) {
    return `Transaction ${data.value.hash}`;
  }
  return 'Transaction';
});

const subtitle = computed(() => {
  if (data.value) {
    return `Transction ID:  ${data.value.id}`;
  }
  return 'Transaction';
});
</script>

<style scoped></style>