export const initNavbar = () => {
  const navbar = document.querySelector("[data-navbar]");
  const navTrigger = document.querySelector("[data-toggle-navbar]");
  if (navbar instanceof HTMLElement && navTrigger instanceof HTMLButtonElement) {

    const hideNavBar = () => {
      navbar.setAttribute("data-state", "close");
      navTrigger.setAttribute("aria-expanded", "false");
      navTrigger.setAttribute("data-state", "close");
      document.body.classList.remove("hidden-scrollbar-on-navopen")
      document.removeEventListener("click", hideNavOnClickOutSide);
    }
    const hideNavOnClickOutSide = (ev: MouseEvent) => {
      if (!navTrigger.contains(ev.target as Node)) {
        hideNavBar();
      }
    }

    const toggleNavbar = () => {
      const state = navbar.dataset.state || "close";
      navbar.setAttribute(
        "data-state",
        `${state === "open" ? "close" : "open"}`
      );
      navTrigger.setAttribute(
        "data-state",
        `${state === "open" ? "close" : "open"}`
      );
      navTrigger.setAttribute(
        "aria-expanded",
        `${state === "open" ? "false" : "true"}`
      );
      document.body.classList[state === "open" ? "remove" : "add"]("hidden-scrollbar-on-navopen")
      if (state === "close") {
        document.addEventListener("click", hideNavOnClickOutSide);
      } else {
        document.removeEventListener("click", hideNavOnClickOutSide);
      }
    }

    navTrigger.addEventListener("click", toggleNavbar);
    navbar.addEventListener("click", hideNavBar);
  }
}