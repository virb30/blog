import { defineNuxtPlugin } from "nuxt/app";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';


export default defineNuxtPlugin((nuxtApp) => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('python', python);
    hljs.registerLanguage('php', php);
    return {
        provide: {
            highlighter: hljs
        }
    }
})




