import { create } from "zustand";

const useStore = create((set) => ({
  locale: "en",
  setLocale: () =>
    set((state) => ({ locale: state.locale === "en" ? "ar" : "en" })),
}));

export default useStore;
