import { create } from "zustand";

export const useRuteStore = create((set) => ({
  data: {},
  setUserData: (value) => set({ userData: value }),
}));
