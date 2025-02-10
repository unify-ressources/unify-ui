import { CustomRange } from "@flexilla/custom-range"

const constumRanges = Array.from(document.querySelectorAll("[data-custom-range-wrapper]"))

for (const customRange of constumRanges) {
    new CustomRange(customRange)
}