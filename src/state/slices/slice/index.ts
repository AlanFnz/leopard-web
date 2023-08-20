import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  Checkout,
  CheckoutLineItem,
  CheckoutLineItemInput,
  Product,
} from 'shopify-buy';

type State = {
  data: any[];
  errorMessage: string;
  loading: boolean;
};

const useStore = create<State>()(
  persist(
    (set, get) => ({
      data: [],
      errorMessage: '',
      loading: false,
    }),
    {
      name: 'leopard-store',
      partialize: (state) => ({ checkout: state.data }),
    }
  )
);

export default useStore;
