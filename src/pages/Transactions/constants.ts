import { Transaction } from "@/types";
import { createColumnHelper } from "@tanstack/vue-table";

const columnHelper = createColumnHelper<Transaction>();


export const COLUMNS = [
  columnHelper.accessor('hash', {
    header: 'Hash',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('method', {
    header: 'Method',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('time', {
    header: 'Time',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('from', {
    header: 'From',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('to', {
    header: 'To',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('value', {
    header: 'Value',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('fee', {
    header: 'Fee',
    cell: info => info.getValue(),
  }),
]