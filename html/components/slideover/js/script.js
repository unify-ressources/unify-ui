import { OffCanvas } from "@flexilla/offcanvas";

const slideOvers = Array.from(document.querySelectorAll("[data-slideover]"));

for (const slideover of slideOvers) {
  new OffCanvas(slideover);
}
