export const getThemePreference = () => {
  const currentTheme = localStorage.getItem("theme");
  if (localStorage !== undefined && currentTheme) {
    return currentTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
const isDark = getThemePreference() === "dark";
document.documentElement.classList[isDark ? "add" : "remove"]("dark");

if (localStorage) {
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
}
