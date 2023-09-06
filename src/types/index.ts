export type NavItem = {
  title: string;
  to: string;
  icon?: () => void;
}
export type Transaction = {
  id?: string;
  hash: string;
  method: string;
  time: string;
  from: string;
  to: string;
  value: string;
  fee: string;
};  