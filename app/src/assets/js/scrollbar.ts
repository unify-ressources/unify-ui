import { OverlayScrollbars } from 'overlayscrollbars';
import { $$ } from './selector';

export const initScrollbar = ()=>{
    const elements = $$('[data-hidden-scrollbar-s]')
for (const element of elements) {
    OverlayScrollbars(element, {});
}

}