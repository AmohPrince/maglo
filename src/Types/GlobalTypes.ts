export type Transaction = {
  name: string;
  company: string;
  type: string;
  amount: number;
  date: string;
  img: string;
};

export type GlobalContextType = {
  transactions: Transaction[];
};
