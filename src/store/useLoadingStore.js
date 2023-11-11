import { create } from 'zustand';

export const useLoadingStore = create((set) => ({
  loading: true,
  removeLoading: () => set({ loading: false }),
}));
