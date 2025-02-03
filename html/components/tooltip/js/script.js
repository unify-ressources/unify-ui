import { Tooltip } from "@flexilla/tooltip";
import "@flexilla/tooltip/tooltip.css"

const tooltips = Array.from(document.querySelectorAll("[data-fx-tooltip]"));
for (const tooltip of tooltips) {
  new Tooltip(tooltip);
}
