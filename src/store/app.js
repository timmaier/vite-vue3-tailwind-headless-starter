import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  function toggleLightMode() {
    localStorage.theme = "light";
    theme.value = "light";
    checkTheme();
  }

  function toggleDarkMode() {
    localStorage.theme = "dark";
    theme.value = "dark";
    checkTheme();
  }

  function toggleOSMode() {
    localStorage.removeItem("theme");
    checkTheme();
  }

  return {
    toggleLightMode,
    toggleDarkMode,
    toggleOSMode,
  };
});
