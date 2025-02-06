
import { sidebarItems } from "@/data/index";
import type {  SidebarItem } from "@/types/index";

export type SlugPaginate = {
    title: string;
    slug: string;
    description:string,
    keywords:string
}



export const findItemsByName = (name: string): SidebarItem[] | undefined => {
    for (const item of sidebarItems) {
        if (item.name === name) {
            const data = item.items.map(item => name === "components" ? item.label === "Getting Started" ? [] : item.items : item.items).flat()
            return data
        }
    }
    return undefined;
}

const flatMapItems = (name: string): SlugPaginate[] | undefined => {
    const data = findItemsByName(name)
    return data?.flatMap((item) => ({ title: item.title, slug: item.path, description: item.description, keywords: item.keywords }))
}


const getActiveIndex = (array_: SlugPaginate[], slug: string) => {
    return array_.findIndex((item) => item.slug === slug)
}


export const getPagger = ({ slug, name, baseUrl }: { slug: string, name: string, baseUrl: string }) => {
    const flatMap = flatMapItems(name) as SlugPaginate[]

    const flatenedItems = [...flatMap]
    const activeIndex = getActiveIndex(flatenedItems, `/${baseUrl}/${slug}`)
    const prev = activeIndex !== 0 ? flatenedItems[activeIndex - 1] : null
    const next = activeIndex !== flatenedItems.length - 1 ? flatenedItems[activeIndex + 1] : null
    const current = flatenedItems[activeIndex]
    return { prev, next, current }
}