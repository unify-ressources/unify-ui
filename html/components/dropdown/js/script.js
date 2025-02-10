import { Dropdown } from "@flexilla/dropdown";
import "@flexilla/dropdown/dropdown.css";

const dropdowns = Array.from(document.querySelectorAll("[data-drop-down]"));
for (const dropdown of dropdowns) {
  new Dropdown(dropdown);
}
