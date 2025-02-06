import "./tab-content-menu"
import { Collapse, Tabs, Accordion, Modal, Dropdown, Tooltip, CustomRange, OffCanvas, AutoResizeTextArea } from "@flexilla/flexilla"
import { $$ } from "./selector"

export const initdDocsScript = () => {
    OffCanvas.autoInit("[data-ui-offcanvas]")

    const collaspses = $$("[data-fx-collapse]")

    for (const collaspe of collaspses) {
        new Collapse(collaspe, {
            defaultState: "open"
        })
    }

    Modal.autoInit()
    OffCanvas.autoInit()
    Tabs.autoInit('[data-tab-fx-site]')
    Tabs.autoInit('[data-tabs]')
    Accordion.autoInit('[data-accordion]')
    Dropdown.autoInit('[data-drop-down]')

    Tooltip.autoInit()
    Tooltip.autoInit("[data-popover]")
    CustomRange.autoInit("[data-custom-range-wrapper]")
    AutoResizeTextArea.autoInit()
}
