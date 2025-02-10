import type { ComponentCode } from "@/types/index"
import { acCodes } from "./accordion/ac_codes"
import { alertCode } from "./alert/alert_code"
import { codeCards } from "./card/codeCard"
import { codeDropdowns } from "./dropdown/code_Dropdown"
import { radioCode } from "./radio/radioCode"
import { popoverCode } from "./popover/popoverCode"

export const allComponentCode: ComponentCode = {
    ...acCodes,
    ...alertCode,
    ...codeCards,
    ...codeDropdowns,
    ...radioCode,
    ...popoverCode,
}