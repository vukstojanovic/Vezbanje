import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const peopleStore = (set) => ({
  people: ["Vuk Stojanovic", "Kristina Radenkovic"],
  addPerson: (person) =>
    set((state) => ({
      people: [...state.people, person],
    })),
});

const themeStore = (set) => ({
  dark: "dark",
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

const usePeopleStore = create(devtools(peopleStore));
const useThemeStore = create(persist(devtools(themeStore), { name: "user" }));

export { usePeopleStore, useThemeStore };
