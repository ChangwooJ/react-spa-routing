import { create } from "zustand";

const useDarkModeStore = create((set) => ({
  isDark: localStorage.getItem("theme") === "dark",
  toggleDark: () =>
    set((state) => {
      const newTheme = !state.isDark;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return { isDark: newTheme };
    }),
  setDark: (value) =>
    set(() => {
      if (value) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return { isDark: value };
    }),
}));

export default useDarkModeStore;