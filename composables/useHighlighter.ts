import { useNuxtApp } from "nuxt/app"

export const useHighlighter = () => {
    const { $highlighter } = useNuxtApp();
    return $highlighter;
}