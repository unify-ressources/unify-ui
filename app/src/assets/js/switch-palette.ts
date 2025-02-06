import { $, $$ } from "./selector";

export const initSwitchPalette = () => {
    const paletteContainer = $('[data-palette-container]')

    if (paletteContainer instanceof HTMLElement) {
        const palettes = $$("[data-palette-color]", paletteContainer)

        const initPalette = () => {
            const activeItem = $('[aria-checked="true"]', paletteContainer)
            if (activeItem instanceof HTMLElement) {
                activeItem.setAttribute('tabindex', '-1')
                activeItem.setAttribute("aria-checked", "false")
            }

            const currentPalette = document.documentElement.getAttribute("data-palette")
            const current = $(`[data-palette-color][id=${currentPalette}]`, paletteContainer)
            if (current) {
                current.setAttribute('aria-checked', 'true');
                current.setAttribute('tabindex', '0');
            }
        }

        initPalette()

        for (const paletteBtn of palettes) {
            paletteBtn.addEventListener("click", e => {
                e.preventDefault()
                const name = paletteBtn.getAttribute("id")
                document.documentElement.setAttribute("data-palette", `${name}`)
                const activeItem = $('[aria-checked="true"]', paletteContainer)

                if (activeItem instanceof HTMLElement) {
                    activeItem.setAttribute('tabindex', '-1')
                    activeItem.setAttribute("aria-checked", "false")
                }
                paletteBtn.setAttribute('aria-checked', 'true');
                paletteBtn.setAttribute('tabindex', '0');
                localStorage.setItem("palette", `${name}`);
            })
        }

        palettes.forEach((paletteBtn, index) => {
            paletteBtn.addEventListener('keydown', (event) => {
                const key = event.key;
                switch (key) {
                    case 'ArrowDown':
                    case 'ArrowRight':
                        event.preventDefault();
                        if (index < palettes.length - 1) {
                            palettes[index + 1].focus();
                        } else {
                            palettes[0].focus();
                        }
                        break;
                    case 'ArrowUp':
                    case 'ArrowLeft':
                        event.preventDefault();
                        if (index > 0) {
                            palettes[index - 1].focus();
                        } else {
                            palettes[palettes.length - 1].focus();
                        }
                        break;
                    case 'Home':
                        event.preventDefault();
                        palettes[0].focus();
                        break;
                    case 'End':
                        event.preventDefault();
                        palettes[palettes.length - 1].focus();
                        break;
                }
            });
        });
    }
}