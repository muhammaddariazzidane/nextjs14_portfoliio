import { create } from 'zustand';

export const useProjectStore = create((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
  removeSelectedId: () => set({ selectedId: null }),
}));
