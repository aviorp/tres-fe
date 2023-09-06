import { TableOptions, useVueTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/vue-table';
export function createTableContext<T>(options: TableOptions<T>) {
  return useVueTable({
    ...options,
    get data() {
      return options.data.value;
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  } as TableOptions<any>);
}
