import { Modal } from "@flexilla/modal";
import "@flexilla/modal/modal.css"

// Initialize modals on elements with the 'data-alert-dialog' attribute.
const modals = Array.from(document.querySelectorAll("[data-alert-dialog]"));
for (const modal of modals) {
  new Modal(modal);
}
