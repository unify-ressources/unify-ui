import { ref } from "vue"

export const copyToClipboard = async ({ snippet, onCopy, onCopyCompleted, timeout = 1000 }: { snippet: HTMLElement | string | undefined | null, onCopy?: () => void, onCopyCompleted?: () => void, timeout?: number }) => {
    if (snippet instanceof HTMLElement || typeof snippet === 'string') {
        let valueToCopy = ''
        const timer = ref<NodeJS.Timeout | null>(null)
        const startTimeOut = (callback: () => void) => {
            timer.value = setTimeout(() => {
                callback()
            }, timeout)
        }

        const cancelTimeout = () => {
            timer.value && clearTimeout(timer.value)
        }
        if (typeof snippet === 'string')
            valueToCopy = snippet
        else
            valueToCopy = snippet.innerText

        onCopy && onCopy()
        await navigator.clipboard.writeText(valueToCopy)

        const onCompleted = () => {
            onCopyCompleted && onCopyCompleted()
            cancelTimeout()
        }
        if (onCopyCompleted) startTimeOut(onCompleted)
    }
}