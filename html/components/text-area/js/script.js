import { AutoResizeTextArea } from "@flexilla/auto-resize-area";
const resizableTextAreas = Array.from(
  document.querySelectorAll("textarea[data-autoresizable]")
);

for (const resizableTextArea of resizableTextAreas) {
  new AutoResizeTextArea(resizableTextArea);
}